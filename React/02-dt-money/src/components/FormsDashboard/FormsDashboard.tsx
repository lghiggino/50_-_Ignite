import { useState } from "react";
import { Container } from "../FormsDashboard/FormsDashboard.styles";
import { Summary } from "../Summary/Summary";
import { TransactionsTable } from "../TransactionsTable/TransactionsTable";

export function FormsDashboard() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Container>
            <form>
                <label>email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                />

                <label>password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                />
            </form>
        </Container>
    )
}