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
		table.date("date").notNullable();
		table.string("category").notNullable();
		table
			.integer("category_id")
			.unsigned()
			.references("category.category_id")
			.onUpdate("CASCADE")
			.onDelete("CASCADE");
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("transactions");
};
