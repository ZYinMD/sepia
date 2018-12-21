const terminalPalette = [
	"black",
	"blue",
	"cyan",
	"green",
	"magenta",
	"red",
	"white",
	"yellow",
	"brightblack",
	"brightblue",
	"brightcyan",
	"brightgreen",
	"brightmagenta",
	"brightred",
	"brightwhite",
	"brightyellow",
];
const colorNames = document.querySelector('section.color-names');
const lines = document.querySelector('section.lines');
const combinations = document.querySelector('section.combinations');

// dropdown action
const dropdown = document.querySelector('#theme-select');
const body = document.querySelector('body');
body.className = dropdown.value = localStorage.getItem('selectedTheme') || 'sepia';
drawPalette();
dropdown.addEventListener('change', event => {
	localStorage.setItem('selectedTheme', body.className = event.target.value);
	drawPalette();
});

function drawPalette() {
	colorNames.innerHTML = lines.innerHTML = combinations.innerHTML = '';
	for (let color of terminalPalette) {
		let colorName = document.createElement('p');
		colorName.innerText = color;
		colorName.classList.add(color);
		colorNames.append(colorName);

		let line = document.createElement('p');
		line.innerText = color + ': Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod';
		line.classList.add(color);
		lines.append(line);

		let combination = document.createElement('p');
		for (let i of terminalPalette) {
			if (color == i)
				continue;
			let A = `<span class="${color}">${color}</span>`;
			let B = `<span class="${i}">${i}</span>`;
			combination.innerHTML += (A + B);
		}
		combinations.innerHTML += `<h2 class="${color}">${color}:</h2>`;
		combinations.append(combination);
	}
}
