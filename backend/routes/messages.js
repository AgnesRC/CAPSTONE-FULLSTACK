import express from "express";
import Message from "../models/Message.js";


const router = express.Router()

router.post("/", async (req, res) => {
    try {
      const newMessage = await Message.create(req.body);
      res.json(newMessage);
    } catch (error) {
      res.json(error.message);
    }
  });

router.get("/", async (req, res) => {
    const messages = await Message.find();
    res.json(messages);
  });

  export default router;