const knex = require("knex")(require("../knexfile"));
const { v4: uuidv4 } = require("uuid");

// GET ALL BUDGETS
exports.index = (_req, res) => {
	knex("budgets")
		.orderBy("category", "desc")
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => res.status(400).send(`Error retrieving budgets: ${err}`));
};

// GET BUDGETS BY CATEGORY
exports.budgetCategory = (_req, res) => {
	knex.select("budgets.*", "transactions.category_id")
		.from("budgets")
		.where("budgets.category_id", "=", 3)
		.innerJoin("transactions", "budgets.category_id", "transactions.category_id")
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => res.status(400).send(`Error retrieving budgets: ${err}`));
};

// GET SINGLE BUDGET
exports.singleBudget = (req, res) => {
	// console.log(req.params);
	knex("budgets")
		.where({ id: req.params.id })
		.then((data) => {
			// If record is not found, respond with 404
			if (!data.length) {
				return res.status(404).send(`Budget with id: ${req.params.id} is not found`);
			}
			// Knex returns an array of records, so we need to send response with a single object only
			res.status(200).json(data[0]);
		})
		.catch((err) => res.status(400).send(`Error retrieving budget ${req.params.id} ${err}`));
};

// ADD A BUDGET
exports.addBudget = (req, res) => {
	// Validate the request body for required data
	if (!req.body.max_amount || !req.body.category || !req.body.start_date || !req.body.end_date) {
		return res
			.status(400)
			.send(
				"Please make sure to provide max_amount, category, and date fields in your request"
			);
	}

	const newBudgetId = uuidv4();
	knex("budgets")
		.where("category", "!==", "req.body.category")
		.insert({ ...req.body, id: newBudgetId })
		.then((_data) => {
			knex("budgets")
				.where({ id: newBudgetId })
				.then((_data) => {
					knex("budgets").then((data) => {
						res.status(200).json(data);
					});
				});
		})
		.catch((err) => res.status(400).send(`Error creating Budget: ${err}`));
};

//DELETE A BUDGET
exports.deleteBudget = (req, res) => {
	knex("budgets")
		.delete()
		.where({ id: req.params.id })
		.then((_data) => {
			knex("budgets").then((data) => {
				res.status(200).json(data);
			});
		})
		.catch((err) => {
			res.status(400).send(`Error deleting Budget ${req.params.id} ${err}`);
		});
};
