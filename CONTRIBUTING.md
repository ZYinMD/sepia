## How to contribute:

1. Fork and clone this repo. Install dependencies by running `npm i` in project root(you need to have [node](https://nodejs.org)).
2. Run `npm run palettes` to see the available colors for the theme you're interested in.
3. Open ./palettes/theme_name/theme_name.js to see how the aliases are mapped.
4. Open ./syntax-highlighting-rules and edit the json files in there. Use aliases you found in 3. Note that the file names of these json files are not important, it's just for organizing purposes. All rules will eventually be concatenated together and shared by all languages, what really matters is the scope.
5. run `npm run implement` to see what it looks like in VSCode, no need to refresh. (Back up your settings.json first, just in case, although you shouldn't need to.)
6. Keep tweaking the rules, create new aliases if necessary, submit a pull request when satisfied.
7. Delete the `"editor.tokenColorCustomizations"` entry in your settings.json afterwards.
