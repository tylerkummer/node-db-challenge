const db = require("../data/db-config");

module.exports = {
  addResources,
  getResources,
  removeResources,
  addProjects,
  getProjects,
  removeProjects,
  addTasks,
  getTasks,
  removeTasks,
};

function addResources(resource) {
  return db("resources").insert(resource);
}

function getResources() {
  return db("resources");
}

function removeResources(id) {
  return db("resources").where({ id }).del();
}

function addProjects(project) {
  return db("projects").insert(project);
}

function getProjects() {
  return db("projects");
}

function removeProjects(id) {
  return db("projects").where({ id }).del();
}

function addTasks(task) {
  return db("tasks").insert(task);
}

function getTasks() {
  return db("tasks as t")
    .join("projects as p", "t.project_id", "p.id")
    .select(
      "t.id",
      "t.description",
      "t.notes",
      "t.completed",
      "p.name as Project_Name",
      "p.description as Project_Description"
    )
    .orderBy("p.id");
}

function removeTasks(id) {
  return db("tasks").where({ id }).del();
}
