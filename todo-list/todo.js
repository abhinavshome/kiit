var inputEl = document.getElementById('input');
var listEl = document.getElementById('list');
var btnEl = document.getElementById('btn');

btnEl.onclick = function () {
	listEl.innerHTML += '<div>' + '<input class="cb" type="checkbox"/>' +inputEl.value + '</div>';
	inputEl.value = '';
}

document.getElementsByTagName('input');