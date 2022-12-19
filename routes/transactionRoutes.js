const router = require("express").Router();
const transactionController = require("../controllers/transactionController");

router.route("/").get(transactionController.index).post(transactionController.addTransaction);
router.route("/expenses").get(transactionController.expenses);

router.route("/income").get(transactionController.income);

router
	.route("/:id")
	.get(transactionController.singleTransaction)
	.delete(transactionController.deleteTransaction);

module.exports = router;
