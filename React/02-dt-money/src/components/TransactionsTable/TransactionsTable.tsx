import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { TransactionProps } from "../../App";
import { Container } from "./TransactionsTable.styles";

type TransactionsTableProps = {
    transactionList: TransactionProps[]
}

export function TransactionsTable({ transactionList }: TransactionsTableProps) {
    const data = useContext(TransactionsContext)
    console.log("data em TransactionsTable", data)

    if (!transactionList) {
        return (
            <Container>
                <div>
                    <h2>
                        Sem transações por enquanto
                    </h2>
                </div>
            </Container>
        )
    }

    if (transactionList) {
        return (
            <Container>
                <table>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Valor</th>
                            <th>Categoria</th>
                            <th>Data</th>
                        </tr>
                    </thead>

                    <tbody>
                        {transactionList.map((t: TransactionProps) => (
                            <tr key={t.id}>
                                <td>{t.title}</td>
                                <td className={t.type}>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(t.amount)}
                                </td>
                                <td>{t.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(new Date(t.createdAt))}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>
        )
    }

    return (
        <Container>
            <h1>please login to see your transactions</h1>
        </Container>
    )
}