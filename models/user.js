const mongoose = require("mongoose");
const game = require("./game");

const Schema = mongoose.Schema;

const user = new Schema({
  username: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  games: [game.schema]
});

module.exports = mongoose.model("user", user);
