/**
 * read themeName.js and themeName.css in the themeName folder
 * return an object containing color and value pairs, also alias and value pairs
 */
function lookupCSS(themeName) {
  const res = {};
  const theme = require(`../${themeName}/${themeName}.js`);
  const cssString = require('fs').readFileSync(
    require('path').join(
      __dirname, '..', themeName, `${themeName}.css`
    ), 'utf-8'
  );
  const css = require('cssjson').toJSON(cssString);
  for (let colorName of theme.availableColors) {
    let cssSelector = `.${themeName} .${colorName}`;
    let colorValue = css.children[cssSelector].attributes.color;
    if (typeof colorValue !== 'string')
      colorValue = colorValue[colorValue.length - 1]; // if more than one values exist in the css, use the last one;
    res[colorName] = colorValue;
  }
  for (let alias in theme.aliases)
    res[alias] = res[theme.aliases[alias]];
  return res;
}

module.exports = lookupCSS;
