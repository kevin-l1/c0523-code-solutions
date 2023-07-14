# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?
  A column inside of a table that is based on the column of a different table.

- How do you join two SQL tables? (Provide at least two syntaxes.)
  Use a 'select' clause, followed by a 'from' clause and a 'join' clause.
  Example:
  select \*
  from "products"
  join "suppliers" using ("supplierId");

  Example:
  select "products"."name" as "product",
  "suppliers"."name" as "supplier"
  from "products"
  join "suppliers" using ("supplierId");

- How do you temporarily rename columns or tables in a SQL statement?
  Use the 'as' keyword, it will rename the columns/tables for the result set but won't change the names in the actual tables themselves.

- How do you create a one-to-many relationship between two tables?
  A foreign key in a table pointing to a primary key in another table creates a one-to-many relationship.

- How do you create a many-to-many relationship between two tables?
  Many-to-many relationships are created by creating a 'join table' which contains a foreign key from each of the tables.

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
