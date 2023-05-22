# css-cascade-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the four components of "the Cascade".
Relevance, Origin and importance, Specificity, Order of appearance

- What does the term "source order" mean with respect to CSS?
The order at which the css property being assigned properties is being listed in the css file.

- How is it possible for the styles of an element to be applied to its children as well without an additional CSS rule?
It depends on the type of property. Some properties are inheritable such as color while some properties like a border can not be inherited.

- List the three selector types in order of increasing specificity.
ID, CLASS, TYPE

- Why is using `!important` considered bad practice?
It reverses the cascade order of stylesheets. If declarations from the same origin and cascade layer conflict and one property value has the !important flag set, the important declaration is applied no matter the specificity. When conflicting declarations from the same origin and cascade layer with the !important flag are applied to the same element, the declaration with a greater specificity is applied.

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
