import express from "express";
import Project from "../models/Project.js";


const router = express.Router()

router.post("/", async (req, res) => {
    try {
      const project = await Project.create(req.body);
      res.json(project);
    } catch (error) {
      res.json(error.message);
    }
  });

router.get("/", async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
  });

  export default router;