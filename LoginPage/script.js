const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	if (username.value === '') {
		alert('Please enter your username');
	} else if (password.value === '') {
		alert('Please enter your password');
	} else {
		alert(`Welcome, ${username.value}!`);
		form.reset();
	}
});
