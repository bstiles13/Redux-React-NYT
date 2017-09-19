let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let articleSchema = new Schema({
  headline: {
    type: String,
    index: {
            unique: true
        }
  },
  url: {
    type: String,
    index: {
            unique: true
        }
  },
  favorited: {
    type: Boolean,
    default: false
  }
});

let Article = mongoose.model("Article", articleSchema);

module.exports = Article;