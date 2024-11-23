const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
const port = 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

const router = require('./routes/index');
app.use('/', router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});