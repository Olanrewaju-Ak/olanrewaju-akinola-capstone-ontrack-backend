const router = require("express").Router();
const budgetsController = require("../controllers/budgetsController");

router.route("/").get(budgetsController.index).post(budgetsController.addBudget);
router.route("/:id").get(budgetsController.singleBudget).delete(budgetsController.deleteBudget);

module.exports = router;
