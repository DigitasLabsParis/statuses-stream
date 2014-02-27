statuses-stream
==============
### Version: 0.0.1 ###

[![Build Status](https://travis-ci.org/TarGz/statuses-stream.png?branch=master)](https://travis-ci.org/DigitasLabsParis/statuses-stream)

Simple Node.js Twitter (API 1.1) statuses stream client (https://dev.twitter.com/docs/api/1.1/post/statuses/filter)

forked and edited from [https://github.com/aivis/user-stream](https://github.com/aivis/user-stream)

Install
-------

```
npm install statuses-stream
```

Usage
-------
```javascript
var Stream = require('user-stream');
var stream = new Stream({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});

//create stream
stream.stream({track:'tag1,tag2,tag3'});

//listen stream data
stream.on('data', function(json) {
  console.log(json);
});
```

Events
-------
- ```data```        - stream data in JSON format
- ```garbage```     - stream data who can't be parsed to JSON
- ```close```       - stream close event (stream connection closed)
- ```error```       - error event (request error, response error, response status code greater than 200)
- ```connected```   - stream created
- ```heartbeat```   - twitter emitted heartbeat

Methods
-------
- ```stream```  - create stream connection
- ```destroy``` - destroy/close stream connection


#### Reserved parameters for lib
- ```delimited``` 
- ```stall_warnings```
