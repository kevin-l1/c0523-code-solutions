# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?
  When you need to show several instances of the same component using different data

- Why is it important for React components to be data-driven?
  So that components can be easily reused based on whatever data is imported.

- Where in the component code would a list of React components typically be built?
  Inside the exported component

- What `Array` method is commonly used to create a list of React components?
  .map method

- Why do components in a list need to have unique keys?
  The keys are necessary for letting React know which array item each component corresponds to. This allows them match them up later and is important if the array items can move, get inserted, or deleted.

- What is the best value to use as a "key" prop when rendering lists?
  Numerical IDs

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
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
  width: 100%;
}
```
