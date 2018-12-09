// 灵感: check firebreak, salmon, crimson, chocolate, Darkorchid from web colors
// 目前问题:
// magenta太紫,应该再接近尹至红一点
// purple不够紫, 应该再接近darkorchid一点
// string不够黄, tan应该再接近yellow一点

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
	property: palette.olive,
	function: palette.green,
	call: palette.cyan,
	parameter: palette.yellow,
	module: palette.maroon,
	declaration: palette.blue,
	string: palette.tan,
	reserved: palette.magenta,
	builtIn: palette.teal,
}

try {
	module.exports = Object.assign(palette, alias);
} catch (err) {
	// the exports can be used in node, browser doesn't understand it, but browser can use the palette.
}
