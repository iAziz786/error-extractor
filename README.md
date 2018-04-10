# Error Extractor
This module help extract error status and error message from a specific string type.

The specified string will be in the format of `status__message`. Examples:
>"404__Page Not found"

The function returns an array in the form of `[STATUS_CODE, MESSAGE]`. We prefer to use ES6 [destructive assingment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to receive values in variables.

```js
const errExt = require('error-extractor')

const a, b;

[a, b] = errExt('404__Page not found')

console.log(a) // 404
console.log(b) // Page not found
```
An error will be thrown if an invalid error message passed.

This is how we will use error-extractor in our project:
```js
const errExt = require('error-extractor')
try {
  if (true) {
    throw new Error('401__User authentcation failed')
  }
} catch(e) {
  let status, message;
  [status, message] = errExt(e.message)
  res.status(status).json({errCode: stauts, message: message})
}
```
