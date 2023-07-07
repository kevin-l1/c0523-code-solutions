# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  The async function declaration creates a binding of a new async function to a given name.
  The await operator is used to wait for a Promise and get its fulfillment value.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  Async is much easier to read and doesn't create as many nests as 'promise.'. It looks similar to any other synchronous function too.

- When do you use `async`?
  You use the async keyword before the declaring the function.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  You use await when you are waiting for a promise and want its fulfillment value. It can only be used inside an async function or at the top level of a module. You don't use await when the function being called is not asynchronous.

- How do you handle errors with `await`?
  Wrap the 'await' call inside of a try catch

- What do `try`, `catch` and `throw` do? When do you use them?
  The 'code' in try is executed and if it throws an exception, the code in the 'catch' block is executed. Whenever you hit a throw, execution is also sent straight to the 'catch' block. The catch executes whenever an error occurs. You use try, catch, and throw for error handling.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  You do not receive the rejection so you can't tell what happened.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  Async/await because it is much more cleaner as compared to how messy 'promise.' can be.

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
