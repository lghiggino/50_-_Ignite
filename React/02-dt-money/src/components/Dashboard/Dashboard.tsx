import { Container } from "../Dashboard/Dashboard.styles";
import { Summary } from "../Summary/Summary";
import { TransactionsTable } from "../TransactionsTable/TransactionsTable";

type DashboardProps = {
    userToken?: string
    transactionList: any
}

export function Dashboard({ transactionList }: DashboardProps) {
    console.log(transactionList)

    if (!transactionList) {
        return (
            <></>
        )
    }

    return (
        <Container>
            <Summary />
            <TransactionsTable transactionList={transactionList} />
        </Container>
    )
}
