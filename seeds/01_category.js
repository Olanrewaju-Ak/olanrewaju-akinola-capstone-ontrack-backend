/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("category").del();
	await knex("category").insert([
		{
			category_id: 11,
			category_name: "income"
		},
		{
			category_id: 1,
			category_name: "food"
		},
		{
			category_id: 2,
			category_name: "housing"
		},
		{
			category_id: 3,
			category_name: "transportation"
		},
		{
			category_id: 4,
			category_name: "utilities"
		},
		{
			category_id: 5,
			category_name: "insurance"
		},
		{
			category_id: 6,
			category_name: "medical"
		},
		{
			category_id: 7,
			category_name: "subscription"
		},
		{
			category_id: 8,
			category_name: "personal"
		},
		{
			category_id: 9,
			category_name: "fun"
		},
		{
			category_id: 10,
			category_name: "miscellaneous"
		}
	]);
};
