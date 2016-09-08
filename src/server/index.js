
import express from 'express';

const path = require('path');
const clientAssets = require(process.env.ASSETS_MANIFEST);

const app = express();
const staticPath = path.join(process.cwd(), process.env.PUBLIC_DIR);
app.use(express.static(staticPath));
const favicon = "";//path.join(staticPath, '/images/kyt_favicon.png');
app.get('/', (req, res) => {
  res.send(`
    <head>
      <link rel="shortcut icon" href="${favicon}">
      <link href="${clientAssets.main.css}" rel="stylesheet" type="text/css"/>
    </head>
    <body>
      <div id='root'></div>
      <script src='${clientAssets.main.js}'></script>
    </body>
  `);
});

app.listen(parseInt(process.env.SERVER_PORT, 10));
