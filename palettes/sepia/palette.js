/*
灵感: check firebreak, salmon, crimson, chocolate, Darkorchid from web colors
目前问题:
需要一个parameter的颜色, 考虑接近chocolate或者firebreak
出来可以考虑名叫maroon, 然后本来的maroon叫red,  red删掉不用了, error用pink
另外出来之后将会很接近magenta, magenta考虑不要了
unsure现在alias到了magenta, 考虑改成一个深绿色

purple不够紫, 应该再接近darkorchid一点, 反正出现频率很低
tan和yellow合并成brown, 给string用


 */
// this file will be used both by node and by browser

const palette = {
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


const aliases = {
	default: palette.grey,
	variable: palette.olive,
	property: palette.olive,
	function: palette.green,
	call: palette.cyan,
	parameter: palette.yellow,
	argument: palette.yellow,
	module: palette.maroon,
	declaration: palette.blue,
	tag: palette.blue,
	string: palette.tan,
	reserved: palette.teal,
	builtIn: palette.teal,
	inherited: palette.teal,
	storage: palette.teal,
	number: palette.orange,
	operator: palette.orange,
	control: palette.maroon,
	flow: palette.black,
	constant: palette.purple,
	regex: palette.yellow,
	keyword: palette.blue,
	unsure: palette.magenta,
	invalid: palette.red,
	deprecated: palette.pink,
}

try {
	module.exports = Object.assign(palette, aliases);
} catch (err) {
	// the exports can be used in node, browser doesn't understand it, but browser can use the palette.
}
