import { prisma } from "../prisma";
import { TransactionCreationProps } from "../service/TransactionService";

export class TransactionRepository{
    async create({  title, amount, type, category, createdAt }: TransactionCreationProps) {
        await prisma.transactions.create({
            data: {
                title, amount, type, category, createdAt
            }
        });
    }

    async getAll() {
        await prisma.transactions.findMany()
    }
}