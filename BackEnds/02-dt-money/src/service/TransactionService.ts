import { TransactionRepository } from "../repositories/TransactionRepository"

export type TransactionCreationProps = {
    title: string
    amount: number
    type: string
    category: string
}

const transactionRepository = new TransactionRepository()

export class TransactionService {
    static async create({ title, amount, type, category }: TransactionCreationProps) {
        const created = await transactionRepository.create({title, amount, type, category})
        return created
    }

    static async getAll() {

    }

    static async getAllByUserId() {
        return "Yet to be implemented"
    }
}