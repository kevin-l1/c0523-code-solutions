# sql-select-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is SQL and how is it different from languages like JavaScript?
  SQL (Structured Query Language) is the primary way of interacting with relational databases as it is good at retrieving, creating, and manipulating data in a relational database. It differs from JavaScript because SQL is a declarative programming language and programmers only need to describe the results they want while in JavaScript, you have to manually tell the JavaScript runtime what to do and how to do it.

- How do you retrieve specific columns from a database table?
  Use a select statement such as:
  select "name",
  "price"
  from "products";
  With name and price being a column name

- How do you filter rows based on some specific criteria?
  After the 'from' clause, include a the 'where' clause specifying what you want such as:
  select "productId",
  "name",
  "price"
  from "products"
  where "category" = 'cleaning';
  This displaying only rows that have the category 'cleaning' in them.

- What are the benefits of formatting your SQL?
  It makes it easier to read the code and understand what is going on.

- What are four comparison operators that can be used in a `where` clause?
  = != > <

- How do you limit the number of rows returned in a result set?
  At the end of the select statement, add a 'limit' clause such as limit 1; which only shows as many lines as the value of the integer.

- How do you retrieve all columns from a database table?
  Use an asterisk for the select statement like 'select \*'

- How do you control the sort order of a result set?
  Add an order clause after the 'from' clause in a select statement.

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
