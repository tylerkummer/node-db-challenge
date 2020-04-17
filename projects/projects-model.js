const db = require("../data/db-config");

module.exports = {
  addResources,
  getResources,
  removeResources,
  updateResources,
  addProjects,
  getProjects,
  removeProjects,
  updateProjects,
  addTasks,
  getTasks,
  removeTasks,
  updateTasks,
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

function updateResources(changes, id) {
  return db("resources").where({ id }).update(changes);
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

function updateProjects(changes, id) {
  return db("projects").where({ id }).update(changes);
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

function updateTasks(changes, id) {
  return db("tasks").where({ id }).update(changes);
}
