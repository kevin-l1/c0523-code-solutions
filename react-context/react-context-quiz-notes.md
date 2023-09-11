# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
  Context lets a parent component provide data to the entire tree below it instead of needing to have to manually pass props to each component.

- What values can be stored in context?
  Any data types

- How do you create context and make it available to the components?
  First import useContext and then create the context with 'createContext()' and assign it to a variable. Inside of a component, assign a variable with createContent() with the name of the previous variable inside the parenthesis. Now, instead of needing to use a prop, you can just put items inside of a container and give the container context. This will affect all code within the container.

- How do you access the context values?
  Use the useContext hook.

- When would you use context? (in addition to the best answer: "rarely")
  When you need to pass props to many componenets

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
