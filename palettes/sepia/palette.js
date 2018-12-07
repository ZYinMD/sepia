var palette = {
	default: '#836e69',
	grey: '#999d',
	red: '#f00',
	maroon: '#c10c',
	green: '#094e',
	blue: '#08ad',
	yellow: '#b82',
	purple: '#940094ab',
	cyan: '#099e',
	orange: '#f77b00e6',
	olive: '#890',
	pink: '#fad',
	teal: '#088',
	tan: '#97733dd0',
	magenta: '#b36d',
	black: '#000'
};

try {
	module.exports = palette;
} catch (err) {
	// the exports can be used in node, browser doesn't understand it, but browser can use the palette.
}
