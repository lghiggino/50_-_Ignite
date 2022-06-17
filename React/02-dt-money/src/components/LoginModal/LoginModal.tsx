import Modal from "react-modal"

interface LoginModalProps {
    isOpen: boolean
    onRequestClose: () => void;
}

export function LoginModal({ isOpen, onRequestClose }: LoginModalProps) {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <h2>login</h2>
        </Modal>
    )
}