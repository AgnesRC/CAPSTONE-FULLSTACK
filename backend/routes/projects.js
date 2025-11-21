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

router.put("/:id", async (req, res) => {
    try {
      const updated = await Project.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(updated);
    } catch (error) {
      res.json(error.message);
    }
  });
  
router.delete("/:id", async (req, res) => {
    try {
      const deleted = await Project.findByIdAndDelete(req.params.id);
      res.json(deleted);
    } catch (error) {
      res.json(error.message);
    }
  });





  export default router;