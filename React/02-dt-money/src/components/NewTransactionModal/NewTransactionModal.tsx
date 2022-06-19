import Modal from "react-modal"
import closeImg from "../../assets/close.svg";
import { Container } from "./NewTransactionModal.styles";

interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

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

            <Container>
                <h2>cadastrar transação</h2>

                <input
                    placeholder="Email"
                />

                <input
                    placeholder="Password"
                />

                <input
                    placeholder="Confirm Password"
                />

                <input
                    placeholder="Phone"
                />

                <button
                    type="submit"
                >
                    Register
                </button>
            </Container>

        </Modal>
    )
}

//https://www.youtube.com/watch?v=HPoC-k7Rxwo
//https://www.youtube.com/watch?v=PiYS3PMXOjc
//https://app.rocketseat.com.br/node/chapter-ii-1/group/modal-and-forms/lesson/estrutura-do-formulario