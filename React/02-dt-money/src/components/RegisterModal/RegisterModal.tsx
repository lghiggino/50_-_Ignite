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
        ariaHideApp={false}
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