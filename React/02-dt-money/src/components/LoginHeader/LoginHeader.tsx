import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './LoginHeader.styles'

export function LoginHeader() {
    const [visibleForm, setVisibleForm] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <div className="button-container">
                    <button
                        type="button"
                        onClick={() => { console.log("should set a login form as visible") }}
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        onClick={() => { console.log("2") }}
                    >
                        SignUp
                    </button>
                </div>

            </Content>
        </Container >
    )
} 