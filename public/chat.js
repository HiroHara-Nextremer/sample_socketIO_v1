// Make connection 
const socket = io.connect("http://localhost:4000");

// Query DOM
let message, handle, btn, output;
message = document.getElementById("message");
handle = document.getElementById("handle");
btn = document.getElementById("btn");
output = document.getElementById("output");

// Emit events 
btn.addEventListener('click',() => {
	socket.emit('chat', {
		message: message.value,
		handle: handle.value
	});
});

// Listen for events coming back from server 
socket.on('chat',(data) => {
	console.log(data);
	output.innerHTML += '<p><strong>' + data.handle + ' :</strong> ' + data.message + '</p>';
});
