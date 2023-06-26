# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you define a React component?
  A component is a piece of the UI (user interface) that has its own logic and appearance. They are JavaScript functions that return markup.

- How do you use JSX in a React component?
  By using a syntax extension for JSX

- How do you declare the props a React component needs?
  Set something equal to the prop's name such as a button's property or a variable. If a prop was called color and you wanted background to equal the color prop, you would do something like: styles={{background: propName}}

- How do you pass props to a React component?
  Put the props inside the component's () as arguments before the {

- How do you include JavaScript expressions in JSX?
  By wrapping the expression in curly braces.

- What are React hooks and what are the three "Rules of Hooks"?
  Hooks can only be called inside React function components. Hooks can only be called at the top level of a component. Hooks cannot be conditional.

- How do you manage state in a React component?
  Import state with "import { useState } from 'react'" and set the state by using (const [index, setIndex] = useState(0)) with the value inside useState being whatever you want the index's value to be. When you want to update the state variable, call the state setter variable with the value inside the parenthesis containing the state variable and how you want to change it.

- How do you handle events in React?
  Create an event handler function that runs code whenever it is called by an event such as 'onClick.'

- How do you let a parent component know that an event happened?
  When you call the parent component, it will know what event has occurred if the components within the parent component contain event handlers or props.

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
