var upBtn = document.getElementById('up');
var downBtn = document.getElementById('down');
var leftBtn = document.getElementById('left');
var rightBtn = document.getElementById('right');
var character = document.getElementById('character');

upBtn.onclick = function () {
	var topValue = character.style.top;
	if(topValue == '') {
		topValue = 0;
	} else {
		topValue = topValue.slice(0, topValue.length - 2);
	}
	topValue = parseInt(topValue);
	newTopValue = topValue - 10;

	character.style.top = newTopValue + 'px';
}

downBtn.onclick = function () {
	var topValue = character.style.top;
	if(topValue == '') {
		topValue = 0;
	} else {
		topValue = topValue.slice(0, topValue.length - 2);
	}
	topValue = parseInt(topValue);
	newTopValue = topValue + 10;

	character.style.top = newTopValue + 'px';
}

leftBtn.onclick = function () {
	var leftValue = character.style.left;
	if(leftValue == '') {
		leftValue = 0;
	} else {
		leftValue = leftValue.slice(0, leftValue.length - 2);
	}
	leftValue = parseInt(leftValue);
	newleftValue = leftValue - 10;

	character.style.left = newleftValue + 'px';
}

rightBtn.onclick = function () {
	var leftValue = character.style.left;
	if(leftValue == '') {
		leftValue = 0;
	} else {
		leftValue = leftValue.slice(0, leftValue.length - 2);
	}
	leftValue = parseInt(leftValue);
	newleftValue = leftValue + 10;

	character.style.left = newleftValue + 'px';
}