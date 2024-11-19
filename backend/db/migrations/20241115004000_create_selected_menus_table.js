exports.up = function (knex) {
  return knex.schema.createTable("selected_menus", (table) => {
    table.increments("id").primary();
    table.date("date").notNullable();
    table.integer("menu_id").unsigned().notNullable().references("menu_id").inTable("menus").onDelete("CASCADE");
    table.integer("sets").notNullable();
    table.integer("reps").notNullable();
    table.integer("weight").nullable();
    table.boolean("completed").notNullable().defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("selected_menus");
};
