/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("transactions").del();
	await knex("transactions").insert([
		{
			id: "2ae4e9d9-b299-4ed6-afbf-63b2b91e54a5",
			amount: "5000.00",
			description: "salary",
			type: "income",
			date: "2022-11-22",
			category: "income"
		},
		{
			id: "4c084d32-07f2-4a91-96b0-43a4cbd60e57",
			amount: "300.00",
			description: "netflix",
			type: "expense",
			date: "2022-11-01",
			category: "lifestyle"
		},
		{
			id: "59179243-f3a0-4f6b-bd5e-2392e43a378a",
			amount: "100.55",
			description: "hydro bill",
			type: "expense",
			date: "2022-11-01",
			category: "utility"
		},

		{
			id: "64c8d783-12a5-4c28-8a03-93c4d6c88d43",
			amount: "40.00",
			description: "transportation",
			type: "expense",
			date: "2022-10-21",
			category: "transport"
		},
		{
			id: "711c49a3-1480-4eb5-8926-7294f3f57899",
			amount: "210.00",
			description: "gift",
			type: "income",
			date: "2022-10-12",
			category: "income"
		},
		{
			id: "8213454b-a86c-4bd7-a6f4-32d848ffbb18",
			amount: "75.99",
			description: "pizza",
			type: "expense",
			date: "2022-9-1",
			category: "food"
		},
		{
			id: "9b2d6b0c-23c2-4ccb-abe0-53ac95bcc2c3",
			amount: "107.29",
			description: "dinner",
			type: "expense",
			date: "2022-8-12",
			category: "food"
		}
	]);
};
