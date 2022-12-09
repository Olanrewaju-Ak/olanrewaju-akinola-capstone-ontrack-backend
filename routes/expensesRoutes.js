const router = require("express").Router();
const expensesController = require("../controllers/expensesController");

router.route("/expenses").get(expensesController.index);
// router
// 	.route("/:id")
// 	.get(transactionController.singleTransaction)
// 	.delete(transactionController.deleteTransaction);

module.exports = router;
