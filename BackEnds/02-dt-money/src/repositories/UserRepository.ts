import { ApiError } from "../errors/ApiError";
import { prisma } from "../prisma";
import { UserCreationProps, UserLoginProps } from "../service/UserService";
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

type User = {
    password: string
    email: string
    id: string
}

export class UserRepository {
    async create({ firstname, lastname, password, email, phonenumber }: UserCreationProps) {
        try {
            const saltRounds = 10
            const passwordHash = await bcrypt.hash(password, saltRounds)

            const newUser = await prisma.user.create({
                data: {
                    firstname, lastname, password: passwordHash, email, phonenumber
                }
            });

            return newUser
        } catch (error) {
            // throw new Error("Failed to create user at Repository")
            throw new ApiError("CreationError", 400, "Failed to create user at Repository")
        }

    }

    async login({ email, password }: UserLoginProps) {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email: email
                }
            })

            if (!user){
                return "invalid email or password"
            }

            const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.password)

            if (!(user && passwordCorrect)) {
                //how to set this as a 401 status code?
                return "invalid email or password"
            }

            const userForToken = {
                firstname: user.firstname,
                lastname: user.lastname,
                phonenumber: user.phonenumber,
                email: user.email,
                id: user.id
            }

            const token = jwt.sign(userForToken, process.env.SECRET)

            return token
        } catch (error) {
            // console.log(error)
            throw new Error("Failed to login at Repository")
        }
    }

}