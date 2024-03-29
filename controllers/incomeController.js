const knex = require("knex")(require("../knexfile"));

exports.index = (_req, res) => {
	knex.select("transactions.*")
		.from("transactions")
		.where("transactions.type", "=", "income")
		.then((data) => {
			res.status(200).json(data[0]);
		})
		.catch((err) => res.status(400).send(`Error retrieving expenses: ${err}`));
};
