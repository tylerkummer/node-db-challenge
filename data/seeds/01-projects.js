exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Project1",
          description: "Project_Description1",
          completed: false,
        },
        {
          name: "Project2",
          description: "Project_Description2",
          completed: false,
        },
        {
          name: "Project3",
          description: "Project_Description3",
          completed: false,
        },
      ]);
    });
};
