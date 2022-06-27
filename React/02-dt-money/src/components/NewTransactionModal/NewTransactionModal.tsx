import axios from "axios";
import { FormEvent, useState } from "react";
import Modal from "react-modal"
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { Container, TransactionTypeContainer, RadioBox } from "./NewTransactionModal.styles";

interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [title, setTitle] = useState<string>("")
    const [amount, setAmount] = useState<number>(0)
    const [type, setType] = useState<"deposit" | "withdraw">("deposit")
    const [category, setCategory] = useState<string>("")

    async function handleCreateNewTransaction(ev: FormEvent) {
        ev.preventDefault()

        if (!title || !amount || !type || !category) {
            alert("must provide title, amount, type, category")
            console.log(title, amount, type, category)
            return
        }

        const localUser = localStorage.getItem("@userToken")

        if (!localUser) {
            alert("User not set")
            return
        }

        const parsedUser = JSON.parse(localUser)

        const token = `bearer ${parsedUser.token}`

        const config = {
            headers: { Authorization: token },
        }

        axios.post(
            'http://localhost:3333/transaction',
            { title, amount, type, category },
            config
        )
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar o modal" />
            </button>

            <Container
                onSubmit={handleCreateNewTransaction}
            >
                <h2>Cadastrar Transação</h2>

                <input
                    onChange={(ev) => setTitle(ev.target.value)}
                    value={title}
                    placeholder="Titulo"
                />

                <input
                    onChange={(ev) => setAmount(+ev.target.value)}
                    value={amount}
                    placeholder="valor"
                    type="number"
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType("deposit")}
                        isActive={type === "deposit"}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => setType("withdraw")}
                        isActive={type === "withdraw"}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    onChange={(ev) => setCategory(ev.target.value)}
                    value={category}
                    placeholder="Categoria"
                />

                <button
                    type="submit"
                >
                    Cadastrar
                </button>
            </Container>

        </Modal>
    )
}


//https://www.youtube.com/watch?v=HPoC-k7Rxwo
//https://www.youtube.com/watch?v=PiYS3PMXOjc
//https://app.rocketseat.com.br/node/chapter-ii-1/group/modal-and-forms/lesson/criando-botoes-de-tipo-2