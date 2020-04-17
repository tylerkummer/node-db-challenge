exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          description: "Task_Description1",
          notes: "Task_Notes1",
          completed: false,
          project_id: 1,
        },
        {
          description: "Task_Description2",
          notes: "Task_Notes2",
          completed: false,
          project_id: 2,
        },
        {
          description: "Task_Description3",
          notes: "Task_Notes3",
          completed: false,
          project_id: 3,
        },
      ]);
    });
};
