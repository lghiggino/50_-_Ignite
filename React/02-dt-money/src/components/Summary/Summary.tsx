import { Container } from "./Summary.styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from "../../hooks/useTransactions";


export function Summary() {
    const transactions = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'credit') {
            acc.credit += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdrawl += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc
    }, {
        credit: 0,
        withdrawl: 0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.credit)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="saídas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdrawl)}
                </strong>
            </div>

            {/* Essa className abaixo seria melhor como um check de saldo >= 0 ? green : red */}
            <div className="highlight-background">
                <header>
                    <p>Saldo</p>
                    <img src={totalImg} alt="saldo" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}