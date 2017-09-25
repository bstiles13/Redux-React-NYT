let express = require('express');
let router = new express.Router();
let path = require('path');
let tasks = require('../models/tasks.js');

router.get("/articles", tasks.articles);

router.post('/search', tasks.search)

router.get('/favorites', tasks.favorites)

router.post('/setfavorite', tasks.setFavorite)

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + './public/index.html'));
})

module.exports = router;