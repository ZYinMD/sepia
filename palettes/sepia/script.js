const skippedColors = ['default', 'grey', 'red', 'black']; // colors not needed to show combinations with others
var colors = Object.keys(palette);
const lines = document.querySelector('section.lines');
const blocks = document.querySelector('section.blocks');
const combinations = document.querySelector('section.combinations');
colors.forEach((color, index, colors) => {
	let line = document.createElement('p');
	line.innerText = color + ': Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor';
	line.classList.add(color);
	lines.append(line);
	let block = document.createElement('p');
	block.innerText = color + ": Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	block.classList.add(color);
	blocks.append(block);

	for (let i = index + 1; i < colors.length; i++) {
		let color2 = colors[i];
		if (skippedColors.includes(color) || skippedColors.includes(color2))
			continue;
		let combo = document.createElement('p');
		let A = `<span class="${color}">${color}</span>`;
		let B = `<span class="${color2}">${color2}</span>`
		// // combo.innerHTML = `<span class="${color}">${color}</span><span class="${color2}">${color2}</span><span class="${color}">${color}</span><span class="${color2}">${color2}</span>`
		combo.innerHTML = A + B + A + B + A + A + B + B;
		combinations.append(combo);
	}
})
