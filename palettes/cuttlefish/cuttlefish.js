// ★ this file will be read both by node and by browser ★

const cuttlefish = {};

/**
 * all available colors of this theme
 * open palette.html to see what they look like
 * to change the color values, edit the css
 * the classes in the css must match this array
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
  function: 'cream',
  call: 'lime',
  parameter: 'green',
  functionAndCall: 'lime', // in some languages like c#, function declaration and function call are the same scope

  // keywords:
  reserved: 'cream', // self, this, etc
  storage: 'cyan', // static, public, private, etc
  inherited: 'indigo', // inherited class
  builtIn: 'gold', // built-in functions and methods, usually a call
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
  interpolation: 'rosy',
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
  mdHeading: 'cream',
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
