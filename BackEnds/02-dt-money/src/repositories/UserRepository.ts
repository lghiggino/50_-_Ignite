import { prisma } from "../prisma";
import { UserCreationProps } from "../service/UserService";

export class UserRepository {
    async create({ firstname, lastname, password, email, phonenumber }: UserCreationProps) {
        const transaction = await prisma.user.create({
            data: {
                firstname, lastname, password, email, phonenumber
            }
        });
        return transaction
    }

    async getAll() {
        await prisma.user.findMany()
    }
}