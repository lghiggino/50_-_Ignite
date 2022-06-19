import Modal from "react-modal"
import closeImg from "../../assets/close.svg";
import { Container } from "./LoginModal.styles";

interface LoginModalProps {
    isOpen: boolean
    onRequestClose: () => void;
}

export function LoginModal({ isOpen, onRequestClose }: LoginModalProps) {

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
                <h2>Login</h2>

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