# http-messages-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a client?
Tt requests content or service from a server. Clients, therefore, initiate communication sessions with servers, which await incoming requests.

- What is a server?
The server component provides a function or service to one or many clients, which initiate requests for such services.

- Which HTTP method does a browser issue to a web server when you visit a URL?
GET method

- What three things are on the start-line of an HTTP **request** message?
An HTTP method (a verb (like GET, PUT or POST) or a noun (like HEAD or OPTIONS), that describes the action to be performed).
The request target (usually a URL, or the absolute path of the protocol, port, and domain are usually characterized by the request context).
The HTTP version, which defines the structure of the remaining message, acting as an indicator of the expected version to use for the response.

- What three things are on the start-line of an HTTP **response** message?
The protocol version, usually HTTP/1.1.
A status code, indicating success or failure of the request.
A status text. A brief, purely informational, textual description of the status code to help a human understand the HTTP message.

- What are HTTP headers?
They specify the request, or describe the body included in the message.

- Where would you go if you wanted to learn more about a specific HTTP Header?
Search for the specific header in https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

- Is a body required for a valid HTTP request or response message?
No,  not all responses have one. Responses with a status code that sufficiently answers the request without the need for corresponding payload (like 201 Created or 204 No Content) usually don't.

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
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
