const db = require("../models");

module.exports = {
  findAll: async function (req, res) {
    const result = await db.game.find();
    res.json(result);
  },
  create: async function (req, res) {
    const game = await db.game.create(req.body)
    const result = await db.user.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { games: [game] } }
    );
    res.json(result);
  },
  findOne: async function (req, res) {
    console.log("request.body", req.params.id);
    const result = await db.game.findOne({ _id: req.params.id });
    res.json(result);
  },
};
