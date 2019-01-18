// ★ this file will be read both by node and by browser via palette.html

const cuttlefish = {};

/**
 * aliases to the colors
 *
 * both color names and the aliases will work in the json files
 * aliases are strongly encouraged, as color names affect all other themes that you're not currently tweaking
 */
cuttlefish.availableColors = [
  'white',
  'neutral',
  'translucent',
  'copper',
  'rosy',
  'pink',
  'magenta',
  'red',
  'orange',
  'gold',
  'cream',
  'yellow',
  'lime',
  'aqua',
  'green',
  'jade',
  'jader',
  'blue',
  'cyan',
  'indigo',
  'violet',
];

/**
 * aliases to the colors
 * both the color names and the aliases will be recognized
 * aliases are strongly encouraged, as color names affect all other themes that you're not currently tweaking
 */
cuttlefish.aliases = {
  default: 'neutral',
  comment: 'translucent',
  string: 'yellow',
  declaration: 'blue',

  // variables related:
  variable: 'jade',
  property: 'jade',
  argument: 'jade',
  assignment: 'jader',

  // functions related:
  function: 'green',
  call: 'lime',
  parameter: 'cream',
  functionAndCall: 'lime', // in some languages like c#, function declaration and function call are the same scope

  // keywords:
  reserved: 'gold', // self, this, etc
  storage: 'cyan', // static, public, private, etc
  inherited: 'rosy', // inherited class
  builtIn: 'aqua', // built-in functions and methods, usually a call
  curveball: 'gold', // scope "support.type", often miscellaneous legal stuff
  otherKeywords: 'blue', // keywords scoped as "keyword.other.xxx", including things like get, set in c#

  // common miscs:
  module: 'magenta',
  operator: 'magenta',
  control: 'magenta',
  number: 'orange',
  flow: 'white',
  constant: 'violet',

  // uncommon miscs:
  interpolation: 'magenta',
  regex: 'rosy',
  invalid: 'red',
  deprecated: 'pink',
  docstring: 'copper',

  // html & css:
  tag: 'blue',
  class: 'cream',
  id: 'rosy',
  attribute: 'jade',
  reactComponent: 'cyan',
  cssProperty: 'lime',
  atRule: 'magenta',
  cssVariable: 'jader',

  // json:
  jsonKey: 'lime',
  jsonString: 'cyan',

  // php:
  php: 'indigo',

  // markdown:
  mdHeading: 'green',
  mdWord: 'gold',
  mdOL: 'jader',
  mdUL: 'lime',
  mdLink: 'blue',
  mdCode: 'white',
  mdQuote: 'cyan',
  mdSeparator: 'rosy',
};

// for node only:
if (typeof window === 'undefined') {
  module.exports = cuttlefish;
}
