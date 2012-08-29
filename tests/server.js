var connect = require('connect'), 
  http = require('http'), 
  fs   = require('fs');

var app = connect()
            .use(connect["static"](__dirname + '/../'));

http.createServer(app).listen(3000);

console.log("open your browser in http://localhost:3000/tests/index.html");