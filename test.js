var btn = document.getElementById('btn');
var messages = [];

btn.onclick = function () {
	var myMessage = document.getElementById('myMessage').value;
	console.log(myMessage);

	var computerMessage = 'Computer: You said ' + myMessage;

	messages.push(myMessage);
	messages.push(computerMessage);

	var chatBox = document.getElementById('messages');
	chatBox.innerHTML = '';
	for(var i = 0; i < messages.length; i++) {
		chatBox.innerHTML += messages[i] + '<br/>';
	}
	document.getElementById('myMessage').value = '';

}
