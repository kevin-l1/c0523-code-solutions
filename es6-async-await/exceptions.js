import fetch from './fetch.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log the entire error so that
  // you get the stack trace.
  try {
    const msg = await fetch('foo', true);
    console.log(elapsed(), 'throwOnce:', msg);
  } catch (error) {
    console.log(elapsed(), 'throwOnce Error:', error.message);
  }
}

async function throwSeveral() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log `error` so that
  // you get the stack trace.
  try {
    const msg = await fetch('foo1', true);
    console.log(elapsed(), 'throwSeveral1:', msg);
    const msg2 = await fetch('foo2', true);
    console.log(elapsed(), 'throwSeveral2:', msg2);
    const msg3 = await fetch('foo3', true);
    console.log(elapsed(), 'throwSeveral3:', msg3);
  } catch (error) {
    console.log(elapsed(), 'throwSeveral Error:', error.message);
  }
}

async function throwChained() {
  try {
    const msg1 = await fetch('foo-chain', true);
    console.log(elapsed(), 'throwChained1:', msg1);
    const msg2 = await fetch(msg1, true);
    console.log(elapsed(), 'throwChained2:', msg2);
    const msg3 = await fetch(msg2, true);
    console.log(elapsed(), 'throwChained3:', msg3);
  } catch (error) {
    console.log(elapsed(), 'throwChained Error:', error.message);
  }
}

await throwOnce();
await throwSeveral();
await throwChained();

// // Keep track of app load time so each log message can be timed.
// // Log messages should all be approximately 1 second apart.
// const startTime = Date.now();
// const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

// function throwOnce() {
//   // Note: In the `catch` we are logging just `error.message` for illustration
//   // purposes. In actual code you will want to log the entire error so that
//   // you get the stack trace.
//   return fetch('foo', true)
//     .then((msg) => console.log(elapsed(), 'throwOnce:', msg))
//     .catch((error) => console.log(elapsed(), 'throwOnce Error:', error.message));
// }

// function throwSeveral() {
//   // Note: In the `catch` we are logging just `error.message` for illustration
//   // purposes. In actual code you will want to log `error` so that
//   // you get the stack trace.
//   return fetch('foo1', true)
//     .then((msg) => {
//       console.log(elapsed(), 'throwSeveral1:', msg);
//       return fetch('foo2', true);
//     })
//     .then((msg) => {
//       console.log(elapsed(), 'throwSeveral2:', msg);
//       return fetch('foo3', true);
//     })
//     .then((msg) => console.log(elapsed(), 'throwSeveral3:', msg))
//     .catch((error) => console.log(elapsed(), 'throwSeveral Error:', error.message));
// }

// function throwChained() {
//   return fetch('foo-chain', true)
//     .then((msg1) => {
//       console.log(elapsed(), 'throwChained1:', msg1);
//       return fetch(msg1, true);
//     })
//     .then((msg2) => {
//       console.log(elapsed(), 'throwChained2:', msg2);
//       return fetch(msg2, true);
//     })
//     .then((msg3) => console.log(elapsed(), 'throwChained3:', msg3))
//     .catch((error) => console.log(elapsed(), 'throwChained Error:', error.message));
// }

// throwOnce()
//   .then(() => throwSeveral())
//   .then(() => throwChained());
