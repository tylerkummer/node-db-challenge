exports.up = function (knex) {
  return (
    knex.schema
      // projects
      .createTable("projects", (tbl) => {
        tbl.increments("id");
        tbl.string("name", 255).notNullable();
        tbl.text("description");
        tbl.boolean("completed").notNullable();
      })
      // resources
      .createTable("resources", (tbl) => {
        tbl.increments("id");
        tbl.name("name", 255).notNullable();
        tbl.text("description");
      })
      // projects_resources
      .createTable("projects_resources", (tbl) => {
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onUpdate("CASCADE")
          .onDelete("RESTRICT");
        tbl
          .integer("resource_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resources")
          .onUpdate("CASCADE")
          .onDelete("RESTRICT");
      })
      .createTable("tasks", (tbl) => {
        tbl.increments("id");
        tbl.text("description").notNullable();
        tbl.text("notes");
        tbl.boolean("completed").notNullable();
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onUpdate("CASCADE")
          .onDelete("RESTRICT");
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
