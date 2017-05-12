var btn = document.getElementById('btn');
var timer = document.getElementById('timer');
var hero = document.getElementById('hero');
var i = 0;
setTimeout(function () {
	console.log('hi');
}, 2000);

var interval = setInterval(function () {
	timer.innerHTML = i;
	hero.style.left = i*10 + 'px';
	i++;
}, 500);

btn.onclick = function () {
	clearInterval(interval);
}

console.log('bye');