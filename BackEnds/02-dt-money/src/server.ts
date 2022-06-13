import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { Request, Response, NextFunction } from 'express';

dotenv.config()

const app = express()

app.use(express.json({limit: '50mb'}))
app.use(cors())
//{ origin: 'http://localhost:3000' }


app.get("/", (req: Request, res: Response) => {
    res.json("HELLO 2")
})

app.listen(process.env.PORT, () => {
    console.log(`HTTP server running in port ${process.env.PORT}`)
})