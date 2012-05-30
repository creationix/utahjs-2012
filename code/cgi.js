// Assume this is an HTTP request and some CGI variables are already set
if (REQUEST_METHOD === "GET" && PATH_INFO === "/") {

  // Load the HTML from the disk, wait for it to finish.
  var html = readfile("index.html");

  // Return the entire HTTP response in an object
  return {
    code: 200,
    headers: {
      "Content-Type": "text/html",
      "Content-Length": html.length
    },
    content: html
  };
}
