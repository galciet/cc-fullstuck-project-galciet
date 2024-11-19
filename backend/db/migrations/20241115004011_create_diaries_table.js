exports.up = function (knex) {
  return knex.schema.createTable("diaries", (table) => {
    table.increments("id").primary();
    table.date("date").notNullable();
    table.text("content").nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("diaries");
};
