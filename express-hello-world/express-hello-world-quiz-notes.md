# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?
  Express middlewares are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.

- What is Express middleware useful for?
  It is useful for execute any codes, making changes to the request and the response objects, ending the request-response cycle, and calling the next middleware function in the stack.

- How do you mount a middleware with an Express application?
  Put a path as the first argument in 'app.use' like 'app.use('/user/:id', (req, res, next)'

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  req and res

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
