const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const game = new Schema({
  gameid: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  platform: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("game", game);