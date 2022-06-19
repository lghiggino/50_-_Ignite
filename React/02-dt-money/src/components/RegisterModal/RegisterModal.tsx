import Modal from "react-modal"
import closeImg from "../../assets/close.svg";
import { Container } from "./RegisterModal.styles";

interface RegisterModalProps {
    isOpen: boolean
    onRequestClose: () => void;
}

export function RegisterModal({ isOpen, onRequestClose }: RegisterModalProps) {

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
                <h2>Register</h2>

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