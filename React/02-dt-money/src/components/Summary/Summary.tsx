import { useContext } from "react";
import { Container } from "./Summary.styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from "../../TransactionsContext";


export function Summary() {
    const data = useContext(TransactionsContext)
    console.log("data em sumary", data)

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="saídas" />
                </header>
                <strong>- R$600,00</strong>
            </div>

            {/* Essa className abaixo seria melhor como um check de saldo >= 0 ? green : red */}
            <div className="highlight-background">
                <header>
                    <p>Saldo</p>
                    <img src={totalImg} alt="saldo" />
                </header>
                <strong>R$400,00</strong>
            </div>
        </Container>
    )
}