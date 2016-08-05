
const http = require('http');
const clientAssets = require(process.env.ASSETS_PATH);

http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(`
    <body>
      <div id='root'></div>
      <script src='${clientAssets.main.js}'></script>
    </body>
  `);
  response.end();
}).listen(parseInt(process.env.SERVER_PORT, 10));
