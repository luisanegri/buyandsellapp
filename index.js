const express = require('express');
const bodyParser = require('body-parser');
const parserMiddleware = bodyParser.json();
const app = express();
const port = 3000;

const adsRouter = require('./ads/router');

app.use(parserMiddleware);
app.use(adsRouter);

app.listen(port, () => console.log(`app running on port ${port}`));
