# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
To see what the code is doing and whether it is working or not.

- What is the purpose of events and event handling?
Events are things that happen in the system you are programming, which the system tells you about so your code can react to them. Creating events allows you to have your code react a specific way when interacted with. The event handler is the property that will trigger the evnet (i.e. click)

- Are all possible parameters required to use a JavaScript method or function?
No, only type and listener is required.

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
addEventListener method

- What is a callback function?
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

- What object is passed into an event listener callback when the event fires?
The argument inside the callback.

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
The read-only target property of the Event interface is a reference to the object onto which the event was dispatched. If you aren't sure, you can go to google and type "mdn" followed by the question you have.

- What is the difference between these two snippets of code?
    ```js
    element.addEventListener('click', handleClick)
    ```
    ```js
    element.addEventListener('click', handleClick())
    ```
If you don't remove the paranthesis, the function will be immediately executed rather than waiting for the event to fire. As such, it is better to pass a reference of the function, which would be just the function name.

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
