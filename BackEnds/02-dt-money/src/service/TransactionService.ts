import { User } from "@prisma/client"
import { TransactionRepository } from "../repositories/TransactionRepository"

export type TransactionCreationProps = {
    title: string
    amount: number
    type: string
    category: string
    userId: string 
    User: any
}

const transactionRepository = new TransactionRepository()

export class TransactionService {
    
    static async create({ title, amount, type, category, userId, User }: TransactionCreationProps) {
        const created = await transactionRepository.create({title, amount, type, category, userId, User})
        return created
    }

    static async getByUserId(userId: string) {
        const transactionList = await transactionRepository.getByUserId(userId)
        return transactionList
    }

    static async getAll() {

    }

    static async getAllByUserId() {
        return "Yet to be implemented"
    }
}