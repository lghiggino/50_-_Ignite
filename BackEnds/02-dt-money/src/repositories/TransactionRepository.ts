import { prisma } from "../prisma";
import { TransactionCreationProps } from "../service/TransactionService";

export class TransactionRepository{
    async create({  title, amount, type, category }: TransactionCreationProps) {
        const transaction = await prisma.transactions.create({
            data: {
                title, amount, type, category
            }
        });
        return transaction
    }

    async getAll() {
        await prisma.transactions.findMany()
    }
}