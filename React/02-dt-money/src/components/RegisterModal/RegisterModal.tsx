import axios from "axios";
import { FormEvent, useState } from "react";
import Modal from "react-modal"
import closeImg from "../../assets/close.svg";
import { Container } from "./RegisterModal.styles";

interface RegisterModalProps {
    isOpen: boolean
    onRequestClose: () => void;
}

interface RegisterFormProps {
    email: string
    password: string
    confirmPassword: string
    phone: string
}

export function RegisterModal({ isOpen, onRequestClose }: RegisterModalProps) {
    const [registerFormInputs, setRegisterFormInputs] = useState<RegisterFormProps>({
        email: "",
        password: "",
        confirmPassword: "",
        phone: ""
    })

    async function handleRegistration(event: FormEvent) {
        event.preventDefault()
        console.log("registering with:",)
    }



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
                    value={registerFormInputs.email}
                    onChange={(e) => {
                        setRegisterFormInputs(registerFormInputs => ({
                            ...registerFormInputs,
                            email: e.target.value
                        }))
                    }}
                        
                />

                <input
                    placeholder="Password"
                    value={registerFormInputs.password}
                    onChange={(e) => {
                        setRegisterFormInputs(registerFormInputs => ({
                            ...registerFormInputs,
                            password: e.target.value
                        }))
                    }}
                />

                <input
                    placeholder="Confirm Password"
                    value={registerFormInputs.confirmPassword}
                    onChange={(e) => {
                        setRegisterFormInputs(registerFormInputs => ({
                            ...registerFormInputs,
                            confirmPassword: e.target.value
                        }))
                    }}
                />

                <input
                    placeholder="Phone"
                    value={registerFormInputs.phone}
                    onChange={(e) => {
                        setRegisterFormInputs(registerFormInputs => ({
                            ...registerFormInputs,
                            phone: e.target.value
                        }))
                    }}
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