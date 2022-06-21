require('express-async-errors');
const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const router = require('./routers');
// ...

const app = express();

app.use(express.json());
app.use(router);
app.use(errorHandler);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
