const router = require("express").Router();
const incomeController = require("../controllers/incomeController");

router.route("/income").get(incomeController.index);
// router
// 	.route("/:id")
// 	.get(transactionController.singleTransaction)
// 	.delete(transactionController.deleteTransaction);

module.exports = router;
