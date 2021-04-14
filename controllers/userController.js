const db = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
  findAll: async function (req, res) {
    const result = await db.user.find();
    res.json(result);
  },
  create: async function (req, res) {
    const { username, email, password } = req.body;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const newUser = {
      username: username,  
      password: passwordHash,
      email: email,
    };
    const result = await db.user.create(newUser);
    res.json(result);
  },
  findOne: async function (req, res) {
    console.log("request.body", req.params.id);
    const result = await db.user.findOne({ _id: req.params.id });
    res.json(result);
  },
};