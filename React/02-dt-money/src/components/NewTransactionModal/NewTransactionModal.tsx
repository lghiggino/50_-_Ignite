import Modal from "react-modal"
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
            <Container>
                <h2>cadastrar transação</h2>

                <input
                    placeholder="Titulo"
                />

                <input
                    placeholder="valor"
                    type="number"
                />

                <input
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
//https://app.rocketseat.com.br/node/chapter-ii-1/group/modal-and-forms/lesson/estrutura-do-formulario