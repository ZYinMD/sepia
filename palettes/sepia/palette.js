var palette = {
	default: '#836e69',
	grey: '#999d',
	red: '#f00',
	cyan: '#099e',
	orange: '#f77b00e6',
	olive: '#890',
	maroon: '#c10c',
	yellow: '#b82',
	teal: '#088',
	purple: '#940094ab',
	tan: '#97733dd0',
	blue: '#08ad',
	magenta: '#b36d',
	green: '#094e',
	black: '#000'
};

try {
	module.exports = palette;
} catch (err) {
	// the exports can be used in node, browser doesn't understand it, but browser can use the palette.
}
