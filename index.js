const express = require("express");
const bodyParser = require("body-parser");
const parserMiddleware = bodyParser.json();
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const middleware = cors();

const adsRouter = require("./ads/router");

app.use(middleware);
app.use(parserMiddleware);
app.use(adsRouter);

app.listen(port, () => console.log(`app running on port ${port}`));
