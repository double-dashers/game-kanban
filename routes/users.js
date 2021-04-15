const router = require("express").Router();
const userController = require("../controllers/userController");
const gameController = require("../controllers/gameController");
const loginController = require("../controllers/loginController");

router.route("/").get(userController.findAll).post(userController.create);
router.route("/:id").get(userController.findOne);
router.route("/game/:id").post(gameController.create);
router.route("/login").post(loginController.findOne);

module.exports = router;
