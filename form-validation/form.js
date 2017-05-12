var input = document.getElementById('username');
var btn = document.getElementById('submit_btn');
var error = document.getElementById('username_error');

btn.onclick = function () {
	console.log('form submitted');
	var errors = [];

	if(input.value.length < 8) {
		errors.push('Mim 8 chars');
	}

	if(input.value.charAt(0) == '_') {
		errors.push('First letter cant be _');
	}

	if(errors.length > 0) {
		console.log(errors);
		error.innerHTML = errors.join('<br/>');
		return false;
	}
	

}