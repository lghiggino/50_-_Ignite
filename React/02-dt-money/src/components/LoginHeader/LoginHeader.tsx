import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content, FormSection } from './LoginHeader.styles'

export function LoginHeader() {
    const [loginFormVisible, setLoginFormVisible] = useState(false)
    const [signupFormVisible, setSignupFormVisible] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [phone, setPhone] = useState("")

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <div className="button-container">
                    <button
                        type="button"
                        onClick={() => {
                            setLoginFormVisible(true)
                            setSignupFormVisible(false)
                        }}
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setSignupFormVisible(true)
                            setLoginFormVisible(false)
                        }}
                    >
                        SignUp
                    </button>
                </div>
            </Content>
            <FormSection>
                {loginFormVisible &&
                    <form>
                        <label>email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                        />

                        <label>password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                        />
                    </form>
                }

                {signupFormVisible &&
                    <form>
                        <label>email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                        />

                        <label>password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                        />

                        <label>confirm password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(ev) => setConfirmPassword(ev.target.value)}
                        />

                        <label>phone</label>
                        <input
                            type="phone"
                            value={phone}
                            onChange={(ev) => setPhone(ev.target.value)}
                        />
                    </form>
                }
            </FormSection>
        </Container >
    )
} 