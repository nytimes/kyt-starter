
import express from 'express';

const clientAssets = require(process.env.ASSETS_MANIFEST);

const app = express();
app.use(express.static(process.env.PUBLIC_DIR));

app.get('/', (req, res) => {
  res.send(`
    <body>
      <div id='root'></div>
      <script src='${clientAssets.main.js}'></script>
    </body>
  `);
});

app.listen(parseInt(process.env.SERVER_PORT, 10));

