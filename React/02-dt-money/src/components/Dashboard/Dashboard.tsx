import { Container } from "../Dashboard/Dashboard.styles";
import { Summary } from "../Summary/Summary";
import { TransactionsTable } from "../TransactionsTable/TransactionsTable";

export function Dashboard(){
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    )
}