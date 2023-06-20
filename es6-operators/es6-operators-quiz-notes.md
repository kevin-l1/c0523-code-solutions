# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
The && operator returns true if a set of boolean operands will be true if and only if all the operands are true. Otherwise it returns false.
The || operator returns true if any of the conditions of the boolean operands will be true, otherwise it returns false.
Both operators can be used outside of 'if' statements by storing them in variables or returning a value that uses the operators

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
Short-circuit evalution is when operands are no longer evaluated after a certain condition is met such as an operand being true or false.
This applies to && because if the first operand in an expression is false, it will return the value of false without checking if the other operands are false or not.
For ||, if any of the operands is true, it will return true without checking for the others.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
It is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
It differs from || because it can return a non-boolean values and it specifically only checks if the leftside operand is null or undefined.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.
It differs from if/else because the value can be returned all in one line as a single statement and stored in a variable.

- What is the `?.` (optional chaining) operator? When would you use it?
The (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.
You use it whenever you are trying to call a method on an object or function that may or may not exist. Instead of getting an error when you try to call it without using the ?. operator, using the ?. operator will return undefined which lets you know that a property or function doesn't exist.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.
For arrays, it would be used like ([1, ...array, 2, 3, 4])
For objects it would be used like ({ ...obj, key: 'value' })

- What data types can be spread into an array? Into an object?
Only iterable objects such as arrays and strings can be spread into an array while only arrays and objects can be spread into an object.

- How does spread syntax differ from rest syntax?
pread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```js
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
