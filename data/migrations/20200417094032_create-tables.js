exports.up = function (knex) {
  return (
    knex.schema
      // projects
      .createTable("projects", (tbl) => {
        tbl.increments("id");
        tbl.string("name", 255).notNullable();
        tbl.text("description");
        tbl.boolean("completed").notNullable();
        // resources
      })
  );
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
