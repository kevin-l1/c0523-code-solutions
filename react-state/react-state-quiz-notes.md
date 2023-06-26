# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
Hooks are any function starting with 'use' such as 'useState.' They are special functions that are only available while React is rendering and let you “hook into” different React features.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
Hooks can only be called at the top level of your components or your own Hooks.

- What is the purpose of state in React?
To retain the data between render and trigger React to render the component with new data (re-rendering).

- Why can't we just maintain state in a local variable?
Local variables don’t persist between renders and changes to local variables won’t trigger renders.

- What two actions happen when you call a `state setter` function?
It update the variable and triggers React to render the component again.

- When does the local `state variable` get updated with the new value?
After the component renders, it updates the state and tells React to remember the new value. Upon the next render, React will still see the initial state, useState(0), but because React remembers that you set index to to a different value, it will return [updatedValue, setIndex] instead.

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
