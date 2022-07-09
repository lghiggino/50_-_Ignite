import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Transaction } from "../../App";
import { Container } from "./TransactionsTable.styles";

export function TransactionsTable() {
    const transactions = useContext(TransactionsContext)

    if (!transactions) {
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

    if (transactions) {
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
                        {transactions.map((t: Transaction) => (
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