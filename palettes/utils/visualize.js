const dropdown = document.querySelector('#theme-select');
const body = document.querySelector('body');
body.className = dropdown.value = localStorage.getItem('selectedTheme') || 'sepia';
dropdown.addEventListener('change', event => {
	localStorage.setItem('selectedTheme', body.className = event.target.value);
});
