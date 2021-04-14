const router = require("express").Router();
const userController = require("../controllers/userController");
const gameController = require("../controllers/gameController")

router.route("/").get(userController.findAll).post(userController.create);
router.route("/:id").get(userController.findOne);
router.route("/game/:id").post(gameController.create);

module.exports = router;