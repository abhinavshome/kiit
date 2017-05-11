var onBtn = document.getElementById('on-btn');
var offBtn = document.getElementById('off-btn');
var output = document.getElementById('output');

onBtn.onclick = function() {
	output.innerHTML = 'ON';
}

offBtn.onclick = function() {
	output.innerHTML = 'OFF';
}
