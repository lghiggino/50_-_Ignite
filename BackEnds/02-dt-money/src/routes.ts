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

const getTokenFrom = (request: Request) => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

routes.post('/transaction', async (request, response) => {
    const { title, amount, type, category, userId, User } = request.body

    const token = getTokenFrom(request)
    if (!token) {
        throw new ApiError('Decode token error', 400, 'Token invalid or expired')
    }

    const decodedToken: any = jwt.verify(token, process.env.SECRET as string)

    if (!decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }
    const user = await UserService.findById(decodedToken.id)

    if (user === "invalid user") {
        return  "invalid user"
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
    const { userId } = request.params

    const transactionList = await TransactionService.getByUserId(userId)

    return response.status(201).json({ data: transactionList })
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

routes.post('/login', async (request, response) => {
    const { email, password } = request.body

    const user = await UserService.login({ email, password })

    if (user === "invalid email or password") {
        return response.status(400).json({ error: "invalid email or password" })
    }

    return response.json(user)
})