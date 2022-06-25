import axios from "axios";
import { FormEvent, useState } from "react";
import Modal from "react-modal"
import closeImg from "../../assets/close.svg";
import { Container } from "./LoginModal.styles";

interface LoginModalProps {
    isOpen: boolean
    onRequestClose: () => void;
}

export function LoginModal({ isOpen, onRequestClose }: LoginModalProps) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    async function handleLogin(event: FormEvent) {
        event.preventDefault()
        console.log("loggin in with email, password: ", email, password)
        try {
            const { data } = await axios.post(
                'http://localhost:3333/login',
                { email, password },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            console.log(data)
            if (data) {
                localStorage.setItem("@userToken", JSON.stringify(data))
            }
        } catch (error) {
            setError("unable to login with this email and password")
        }
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

            <Container>
                <h2>Login</h2>

                <input
                    placeholder="Email"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                >
                </input>

                <button
                    type="submit"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </Container>

        </Modal>
    )
}