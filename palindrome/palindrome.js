function isPalindrome(str) {
	var l = str.length;
	if(l % 2 == 0) {
		var mid = l/2;
		var firstHalf = str.slice(0, mid);
		var secondHalf = str.slice(mid, l);
		return firstHalf == secondHalf.split('').reverse().join('');
	}
	else {
		var mid = Math.floor(l/2);
		var firstHalf = str.slice(0, mid);
		var secondHalf = str.slice(mid + 1, l);
		return firstHalf == secondHalf.split('').reverse().join('');
	}
}