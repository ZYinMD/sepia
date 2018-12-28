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

var userSettings;
try {
  userSettings = json.parse(fs.readFileSync(pathToUserSettings));
} catch (err) {
  console.error("Failed to load the settings.json of VSCode, check it for trailing commas or syntax errors (comments are allowed), if you're sure settings.json is valid json, then check scripts/path-to-user-settings.js");
  throw(err);
}

const rules = require('./buildRules.js')();
const palette = require('../palettes/_utils/lookup-css.js')(themeName);

for (let i of rules) {
  if (i.settings.foreground) // sometimes there's no foreground property, only italic or bold
    i.settings.foreground = palette[i.settings.foreground];
}

// create keys in userSettings if not existed:
userSettings['editor.tokenColorCustomizations'] = userSettings['editor.tokenColorCustomizations'] || {};
userSettings['editor.tokenColorCustomizations'][`[${officialThemeName}]`] = userSettings['editor.tokenColorCustomizations'][`[${officialThemeName}]`] || {};

userSettings['editor.tokenColorCustomizations'][`[${officialThemeName}]`].textMateRules = rules;
fs.writeFileSync(pathToUserSettings, json.stringify(userSettings, null, 4));

console.log('Success! The changes has been effective in your VSCode.');
