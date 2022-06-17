import Modal from "react-modal"

interface RegisterModalProps {
    isOpen: boolean
    onRequestClose: () => void;
}

export function RegisterModal({ isOpen, onRequestClose }: RegisterModalProps) {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <h2>register</h2>
        </Modal>
    )
}