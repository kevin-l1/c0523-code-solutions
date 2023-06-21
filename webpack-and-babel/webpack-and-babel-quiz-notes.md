# webpack-and-babel-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Webpack?
It is the most popular bundler for web applications. It has many features that work differently from other bundlers. It examines your code starting at its entry point and recursively scans the import statements to find all the modules your code uses. It builds a dependency graph and analyzes it to find and remove code that is not in use (using a process known as tree shaking). It renames functions, variables, classes, etc., to ensure there are no name conflicts and to minimize and obfuscate the resulting JavaScript code. It performs similar optimizations on HTML, CSS, and image files. All of this results in a small number of files that can be easily sent to a browser by a Web server.

- What is the advantage of using Webpack (or a similar bundler)?
Bundlers bundle all the code from files and npm packages into a single (or a few) files that can be easily downloaded. In the process, many bundlers will remove unused code and may also "minify" and/or "obfuscate" the code by renaming variables and functions to just a few letters. This makes the bundled code even smaller, and also obscures code so it more difficult for prying eyes to decipher.

- What is Babel?
It is the most used JavaScript transpiler and is designed to transpile newer versions of JavaScript into older versions.

- What is the advantage of using Babel (or a similar transpiler)?
Transpilers transform JavaScript written with new language features into older versions of JavaScript that can be run on devices that require it. A "transpiler" converts code written in one high-level language into another high-level language.

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```js
const data = "Howdy"
```

for HTML:
```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:
```css
div {
  width:100%
}
```
