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
  Projects.addProjects(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err.message });
    });
});

// REMOVE projects
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Projects.removeProjects(id)
    .then((deleted) => {
      if (deleted) {
        res.status(200).json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find scheme with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// UPDATE projects
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Projects.updateProjects(id)
    .then((update) => {
      if (update) {
        Schemes.update(changes, id).then((updated) => {
          res.json(updated);
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find scheme with given id" });
      }
    })
    .catch((err) => {
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

// REMOVE tasks
router.delete("/resources/:id", (req, res) => {
  const { id } = req.params;

  Projects.removeResources(id)
    .then((deleted) => {
      if (deleted) {
        res.status(200).json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find scheme with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// UPDATE resources
router.put("/resources/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Projects.updateResources(id)
    .then((update) => {
      if (update) {
        Schemes.update(changes, id).then((updated) => {
          res.json(updated);
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find scheme with given id" });
      }
    })
    .catch((err) => {
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

// REMOVE tasks
router.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;

  Projects.removeTasks(id)
    .then((deleted) => {
      if (deleted) {
        res.status(200).json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find scheme with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// UPDATE tasks
router.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Projects.updateTasks(id)
    .then((update) => {
      if (update) {
        Schemes.update(changes, id).then((updated) => {
          res.json(updated);
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find scheme with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
