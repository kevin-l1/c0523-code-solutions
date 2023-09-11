# fetch-in-react-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How can `useEffect` be used to load data for a component?
  useEffect can be used to load data by putting a fetch() request inside of the Effect function.

- What browser function can be used to make HTTP requests to a server in React?
  fetch()

- How do you use `useEffect` to load component data just once when the component mounts?
  Inside of the dependencies for the Effect function, make the array empty.

- How do you use `useEffect` to load component data every time the data key changes?
  Inside of the dependencies, put it the data key within the array. This will make it so that whenever the data key changes, useEffect loads the component data.

- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  A better option is managing all your data accesses with a third-party data management library with some alternatives being 'React Query' and 'Vercel SWR'.

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
