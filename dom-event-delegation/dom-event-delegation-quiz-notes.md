# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
The most deeply nested element that caused the event is called a target element, accessible as event.target.

- Why is it possible to listen for events on one element that actually happen its descendent elements?
Because of how event bubbling and capturing works. For bubbling, when an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors. Capturing is the opposite of bubbling, it runs on the root and then works its way to the target element.

- What DOM element property tells you what type of element it is?
tagName

- What does the `element.closest()` method take as its argument and what does it return?
It takes a selector as its argument and returns the selector closest to the element.

- How can you remove an element from the DOM?
remove() method

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
Use the append() method to add new clickable DOM elements and you do not need to add an event listener to every new element as you could just create an addEventListener that activates when a non-specific element is clicked.

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
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
