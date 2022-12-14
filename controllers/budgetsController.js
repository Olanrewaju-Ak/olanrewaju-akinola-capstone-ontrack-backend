const knex = require("knex")(require("../knexfile"));
// const { v4: uuidv4 } = require("uuid");

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
