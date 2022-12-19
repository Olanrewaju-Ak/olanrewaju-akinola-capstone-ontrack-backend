const router = require("express").Router();
const expensesController = require("../controllers/expensesController");

router.route("/expenses").get(expensesController.index);

module.exports = router;
