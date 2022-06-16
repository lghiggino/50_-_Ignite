import { prisma } from "../prisma";
import { UserCreationProps, UserLoginProps } from "../service/UserService";
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


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
            throw new Error("Failed to create user at Repository")
        }

    }

    async login({ email, password }: UserLoginProps) {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email: email
                }
            })

            const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.password)

            if (!(user && passwordCorrect)) {
                return "invalid email or password"
            }

            const userForToken = {
                email: user.email,
                id: user.id
            }

            const token = jwt.sign(userForToken, process.env.SECRET)

            return token
        } catch (error) {
            console.log(error)
            throw new Error("Failed to login at Repository")
        }
    }

    async getAll() {
        await prisma.user.findMany()
    }
}