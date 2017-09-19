const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.ENV || 9000;

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

let mongoose = require('mongoose');
let db = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

mongoose.connect(db, function (error) {
    if (error) {
        console.error(error);
    } else {
        console.log("mongoose connection is successful");
    }
});


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + './public/index.html'));
})

app.listen(PORT, function () {
    console.log('App listening on port ' + PORT);
})