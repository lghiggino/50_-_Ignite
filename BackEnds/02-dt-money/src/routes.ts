import dayjs from "dayjs";
import { Router } from "express";
import { TransactionService } from "./service/TransactionService";


export const routes = Router()

routes.get('/', (req, res) => {
    res.send(`<div> 
   
    <h1>DT-MONEY backend</h1>   

    </div>`)
})

routes.post('/transaction', async (req, res) => {
    const { title, amount, type, category } = req.body

    const createdAt = dayjs().format("YYYY-MM-DD")

    const feedback = await TransactionService.create({
        title, 
        amount, 
        type, 
        category,
        createdAt
    })

    return res.status(201).json({ data: feedback })
})