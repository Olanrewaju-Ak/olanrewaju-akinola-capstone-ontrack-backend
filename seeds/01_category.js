/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("category").del();
	await knex("category").insert([
		{
			category_id: 1,
			category_name: "food"
		},
		{
			category_id: 2,
			category_name: "personal"
		},
		{
			category_id: 3,
			category_name: "utility "
		},
		{
			category_id: 4,
			category_name: "transport"
		},
		{
			category_id: 5,
			category_name: "lifestyle"
		},
		{
			category_id: 6,
			category_name: "medical"
		},

		{
			category_id: 7,
			category_name: "housing "
		},
		{
			category_id: 8,
			category_name: "others"
		},
		{
			category_id: 9,
			category_name: "income"
		}
	]);
};
