// models/puzzle.js

const mongoose = require("mongoose");

// Schéma Mongoose pour les puzzles
const puzzleSchema = new mongoose.Schema({
  FEN: String,
  Rating: Number,
  Popularity: Number,
  Themes: [String],
  // Autres champs du puzzle
});

// Modèle Mongoose pour les puzzles
const Puzzle = mongoose.model("Puzzle", puzzleSchema);

async function getPuzzlesByRating(rating) {
  try {
    // Recherche les puzzles avec un rating égal à la valeur spécifiée
    const puzzles = await Puzzle.find({ Rating: rating });
    return puzzles;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des puzzles par rating:",
      error
    );
    throw error;
  }
}

async function getPuzzlesByPopularity(popularity) {
  try {
    // Recherche les puzzles avec une popularité égale à la valeur spécifiée
    const puzzles = await Puzzle.find({ Popularity: popularity }, "FEN Moves");
    return puzzles;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des puzzles par popularité:",
      error
    );
    throw error;
  }
}

async function getPuzzlesByTheme(theme) {
  try {
    // Recherche les puzzles dont le tableau de thèmes contient le mot spécifié
    const puzzles = await Puzzle.find(
      { Themes: { $regex: theme, $options: "i" } },
      "FEN Moves"
    );
    return puzzles;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des puzzles par thème:",
      error
    );
    throw error;
  }
}

async function getPuzzlesByFilter(popularity, rating) {
  try {
    // Convertir la popularité en nombre
    popularity = Number(popularity);

    // Recherche initiale pour récupérer les FEN et les Moves basés sur le rating
    const initialResults = await Puzzle.find(
      { Rating: rating }
    );
      

    // Filtrer les résultats initiaux par thème et popularité
    const filteredResults = initialResults.filter(puzzle =>
       puzzle.Popularity === popularity
    );

    return filteredResults;
  } catch (error) {
    console.error("Erreur lors de la récupération des puzzles par filtre:", error);
    throw error;
  }
}



module.exports = {
  getPuzzlesByRating,
  getPuzzlesByPopularity,
  getPuzzlesByTheme,
  getPuzzlesByFilter,
};
