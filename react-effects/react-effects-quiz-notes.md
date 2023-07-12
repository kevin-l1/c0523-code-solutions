# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  You render the component into the DOM with .render

- What is a React Effect?
  Effects let you specify side effects that are caused by rendering itself, rather than by a particular event.

- When should you use an Effect and when should you not use an Effect?
  You should use an effect when need to “step out” of your React code and synchronize with some external system. You don't need to use it if your effect only adjusts some state based on other state.

- When do Effects run?
  They run after every render

- What function is used to declare an Effect?
  useEffect()

- What are Effect dependencies and how do you declare them?
  They are conditions you set so that Effect's don't constantly run after every render. You declare them with an array or by adding props into an array as the second parameter of the Effect function.

- Why would you want to clean up from an Effect?
  To prevent side effects from continuing to occur when they are not necessary

- How do you clean up from an Effect?
  Create a clean up function that ends events that keep on occurring

- When does the cleanup function run?
  It runs before the Effect runs again and a final time when the component gets unmounted (removed). It prevents effects from firing more than once.

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
