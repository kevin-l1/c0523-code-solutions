# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  CRUD stands for Create, Read, Update, and Delete, and they are the basic operations on data in a SQL table.

- How do you add a row to a SQL table?
  Use SQL 'insert'
- How do you add multiple rows to a SQL table at once?
  Inside the 'value' clause, add more rows with values corresponding to the 'insert' clause's columns

- How do you update rows in a database table?
  Use SQL 'update'

- How do you delete rows from a database table?
  Use SQL 'delete'

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  If you don't specify with a 'where' clause, it will update or delete everything and there is no undo option.

- How do you accidentally delete or update all rows in a table?
  By not including a specified 'where' clause.

- How do you get back the modified row without a separate `select` statement?
  Add a 'return' clause

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
