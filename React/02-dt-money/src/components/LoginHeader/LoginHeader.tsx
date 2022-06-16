import logoImg from '../../assets/logo.svg'
import { Container, Content } from './LoginHeader.styles'

export function LoginHeader() {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button">
                    Login
                </button>
            </Content>
        </Container>
    )
}