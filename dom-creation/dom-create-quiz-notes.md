# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
No, it only creates the element.

- How do you add an element as a child to another element?
appendChild()

- What do you pass as the arguments to the `element.setAttribute()` method?
the name of the attribute and the value you will be setting for that attribute.

- What steps do you need to take in order to insert a new element into the page?
First create the element with document.createElement(), and then use use appendChild() to insert an element into the page.

- What is the `textContent` property of an element object for?
It is to return the text content of the node and its descendants.

- Name two ways to set the `class` attribute of a DOM element.
setAttribute() method and className property

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
You can create applications that update the data of the page without needing a refresh. Also, you can create applications that are customizable by the user and then change the layout of the page without a refresh.

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
