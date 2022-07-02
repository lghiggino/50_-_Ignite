import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { TransactionProps } from "../../App";
import { Container } from "./TransactionsTable.styles";

type TransactionsTableProps = {
    transactionList: TransactionProps[]
}

export function TransactionsTable({ transactionList }: TransactionsTableProps) {
    console.log(transactionList)

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
                                <td className={t.type}>R$ {t.amount}</td>
                                <td>{t.category}</td>
                                <td>{t.createdAt}</td>
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