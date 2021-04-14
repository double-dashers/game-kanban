const db = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
  findOne: async function (req, res) {
    const userData = await db.user.findOne({ email: req.body.email });
    if (!userData || !userData._id) {
      res.json({ status: false, message: "Invalid login" });
    }
    const isValidPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    if (!isValidPassword) {
      res.json({ status: false, message: "Invalid password" });
    }
    res.json({
      status: true,
      message: `Logging in ${userData.username}...`,
      userData: {
        id: userData._id,
        username: userData.username,
        email: userData.email,
      },
    });
  },
};
