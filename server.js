const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./controller/routes.js');
const PORT = process.env.PORT || 9000;

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use("/", routes);

let mongoose = require('mongoose');
let db = process.env.MONGODB_URI || "mongodb://localhost/nyt_redux";

mongoose.connect(db, function (error) {
    if (error) {
        console.error(error);
    } else {
        console.log("mongoose connection is successful");
    }
});

app.listen(PORT, function () {
    console.log('App listening on port ' + PORT);
})