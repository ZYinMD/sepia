const fs = require('fs');
const json = require('comment-json'); // this module supports json with comments
const themeName = process.argv[2];
const officialThemeName = {
  sepia: 'Sepia',
  cuttlefish: 'Sepia from Cuttlefish'
}[themeName];

if (!themeName || !officialThemeName) {
  console.error(`Please provide the name of the theme you're tweaking, options are:
  For the theme "Sepia":
    "npm run visualize sepia"
  For the theme "Sepia from Cuttlefish":
    "npm run visualize cuttlefish"`);
  process.exit();
}

const pathToUserSettings = require('./path-to-user-settings.js'); // vscode's user settings json file

var userSettings
try {
  userSettings = json.parse(fs.readFileSync(pathToUserSettings));
} catch (err) {
  throw "Failed to locate settings.json of VSCode, please check scripts/path-to-user-settings.js to find why";
}

const rules = require('./buildRules.js')();
const palette = require('../palettes/_utils/lookup-css.js')(themeName);

for (let i of rules)
  i.settings.foreground = palette[i.settings.foreground];

// create keys in userSettings if not existed:
userSettings['editor.tokenColorCustomizations'] = userSettings['editor.tokenColorCustomizations'] || {};
userSettings['editor.tokenColorCustomizations'][`[${officialThemeName}]`] = userSettings['editor.tokenColorCustomizations'][`[${officialThemeName}]`] || {};

userSettings['editor.tokenColorCustomizations'][`[${officialThemeName}]`].textMateRules = rules;
fs.writeFileSync(pathToUserSettings, json.stringify(userSettings, null, 4));

console.log('Success! The changes is already effective in your VSCode.');
