/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable("transactions", (table) => {
		table.uuid("id").primary();
		table.decimal("amount", 14, 2).notNullable();
		table.string("description").notNullable();
		table.string("type").notNullable();
		table.datetime("date").notNullable();
		table.string("category").notNullable();
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("transactions");
};
