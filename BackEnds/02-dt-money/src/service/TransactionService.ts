import { TransactionRepository } from "../repositories/TransactionRepository"

export type TransactionCreationProps = {
    title: string
    amount: number
    type: string
    category: string
    createdAt: string
}

const transactionRepository = new TransactionRepository()

export class TransactionService {
    static async create({ title, amount, type, category, createdAt }: TransactionCreationProps) {
        console.log(title, amount, type, category, createdAt)
        transactionRepository.create({title, amount, type, category, createdAt})
    }

    static async getAll() {

    }

    static async getAllByUserId() {
        return "Yet to be implemented"
    }
}