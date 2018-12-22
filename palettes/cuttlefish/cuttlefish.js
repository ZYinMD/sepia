/*
问题:
  salmon和orange在night light下过于接近, 考虑去掉salmon
  出现lint error时的红色波浪线颜色太深
  inactive tab的颜色需要比active要黑才行
  activity bar太黄
  check the debug color of cuttlefish
*/

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
  'blue',
  'cyan',
  'indigo',
  'violet',
  'pomegranate',
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
  function: 'lime',
  call: 'lime',
  parameter: 'cream',
  argument: 'jade',
  module: 'pomegranate',
  declaration: 'blue',
  string: 'yellow',
  reserved: 'gold',
  builtIn: 'cyan',
  inherited: 'cyan',
  storage: 'cyan',
  number: 'orange',
  operator: 'pomegranate',
  control: 'pomegranate',
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
