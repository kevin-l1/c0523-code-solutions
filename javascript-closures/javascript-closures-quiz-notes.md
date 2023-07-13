# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?
  There is a lexical scope that works by checking if it can find a variable in its local execution context. If it doesn't, it will look for it in its calling context. And if not found there in its calling context. Repeatedly, until it is looking in the global execution context. (And if it does not find it there, it’s undefined).

- What allows JavaScript functions to "remember" variables from their surroundings?
  JavaScript's lexical scoping property

- What values does a closure contain?
  All the variables that are in scope at the time of creation of the function.

- When is a closure created?
  Whenever you declare a new function and assign it to a variable, the function definition is stored along with a closure.

- How can you tell if a function will be created with a closure?
  All functions are created with a closure

- In React, what is one important case where you need to know if a closure was created?
  When you create a function inside of another function.

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
