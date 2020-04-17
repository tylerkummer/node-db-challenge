exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        { name: "Resource1", description: "Resoure_Description1" },
        { name: "Resource2", description: "Resoure_Description2" },
        { name: "Resource3", description: "Resoure_Description3" },
      ]);
    });
};
