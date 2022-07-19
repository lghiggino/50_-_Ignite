import { useContext } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import { Container, NotificationText } from "../Dashboard/Dashboard.styles";
import { Summary } from "../Summary/Summary";
import { TransactionsTable } from "../TransactionsTable/TransactionsTable";


export function Dashboard() {
    const transactions = useTransactions();

    if (!transactions || transactions.length === 0) {
        return (
            <Container>
                <NotificationText>Não há transações disponíveis para esse usuário</NotificationText>
                <NotificationText>Cadastre uma nova transação no botão "Nova Transação"</NotificationText>
            </Container>
        )
    }

    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    )
}
