import { Router } from "express";
import { TransactionService } from "./service/TransactionService";
import { UserService } from "./service/UserService";


export const routes = Router()

routes.get('/', (req, res) => {
    res.send(`<div> 
   
    <h1>DT-MONEY backend</h1>   

    </div>`)
})

routes.post('/transaction', async (req, res) => {
    const { title, amount, type, category, userId, User} = req.body

    const transaction = await TransactionService.create({
        title,
        amount,
        type,
        category,
        userId, 
        User
    })

    return res.status(201).json({ data: transaction })
})

routes.post('/createuser', async (req, res) => {
    const { firstname, lastname, password, email, phonenumber } = req.body

    const newUser = await UserService.create({
        firstname,
        lastname,
        password,
        email,
        phonenumber
    })

    return res.status(201).json({ data: newUser })
})