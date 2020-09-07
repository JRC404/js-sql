const express = require('express');
const app = express();
// const sql = require('mssql');
const path = require('path')
const bodyParser = require('body-parser');

//* internal imports
const routes = require('./routes');

//* app.use calls created. 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);

app.listen(3005, () => {
    console.log('listening on 3005');
})