// Make connection 
const socket = io.connect("http://localhost:4000");

// Query DOM
let message, handle, btn, output, typing;
message = document.getElementById("message");
handle = document.getElementById("handle");
btn = document.getElementById("btn");
output = document.getElementById("output");
typing = document.getElementById('nowtyping');

// Emit events 
btn.addEventListener('click',() => {
	socket.emit('chat', {
		message: message.value,
		handle: handle.value
	});
});

message.addEventListener('keypress',() => {
	socket.emit('typing',handle.value);
});

// Listen for events coming back from server 
socket.on('chat',(data) => {
	console.log(data);
	typing.innerHTML = "";
	output.innerHTML += '<p><strong>' + data.handle + ' :</strong> ' + data.message + '</p>';
});

socket.on('typing',(data) => {
	typing.innerHTML = '<p>' + data + ' is tying a message...</p>';
});
