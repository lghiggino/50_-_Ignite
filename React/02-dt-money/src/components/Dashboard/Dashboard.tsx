import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "../Dashboard/Dashboard.styles";
import { Summary } from "../Summary/Summary";
import { TransactionsTable } from "../TransactionsTable/TransactionsTable";


export function Dashboard() {
    const transactions = useContext(TransactionsContext)
    
    if (!transactions || transactions.length === 0) {
        return (
            <Container>
                <p>Não há transações disponíveis para esse usuário</p>
                <p>cadastre uma nova transação no botão "Nova Transação"</p>
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
