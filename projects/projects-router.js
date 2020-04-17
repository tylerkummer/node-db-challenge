const express = require("express");
const Projects = require("./projects-model");
const router = express.Router();

// GET projects
router.get("/", (req, res) => {
  Projects.getProjects()
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// ADD projects
router.post("/", (req, res) => {
  Projects.addProject(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err.message });
    });
});

// GET resources
router.get("/resources", (req, res) => {
  Projects.getResources()
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// ADD resources
router.post("/resources", (req, res) => {
  Projects.addResources(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err.message });
    });
});

// GET tasks
router.get("/tasks", (req, res) => {
  Projects.getTasks()
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// ADD tasks
router.post("/tasks", (req, res) => {
  Projects.addTasks(req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
