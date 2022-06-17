import { Container } from "../Dashboard/Dashboard.styles";
import { Summary } from "../Summary/Summary";
import { TransactionsTable } from "../TransactionsTable/TransactionsTable";

type DashboardProps = {
    userToken: string
}

export function Dashboard({ userToken }: DashboardProps) {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    )
}
