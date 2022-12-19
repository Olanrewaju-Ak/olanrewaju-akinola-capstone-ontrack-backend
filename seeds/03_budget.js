/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("budgets").del();
	await knex("budgets").insert([
		{
			id: "dB9D4WVBr3",
			max_amount: "1000.00",
			amount_spent: "0",
			category: "food",
			category_id: 1,
			start_date: "2022-9-21",
			end_date: "2022-10-21"
		},
		{
			id: "AB9D4W5Brt",
			max_amount: "600.00",
			amount_spent: "0",
			category: "utility",
			category_id: 3,
			start_date: "2022-9-21",
			end_date: "2022-10-01"
		}
	]);
};
