const knex = require("knex")(require("../knexfile"));
const { v4: uuidv4 } = require("uuid");

// GET ALL TRANSACTIONS
exports.index = (_req, res) => {
	knex("transactions")
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => res.status(400).send(`Error retrieving transactions: ${err}`));
};

// GET ALL  TRANSACTIONS-EXPENSES
exports.expenses = (_req, res) => {
	knex.select("transactions.*")
		.from("transactions")
		.where("transactions.type", "=", "expense")
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => res.status(400).send(`Error retrieving expenses: ${err}`));
};

// GET SINGLE TRANSACTION DETAILS
exports.singleTransaction = (req, res) => {
	console.log(req.params);
	knex("transactions")
		.where({ id: req.params.id })
		.then((data) => {
			// If record is not found, respond with 404
			if (!data.length) {
				return res.status(404).send(`Transaction with id: ${req.params.id} is not found`);
			}
			// Knex returns an array of records, so we need to send response with a single object only
			res.status(200).json(data[0]);
		})
		.catch((err) =>
			res.status(400).send(`Error retrieving transaction ${req.params.id} ${err}`)
		);
};

// ADD TRANSACTION
exports.addTransaction = (req, res) => {
	// Validate the request body for required data
	if (!req.body.amount || !req.body.description || !req.body.type || !req.body.date) {
		return res
			.status(400)
			.send("Please make sure to provide amount, description,type fields in your request");
	}

	const newTransactionId = uuidv4();
	knex("transactions")
		.insert({ ...req.body, id: newTransactionId })
		.then((_data) => {
			knex("transactions")
				.where({ id: newTransactionId })
				.then((data) => {
					res.status(201).json(data[0]);
				});
		})
		.catch((err) => res.status(400).send(`Error creating Transaction: ${err}`));
};

// //PUT A WAREHOUSE
// exports.updateWarehouse = (req, res) => {
// 	knex("warehouses")
// 		.update(req.body)
// 		.where({ id: req.params.id })
// 		.then((_data) => {
// 			knex("warehouses")
// 				.where({ id: req.params.id })
// 				.then((data) => {
// 					res.status(200).json(data[0]);
// 				});
// 		})
// 		.catch((err) => res.status(400).send(`Error updating Warehouse ${req.params.id} ${err}`));
// };

//DELETE A TRANSACTION
exports.deleteTransaction = (req, res) => {
	knex("transactions")
		.delete()
		.where({ id: req.params.id })
		.then(() => {
			res.status(204).send(`Transaction with id: ${req.params.id} has been deleted`);
		})
		.catch((err) => {
			res.status(400).send(`Error deleting Transaction ${req.params.id} ${err}`);
		});
};
