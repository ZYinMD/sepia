/*
目前问题:
unsure现在alias到了magenta, 考虑改成一个深绿色
如果找到合适的深绿色, 把extended class也改成深绿色, 因为现在和xxx extend xxx的extend是teal, 颜色相邻。另外extended class和class一个绿一个深绿也很不错
make lilac color for <?php?>, refer to google image pho


 */
// this file will be used both by node and by browser

const cssString = require('fs').readFileSync(
	require('path').join(__dirname, 'style.css'),
	'utf-8'
	);
const css = require('cssjson').toJSON(cssString);

console.log(css.children['.grey']);




const palette = {
	silver: '#999c',
	neutral: '#8b6d3ccc',
	grey: '#8d796b',
	black: '#2d2d2d',
	pink: '#f08c',
	purple: '#909a',
	magenta: '#b36d',
	maroon: '#c10c',
	red: '#f00',
	russet: '#c51d',
	rosy: '#e53d',
	orange: '#f77b00e7',
	yellow: '#b79533',
	tan: '#96733ccc',
	olive: '#890',
	green: '#094e',
	cyan: '#30a195',
	blue: '#08bd',
	indigo: '#78b',
	teal: '#088',
};

const aliases = {
	default: palette.grey,
	variable: palette.olive,
	property: palette.olive,
	function: palette.green,
	call: palette.cyan,
	parameter: palette.indigo,
	argument: palette.olive,
	module: palette.maroon,
	declaration: palette.blue,
	tag: palette.blue,
	string: palette.yellow,
	reserved: palette.teal,
	builtIn: palette.teal,
	inherited: palette.teal,
	storage: palette.teal,
	number: palette.orange,
	operator: palette.orange,
	control: palette.maroon,
	flow: palette.black,
	constant: palette.purple,
	regex: palette.rosy,
	keyword: palette.blue,
	curveball: palette.indigo,
	invalid: palette.red,
	deprecated: palette.pink,
}

try {
	module.exports = Object.assign(palette, aliases);
} catch (err) {
	// the exports can be used in node, browser doesn't understand it, but browser can use the palette.
}
