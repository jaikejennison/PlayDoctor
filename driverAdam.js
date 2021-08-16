const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const clock = new Date();

(async () => {
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Test Web Server</h1>\n<h2>'+ clock.toString() +'</h2>');
  });
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
  });
})();

