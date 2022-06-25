import { prisma } from "../prisma";
import { TransactionCreationProps } from "../service/TransactionService";

export class TransactionRepository{
    
   async create({ title, amount, type, category, userId, User }: TransactionCreationProps) {
        const transaction = await prisma.transactions.create({
            data: {
                title, amount, type, category, userId
            }
        });
        return transaction
    }

    async getByUserId(userId: string) {
        const transactionList = await prisma.transactions.findMany({
            where: {userId: userId}
        })
        return transactionList
    }

    async getAll() {
        await prisma.transactions.findMany()
    }
}