import express from "express";
import cors from 'cors'
import messageRoutes from "./routes/messages.js"
import projectRoutes from "./routes/projects.js"


import "dotenv/config"
import connectDB from "./db.js";

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use("/contact", messageRoutes)
app.use("/projects", projectRoutes)


app.get('/', (req, res) => {
    res.json('Hello from server')
})

app.listen(port, () => {
    console.log('Listening on port:' + port);
    connectDB()
})
