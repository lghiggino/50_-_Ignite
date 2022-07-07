import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { Transaction } from "./App";

interface TransactionsProviderProps {
    children: ReactNode
    user: any
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({ children, user }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function getUserTransactions(user: any) {
        const axiosConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        };

        const { data } = await axios.get(
            `http://localhost:3333/transaction/${user.userForToken.id}`,
            axiosConfig
        )

        return data
    }

    useEffect(() => {
        if (!user.token) {
            return
        }

        if (user.token) {
            const getTransactions = async () => {
                const response = await getUserTransactions(user)
                setTransactions(response.data)
            }

            getTransactions()
            return () => { }
        }

        console.log("Eu NUNCA deveria ser logado")
    }, [user])


    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    )
}