import express from "express";
import cors from 'cors'
import Message from "./models/Message.js";

import "dotenv/config"
import connectDB from "./db.js";

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json('Hello from server')
})

app.post("/contact", async (req, res) => {
    try {
      const newMessage = await Message.create(req.body);
      res.json(newMessage);
    } catch (error) {
      res.json(error.message);
    }
  });

app.listen(port, () => {
    console.log('Listening on port:' + port);
    connectDB()
})
