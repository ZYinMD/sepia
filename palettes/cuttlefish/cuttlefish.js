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
  'tomato',
  'orange',
  'gold',
  'cream',
  'yellow',
  'lime',
  'green',
  'jade',
  'jader',
  'blue',
  'cyan',
  'indigo',
  'violet',
  'magenta',
];

/**
 * aliases to the colors
 * both the color names and the aliases will be recognized
 * aliases are strongly encouraged, as color names affect all other themes that you're not currently tweaking
 */
cuttlefish.aliases = {
  default: 'neutral',
  comment: 'translucent',
  variable: 'jade',
  property: 'jade',
  function: 'green',
  assignment: 'jader',
  call: 'lime',
  parameter: 'cream',
  argument: 'jade',
  module: 'magenta',
  declaration: 'blue',
  string: 'yellow',
  reserved: 'gold',
  builtIn: 'cyan',
  inherited: 'cyan',
  storage: 'cyan',
  number: 'orange',
  operator: 'magenta',
  control: 'magenta',
  flow: 'white',
  constant: 'violet',
  regex: 'rosy',
  keyword: 'blue',
  curveball: 'indigo',
  invalid: 'tomato',
  deprecated: 'pink',
  docstring: 'copper',
  interpolation: 'gold',
  // html & css ↓
  tag: 'blue',
  class: 'cream',
  id: 'rosy',
  attribute: 'jade',
  reactComponent: 'cyan',
};

// for node only ↓
if (typeof window === 'undefined') {
  module.exports = cuttlefish;
}
