var http = require('http');
var fs = require('fs');

// Create an HTTP server in this process.
var server = http.createServer(onRequest);
server.listen(8080, onListen);

function onListen() {
  console.log("HTTP server listening at http://creationix.com:8080/");
}

function onRequest(req, res) {
  if (req.method === "GET" && req.url === "/") {
    fs.readFile("index.html", function (err, html) {
      // TODO: handle possible error
      res.writeHead(200, { "Content-Type": "text/html",
                           "Content-Length": html.length });
      res.end(html);
    });
  }
}
