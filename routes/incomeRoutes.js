const router = require("express").Router();
const incomeController = require("../controllers/incomeController");

router.route("/income").get(incomeController.index);

module.exports = router;
