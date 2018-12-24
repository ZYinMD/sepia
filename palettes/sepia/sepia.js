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
  'jungle',
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
  variable: 'olive',
  property: 'olive',
  function: 'green',
  assignment: 'jungle',
  call: 'cyan',
  parameter: 'indigo',
  argument: 'olive',
  module: 'maroon',
  declaration: 'blue',
  string: 'yellow',
  reserved: 'teal',
  builtIn: 'teal',
  inherited: 'jungle',
  storage: 'teal',
  number: 'orange',
  operator: 'orange',
  control: 'maroon',
  flow: 'black',
  constant: 'purple',
  regex: 'rosy',
  keyword: 'blue',
  curveball: 'indigo',
  invalid: 'red',
  deprecated: 'pink',
  docstring: 'tan',
  interpolation: 'orange',
  // html ↓
  tag: 'blue',
  class: 'green',
  id: 'magenta',
  attribute: 'olive',
  reactComponent: 'cyan',
};

// for node only ↓
if (typeof window === 'undefined') {
  module.exports = sepia;
}
