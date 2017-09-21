let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let articleSchema = new Schema({
    _id: {
        type: String,
        index: {
            unique: true
        }
    },
    headline: {},
    snippet: String,
    web_url: String,
    pub_date: String,
    favorited: {
        type: Boolean,
        default: false
    },
    archived: {
        type: Boolean,
        default: false
    }
});

let Article = mongoose.model("Article", articleSchema);

module.exports = Article;