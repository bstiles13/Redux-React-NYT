const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const PORT = process.ENV || 9000;

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

let authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

let mongoose = require('mongoose');
let db = process.env.MONGODB_URI || "mongodb://localhost/nytreact";
let Article = require('./models/article.js');

mongoose.connect(db, function (error) {
    if (error) {
        console.error(error);
    } else {
        console.log("mongoose connection is successful");
    }
});


app.get("/articles", function (req, res) {
    Article.find({})
        .then(function (doc) {
            res.json(doc);
        }).catch(function (err) {
            res.json(err);
        });
});

app.post('/search', function(req, res) {
    console.log(req.body);
    let search = req.body;

    let searchTerm = search.term;
    let startDate = search.start;
    let endDate = search.end;

    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
      authKey + "&q=" + searchTerm;

    if (parseInt(startDate)) {
      url = url + "&begin_date=" + startDate;
    }

    if (parseInt(endDate)) {
      url = url + "&end_date=" + endDate;
    }

    axios.get(url).then((data) => {

      let articles = data.data.response.docs;
      res.json(articles);

    });
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + './public/index.html'));
})

app.listen(PORT, function () {
    console.log('App listening on port ' + PORT);
})