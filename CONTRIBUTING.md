## How to contribute:

1. Fork and clone this repo. Install dependencies by running `npm i` (you need to have [node](https://nodejs.org)).
2. Open ./palettes/palettes.html in browser to see the available colors for the theme you're interested in.
3. Open ./palettes/theme_name/theme_name.js to see how the aliases are mapped.
4. Open ./syntax-highlighting-rules and edit the json files. Use aliases or color names, not color values.
5. run `npm run visualize` to see what it looks like in VSCode, no need to refresh. (Back up your settings.json first just in case, although you shouldn't need to.)
6. Keep tweaking the rules, create new aliases if needed, submit a pull request when satisfied.
7. Delete the `"editor.tokenColorCustomizations"` entry in your settings.json afterwards.
