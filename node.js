var http = require('http');
var fs = require('fs');

// Create an HTTP server in this process.
var server = http.createServer(onRequest);
server.listen(8080, onListen);

function onListen() {
  console.log("HTTP server listening at http://localhost:8080/");
}

function onRequest(req, res) {
  if (req.method === "GET" &amp;&amp; req.url === "/") {
    fs.readFile("index.html", function (err, html) {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain",
                             "Content-Length": err.stack.length });
        res.end(stack.length);
      }
      else {
        res.writeHead(200, { "Content-Type": "text/html",
                             "Content-Length": err.stack.length });
        res.end(html);
      }
    });
  }
}
