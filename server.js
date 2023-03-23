const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 3000

const ejs = require("ejs");

const routes = require("./routes/routes");

/* Middleware */
app.use(express.static("./public"));

app.use(bodyParser.urlencoded({ extended: true }));

/* Set template engine */
app.set('view engine', 'ejs');

app.use(routes)

app.listen(port, () => console.info(`App listening on port ${port}`));