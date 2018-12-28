// ★ this file will be read both by node and by browser ★
const sepia = {};

/**
 * all available colors of this theme
 * open palette.html to see what they look like
 * to change the color values, edit the css
 * the classes in the css must match this array
 */
sepia.availableColors = [
  'silver',
  'neutral',
  'grey',
  'black',
  'pink',
  'purple',
  'magenta',
  'maroon',
  'red',
  'russet',
  'rosy',
  'orange',
  'yellow',
  'tan',
  'olive',
  'oliver',
  'green',
  'cyan',
  'blue',
  'indigo',
  'teal'
];

/**
 * aliases to the colors
 * both the color names and the aliases will be recognized
 * aliases are strongly encouraged, as color names affect all other themes that you're not currently tweaking
 */
sepia.aliases = {

  default: 'grey',
  comment: 'silver',
  string: 'yellow',
  declaration: 'blue',

  // variables related:
  variable: 'olive',
  property: 'olive',
  argument: 'olive',
  assignment: 'oliver',

  // functions related:
  function: 'green',
  call: 'cyan',
  parameter: 'indigo',
  functionAndCall: 'green', // in some languages like c#, function declaration and function call are the same scope

  // keywords:
  reserved: 'green', // self, this, etc
  storage: 'teal', // static, public, private, etc
  inherited: 'russet', // inherited class
  builtIn: 'teal', // built-in functions and methods, usually a call
  curveball: 'russet', // scope "support.type", often miscellaneous legal stuff
  otherKeywords: 'blue', // keywords scoped as "keyword.other.xxx", including things like get, set in c#

  // common miscs:
  module: 'maroon',
  operator: 'orange',
  control: 'maroon',
  number: 'orange',
  flow: 'black',
  constant: 'purple',

  // uncommon miscs:
  interpolation: 'rosy',
  regex: 'rosy',
  invalid: 'red',
  deprecated: 'pink',
  docstring: 'russet',

  // html css ↓
  tag: 'blue',
  class: 'green',
  id: 'magenta',
  attribute: 'olive',
  reactComponent: 'cyan',
  cssProperty: 'olive',
  atRule: 'maroon',
  cssVariable: 'rosy',

  // json:
  jsonKey: 'olive',
  jsonString: 'yellow',

  // php:
  php: 'indigo',

  // markdown:
  mdHeading: 'green',
  mdWord: 'russet',
  mdOL: 'cyan',
  mdUL: 'olive',
  mdLink: 'blue',
  mdCode: 'black',
  mdQuote: 'teal',
  mdSeparator: 'rosy',
};

// for node only ↓
if (typeof window === 'undefined') {
  module.exports = sepia;
}
