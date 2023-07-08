# http-messages-recap-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a client?
  A client requests content or service from a server. Clients initiate communication sessions with servers and servers await incoming requests.

- What is a server?
  A server provides a function or service to one or many clients. Clients initiate requests for such services.

- Which HTTP method does a browser issue to a web server when you visit a URL?
  GET

- What is on the first line of an HTTP **request** message?
  An HTTP method (a verb (like GET, PUT or POST) or a noun (like HEAD or OPTIONS), that describes the action to be performed).
  The request target (usually a URL, or the absolute path of the protocol, port, and domain are usually characterized by the request context).
  The HTTP version, which defines the structure of the remaining message, acting as an indicator of the expected version to use for the response.

- What is on the first line of an HTTP **response** message?
  The protocol version, usually HTTP/1.1.
  A status code, indicating success or failure of the request. Common status codes are 200, 404, or 302
  A status text. A brief, purely informational, textual description of the status code to help a human understand the HTTP message.

- What are HTTP headers?
  HTTP headers let the client and the server pass additional information with an HTTP request or response.

- Is a body required for a valid HTTP message?
  No, the body is optional. It can be included to contain data associated with the request (like content of an HTML form), or the document associated with a response.

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
