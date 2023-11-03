// const express = require('express')

// const app = express()

// const port = 4000

// app.use(require("../routes/productos.routes"))

// app.set('port', process.env.PORT|| port);
// module.exports = app;


const express = require('express');
const app = express();
const port = 4000;

app.use(require("../routes/productos.routes"));

app.set('port', process.env.PORT || port);

module.exports = app;
