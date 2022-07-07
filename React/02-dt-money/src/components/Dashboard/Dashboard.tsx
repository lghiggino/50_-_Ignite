import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "../Dashboard/Dashboard.styles";
import { Summary } from "../Summary/Summary";
import { TransactionsTable } from "../TransactionsTable/TransactionsTable";


export function Dashboard() {
    const transactions = useContext(TransactionsContext)


    if (!transactions) {
        return (
            <Container>
                <p>Não há transações disponíveis para esse usuário</p>
            </Container>
        )
    }

    return (
        <Container>
            <Summary />
            <TransactionsTable transactionList={transactions} />
        </Container>
    )
}
