Retrier
=======

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/tinchogob/retrier?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/tinchogob/retrier.png)](https://travis-ci.org/tinchogob/retrier)

Simple operation retrier till callback success or max attempts are reached

```javascript
var retry = require('retrier');

var op = function(callback) {
  console.log("I've been called but I won't succed");
  return callback("Error");
}

retry(10, op, function(error, response){
  if (error) {
    return console.log("After 10 times I'm here");
  }
  
  return console.log("warning unreachable code")
});
```

##retrier(n, operation, callback);

Will call operation for n times untill it succeeds.
- **n**: count to call operation
- **operation**: single callback argument function (if you need args, check out async.apply, or function.bind)
- **callback**: final callback to be called with response or error if operation failed for n times

PR's are welcomed
