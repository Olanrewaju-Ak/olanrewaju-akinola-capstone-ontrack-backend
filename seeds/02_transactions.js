/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("transactions").del();
	await knex("transactions").insert([
		{
			id: "9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3",
			amount: "5000.00",
			description: "salary",
			type: "income",
			date: "2022-10-22",
			category_id: 11
		},
		{
			id: "83433026-ca32-4c6d-bd86-a39ee8b7303e",
			amount: "300.00",
			description: "transportation",
			type: "expense",
			date: "2022-10-21",
			category_id: 3
		},
		{
			id: "83433026-ca32-4c6d-bd86-539ee4b73031",
			amount: "75.99",
			description: "pizza",
			type: "expense",
			date: "2022-9-1",
			category_id: 1
		},
		{
			id: "83433026-ca32-4c6d-bd86-539ee4b7353q",
			amount: "107.29",
			description: "dinner",
			type: "expense",
			date: "2022-8-12",
			category_id: 1
		},
		{
			id: "83433026-ca32-4c6d-bd86-a3gee8b7603g",
			amount: "210.00",
			description: "gift",
			type: "income",
			date: "2022-10-12",
			category_id: 11
		},
		{
			id: "83433026-ca32-4c6d-bd86-a39ee8b73068",
			amount: "40.00",
			description: "transportation",
			type: "expense",
			date: "2022-10-21",
			category_id: 3
		}
	]);
};
