const express = require('express');
const socket = require('socket.io');

// setup App
const app = express();
const port = 4000;
const server = app.listen(port,() => {
	console.log(`server is listening on port ${port}`);
});

// Static files
app.use(express.static('public'));

// Set up socket
const io = socket(server);

io.on('connection',(socket) => {
	console.log('Connection established!!',socket.id);

	// Handle chat event
	socket.on('chat',(data) => {
		console.log(data);
		io.sockets.emit('chat',data);
	});
});
