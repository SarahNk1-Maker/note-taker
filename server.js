const express = require('express');
const fs =require("fs");
const api_routers =require('./routers/api-routers');
const html_routers =require('./routers/html-routers');

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use('/',html_routers);
app.use('/api',api_routers);
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);