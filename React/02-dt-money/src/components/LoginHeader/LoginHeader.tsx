import axios from 'axios'
import { create } from 'domain'
import { useEffect, useState, FormEvent } from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content, FormSection } from './LoginHeader.styles'

interface LoginHeaderProps {
    setUser: any
    onOpenLoginModal: () => void;
    onOpenRegisterModal: () => void;
}

export function LoginHeader({ setUser, onOpenLoginModal, onOpenRegisterModal }: LoginHeaderProps) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [userToken, setUserToken] = useState("")

    async function userlogin(ev: FormEvent) {
        ev.preventDefault()
        try {
            const { data } = await axios.post('http://localhost:3333/login', {
                email,
                password
            })
            const userToken = data
            setUserToken(userToken)
            localStorage.setItem("@userToken", userToken)
            setUser(true)
        } catch (error) {
            console.log(error)
        }
    }

    async function createNewUser(ev: FormEvent) {
        ev.preventDefault()

        if (password !== confirmPassword) {
            alert("Password must match")
        }

        if (!email) {
            alert("Email is required")
        }

        if (!phone) {
            alert("Phone is required")
        }
        try {
            const { data } = await axios.post('http://localhost:3333/createuser', {
                firstname: "",
                lastname: "",
                password,
                email,
                phonenumber: phone
            })
            const createdUser = data
            console.log(createdUser)
            alert(`Seja bem vindo(a) ${createdUser.data.email}. Favor realizar login`)
            setConfirmPassword("")
            setPhone("")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <div className="button-container">
                    <button
                        type="button"
                        onClick={() => {
                            onOpenLoginModal()
                        }}
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            onOpenRegisterModal()
                        }}
                    >
                        SignUp
                    </button>
                </div>
            </Content>
        </Container >
    )
} 