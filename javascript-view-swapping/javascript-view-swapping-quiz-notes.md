# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
The most deeply nested element that caused the event

- What is the affect of setting an element to `display: none`?
It hides the element from view

- What does the `element.matches()` method take as an argument and what does it return?
It takes a selector as an argument and returns a boolean value, true or false.

- How can you retrieve the value of an element's attribute?
getAttribute() method

- At what steps of the solution would it be helpful to log things to the console?
Whenever you activate the event (i.e. clicking the tab) and whenever you want your listener callback function to do something new.

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
The code would remain the same as the loop is based on the length of the nodeLists.

- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
You would need to make many different if-statements to take into account every single tab option (html, css, js) and every view option.

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
