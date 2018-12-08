// this file will be used both by node and by browser

var palette = {
	grey: '#836e69',
	silver: '#999c',
	black: '#2d2d2d',
	pink: '#f08c',
	purple: '#940094ab',
	magenta: '#b36d',
	maroon: '#c10c',
	red: '#f00',
	orange: '#f77b00e6',
	yellow: '#b82',
	tan: '#97733dd0',
	olive: '#890',
	green: '#094e',
	cyan: '#30a195',
	blue: '#08bd',
	teal: '#088',
};

var alias = {
	default: palette.grey,
	variable: palette.olive,
	function: palette.green,
	parameter: palette.yellow,
	module: palette.maroon,
	declaration: palette.blue,
}

try {
	module.exports = Object.assign(palette, alias);
} catch (err) {
	// the exports can be used in node, browser doesn't understand it, but browser can use the palette.
}
