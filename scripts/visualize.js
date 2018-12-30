const fs = require('fs');
const json = require('comment-json'); // this module supports json with comments

try {
  var pathToUserSettings = require('./path-to-user-settings.js'); // vscode's user settings json file
  var userSettings = json.parse(fs.readFileSync(pathToUserSettings));
} catch (err) {
  console.error("Failed to load the settings.json of VSCode, check it for trailing commas or syntax errors (comments are allowed), if you're sure settings.json is valid json, then check scripts/path-to-user-settings.js");
  throw(err);
}

const themes = { // an object literal with keys being the filenames of the themes, and value being the official names of the themes in the extention
  sepia: 'Sepia',
  cuttlefish: 'Sepia from Cuttlefish',
}
const lookupCss = require('../palettes/_utils/lookup-css.js');

for (let themeName in themes) {
  const palette = lookupCss(themeName);
  const officialThemeName = themes[themeName];
  const rules = require('./buildRules.js')();
  for (let i of rules) {
    if (i.settings.foreground) // sometimes there's no foreground property, only italic or bold
      i.settings.foreground = palette[i.settings.foreground];
  }

  // create keys in userSettings if not existed:
  userSettings['editor.tokenColorCustomizations'] = userSettings['editor.tokenColorCustomizations'] || {};
  userSettings['editor.tokenColorCustomizations'][`[${officialThemeName}]`] = userSettings['editor.tokenColorCustomizations'][`[${officialThemeName}]`] || {};

  userSettings['editor.tokenColorCustomizations'][`[${officialThemeName}]`].textMateRules = rules;
}

fs.writeFileSync(pathToUserSettings, json.stringify(userSettings, null, 2));

console.log('Success! The changes have been effective in your VSCode.');
