const express = require("express")
const logger = require('morgan');


const app = express();
const port = process.env.PORT || 3000

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => console.log(`Listening on port ${port}`))