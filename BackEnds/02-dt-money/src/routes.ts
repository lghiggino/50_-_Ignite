import { Router, Request, Response } from "express";
import { TransactionService } from "./service/TransactionService";
import { UserService } from "./service/UserService";
import jwt from "jsonwebtoken";
import { ApiError } from "./errors/ApiError";

export const routes = Router()

routes.get('/', (req, res) => {
    res.send(`<div> 
   
    <h1>DT-MONEY backend</h1>   

    </div>`)
})

routes.post('/transaction', async (request, response) => {
    const { title, amount, type, category, userId, User } = request.body

    const decodedToken = UserService.validateRequestToken(request)

    const user = await UserService.findById(decodedToken.id)

    if (user === "invalid user") {
        return "invalid user"
    }

    const transaction = await TransactionService.create({
        title,
        amount,
        type,
        category,
        userId: user.id,
        User: user
    })

    return response.status(201).json({ data: transaction })
})

routes.get('/transaction/:userId', async (request, response) => {
    //check for token validity
    const decodedToken = UserService.validateRequestToken(request)

    // const { userId } = request.params
    //get user data
    const transactionList = await TransactionService.getByUserId(decodedToken.id)

    return response.status(201).json({ data: transactionList })
})

routes.post('/createuser', async (req, res) => {
    const { firstname, lastname, password, email, phonenumber } = req.body
    console.log("entrou em /createuser com: ", firstname, lastname, password, email, phonenumber)

    const newUser = await UserService.create({
        firstname,
        lastname,
        password,
        email,
        phonenumber
    })

    return res.status(201).json({ data: newUser })
})

routes.post('/login', async (request, response) => {
    const { email, password } = request.body

    const user = await UserService.login({ email, password })

    if (user === "invalid email or password") {
        return response.status(400).json({ error: "invalid email or password" })
    }

    return response.json(user)
})