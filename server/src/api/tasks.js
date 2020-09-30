const express = require("express");
const Task = require("../models/task");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(["Task1", "Task2", "🙄"]);
});

router.get("/random", async (req, res) => {
  const allTasks = await Task.find();
  try {
    res.json(allTasks);
  } catch (error) {
    res.json(error.message);
  }
});

router.post("/random", async (req, res, error) => {
  const task = new Task({
    taskName: req.body.taskName,
  });
  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
