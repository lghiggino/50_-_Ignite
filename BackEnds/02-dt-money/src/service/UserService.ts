import { Request } from "express-serve-static-core"
import { ParsedQs } from "qs"
import { ApiError } from "../errors/ApiError"
import { UserRepository } from "../repositories/UserRepository"
import * as jwt from "jsonwebtoken"

export type UserCreationProps = {
    firstname: string
    lastname: string
    password: string
    email: string
    phonenumber?: string
}

export type UserLoginProps = {
    email: string
    password: string
}

const userRepository = new UserRepository()

export class UserService {
    static validateRequestToken(request: Request<{}, any, any, ParsedQs, Record<string, any>>) {
        const getTokenFrom = (request: Request) => {
            const authorization = request.get('authorization')
            if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
                return authorization.substring(7)
            }
            return null
        }
    
        const token = getTokenFrom(request)
        if (!token) {
            throw new ApiError('Decode token error', 400, 'Token invalid or expired')
        }
    
        const decodedToken: any = jwt.verify(token, process.env.SECRET as string)
    
        if (!decodedToken.id) {
            throw new ApiError('Decode token error', 401, 'invalid token')
        } else {
            return decodedToken
        }
    }
    
    static async create({ firstname, lastname, password, email, phonenumber }: UserCreationProps) {
        const created = await userRepository.create({ firstname, lastname, password, email, phonenumber })
        return created
    }

    static async login({ email, password }: UserLoginProps) {
        const userToken = await userRepository.login({ email, password })
        return userToken
    }

    static async findById(id: string) {
        const user = await userRepository.findById(id)
        return user
    }
}