/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable("budgets", (table) => {
		table.uuid("id").primary();
		table.decimal("max_amount", 14, 2).notNullable();
		table.decimal("amount_spent", 14, 2).notNullable();
		table.string("category").notNullable();
		table
			.integer("category_id")
			.unsigned()
			.notNullable()
			.references("category.category_id")
			.onUpdate("CASCADE")
			.onDelete("CASCADE");
		table.date("start_date").notNullable();
		table.date("end_date").notNullable();
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("budgets");
};
