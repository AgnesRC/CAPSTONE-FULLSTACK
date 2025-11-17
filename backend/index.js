import express from "express";
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.json('Hello from server')
})

app.listen(port, () => {
    console.log('Listening on port:' + port);
})
