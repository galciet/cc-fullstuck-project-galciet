exports.up = function (knex) {
  return knex.schema.createTable("menus", (table) => {
    table.increments("menu_id").primary();
    table.string("name").notNullable();
    table.string("tag").notNullable();
    table.integer("difficulty").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("menus");
};
