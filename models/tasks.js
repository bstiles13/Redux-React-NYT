let bodyParser = require('body-parser');
let axios = require('axios');

let Article = require('./article.js');

let authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

module.exports = {
    articles: function (req, res) {
        Article.find({ archived: false })
            .then(function (doc) {
                res.json(doc);
            }).catch(function (err) {
                res.json(err);
            });
    },
    search: function (req, res) {
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

            Article.updateMany({}, { $set: { "archived": true } }, function (err, next) {
                Article.remove({ favorited: false }, function (err, result) {
                    Article.insertMany(articles, { ordered: false }).then((response) => {
                        res.json(response);
                    }).catch(function (err) {
                        // console.log(err);
                        // res.json(err.writeErrors);
                        let errors;
                        if (err.index) {
                            errors = [err]
                        } else {
                            errors = err.writeErrors;
                        }
                        errors.forEach(doc => {
                            Article.update({ '_id': articles[doc.index]._id }, { $set: { "archived": false } }, function (status) {
                            });
                        })
                        Article.find({ archived: false }).then(response => {
                            res.json(response);
                        })
                    });
                })
            });

        })
    },
    favorites: function (req, res) {
        Article.find({ favorited: true }).then(response => {
            res.json(response);
        }).catch(err => {
            console.log(err);
        })
    },
    setFavorite: function (req, res) {
        let id = req.body.id;
        let status;
        req.body.favorited ? status = false : status = true;
        Article.update({ '_id': id }, { favorited: status }).then(response => {
            res.send('done');
        }).catch(err => {
            console.log(err);
        })
    }

}