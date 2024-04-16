const express = require('express');
const router = express.Router();
const { ChessGame, ChessMove } = require('../models/ChessGame'); 

router.post('/save-game', async (req, res) => {
    try {
        const { move } = req.body;
        const newChessMove = new ChessMove({
            move,
        });

        await newChessMove.save();
        res.status(200).json({ message: 'Game saved successfully' });
    } catch (error) {
        console.error('Error saving game:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;