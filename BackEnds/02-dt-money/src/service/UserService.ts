import { ApiError } from "../errors/ApiError"
import { UserRepository } from "../repositories/UserRepository"

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