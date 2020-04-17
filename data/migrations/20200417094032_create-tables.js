exports.up = function (knex) {
  return (
    knex.schema
      // projects
      .createTable("projects", (tbl) => {
        tbl.increments("id");
        tbl.string("name", 255).notNullable();
        tbl.text("description");
        tbl.boolean("completed").notNullable().defaultTo(false);
      })
      // resources
      .createTable("resources", (tbl) => {
        tbl.increments("id");
        tbl.string("name", 255).unique().notNullable();
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
          .onDelete("CASCADE");
        tbl
          .integer("resource_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resources")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      })
      // tasks
      .createTable("tasks", (tbl) => {
        tbl.increments("id");
        tbl.text("description").notNullable();
        tbl.text("notes");
        tbl.boolean("completed").notNullable().defaultTo(false);
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
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
