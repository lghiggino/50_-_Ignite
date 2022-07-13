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
    firstname: string
    lastname: string
    email: string
    password: string
    confirmPassword: string
    phonenumber: string
}

export function RegisterModal({ isOpen, onRequestClose }: RegisterModalProps) {
    const [registerFormInputs, setRegisterFormInputs] = useState<RegisterFormProps>({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        phonenumber: ""
    })

    async function handleRegistration(event: FormEvent) {
        event.preventDefault()

        if (!registerFormInputs.email ||
            !registerFormInputs.password ||
            !registerFormInputs.confirmPassword ||
            !registerFormInputs.phonenumber
        ) {
            alert("Must provide every field to be able to register")
            return
        }

        if (registerFormInputs.password !== registerFormInputs.confirmPassword) {
            alert("Password must match")
            return
        }

        try {
            const { data } = await axios.post(
                'http://localhost:3333/createuser',
                 registerFormInputs,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            if(data){
                alert("registrado com sucesso, por favor faça login")
                onRequestClose()
            }
        } catch (error) {
           console.log("unable to register")
        }
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
                    placeholder="First Name"
                    value={registerFormInputs.firstname}
                    onChange={(e) => {
                        setRegisterFormInputs(registerFormInputs => ({
                            ...registerFormInputs,
                            firstname: e.target.value
                        }))
                    }}
                />

                <input
                    placeholder="Last Name"
                    value={registerFormInputs.lastname}
                    onChange={(e) => {
                        setRegisterFormInputs(registerFormInputs => ({
                            ...registerFormInputs,
                            lastname: e.target.value
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
                    value={registerFormInputs.phonenumber}
                    onChange={(e) => {
                        setRegisterFormInputs(registerFormInputs => ({
                            ...registerFormInputs,
                            phonenumber: e.target.value
                        }))
                    }}
                />

                <button
                    type="submit"
                    onClick={handleRegistration}
                >
                    Register
                </button>
            </Container>

        </Modal>
    )
}