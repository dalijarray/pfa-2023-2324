const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('./config/connect.js');
const chessGameRouter = require('./routes/ChessGame');
const User = require('./routes/user.js')
const puzzleRoutes = require('./routes/puzzle');
const imageRoutes = require('./routes/imageRoutes.js'); // Import imageRoutes.js
const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = socketIO(server);
io.on('connection', function(socket) {
    console.log('new connection');
    socket.on("move", function(moveData) {
        console.log('got message from client' + moveData);
        socket.broadcast.emit('move',moveData);
    });
});
app.use('/api/images', imageRoutes);
app.use('/api',User);
app.use('/api', chessGameRouter);
app.use('/api/puzzles', puzzleRoutes);
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
