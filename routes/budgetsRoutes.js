const router = require("express").Router();
const budgetsController = require("../controllers/budgetsController");

router.route("/").get(budgetsController.index);
// router
// 	.route("/:id")
// 	.get(transactionController.singleTransaction)
// 	.delete(transactionController.deleteTransaction);

module.exports = router;
