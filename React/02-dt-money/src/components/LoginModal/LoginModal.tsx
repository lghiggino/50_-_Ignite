import axios from "axios";
import { AnySoaRecord } from "dns";
import { FormEvent, useState } from "react";
import Modal from "react-modal"
import closeImg from "../../assets/close.svg";
import { Container } from "./LoginModal.styles";

interface LoginModalProps {
    isOpen: boolean
    onRequestClose: () => void;
    onChangeUser: any;
    onError: any
}

export function LoginModal({ isOpen, onRequestClose, onChangeUser, onError }: LoginModalProps) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleLogin(event: FormEvent) {
        event.preventDefault()
        console.log("loggin in with email, password: ", email, password)

        if (!email || !password) {
            onError("Must provide email and password")
            return
        }

        try {
            onError("")
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
                onChangeUser(data)
                onRequestClose()
            }
        } catch (error) {
            onError("unable to login with this email and password")
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