const fs = require('fs');
const json = require('comment-json'); // support of json with comments
if (!process.argv[2])
	throw "Please provide the name of the theme you're tweaking, options are: \n`npm tweak sepia`\n`npm tweak sepia-from-cuttlefish`";
const themeName = process.argv[2];
const pathToUserSettings = require('./path-to-user-settings.js'); // vscode's user settings json file

const userSettings = json.parse(fs.readFileSync(pathToUserSettings));
if (!userSettings)
	throw "Failed to locate settings.json of VSCode, please check scripts/path-to-user-settings.js to find why";

const palette = require(`../palettes/${themeName}/palette.js`);
console.log(palette);

const rules = require('./buildRules.js')(themeName);
if (!rules)
	throw `Can't find valid rules in syntax-highlighting-rules/${themeName}`;

for (let i of rules)
	i.settings.foreground = palette[i.settings.foreground];

const officialThemeName = (() => {
	switch (themeName) {
		case 'sepia':
			return 'Sepia';
		case 'sepia-from-cuttle-fish':
			return 'Sepia from Cuttlefish';
		default:
			throw `Unrecognized theme name "${themeName}"`;
	}
})();

// create keys in userSettings if not existed:
userSettings['editor.tokenColorCustomizations'] = userSettings['editor.tokenColorCustomizations'] || {};
userSettings['editor.tokenColorCustomizations'][`[${officialThemeName}]`] = userSettings['editor.tokenColorCustomizations'][`[${officialThemeName}]`] || {};

userSettings['editor.tokenColorCustomizations'][`[${officialThemeName}]`].textMateRules = rules;
fs.writeFileSync(pathToUserSettings, json.stringify(userSettings, null, 4));
