# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
It is a software registry where people can create packages or use packages created by other people.

- What is a package?
Packages are reusable code (or called modules). They are directories with files and contain a package.json that has meta data regarding the package. They are typically small like building blocks.

- What are some other popular package managers?
NuGet, dpkg, sources.list, Homebrew

- How can you create a `package.json` with `npm`?
npm init --yes

- What is a dependency and how do you add one to a package?
Dependencies are packages required by the application in production.
You can add one to a package by using npm install or --save-prod

- What happens when you add a dependency to a package with `npm`?
The dependencies will be stored in the package.json in "dependencies"

- What is a devDependency and how do you add one to a package?
devDepencency are packages that are only needed for local development and testing.
You can add one to a package by using npm install or --save-dev

- How do you define and run `npm` scripts? Why are these useful?
Add "scripts": to the package.json. You can run it by npm run.
Scripts are useful because the scripts are often used to make command development commands available without the need to remember or type long arguments, and to share them across the team.

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
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
