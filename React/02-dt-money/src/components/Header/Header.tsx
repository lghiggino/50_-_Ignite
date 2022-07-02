import { useState } from 'react'
import { Container, Content } from './Header.styles'
import logoImg from '../../assets/logo.svg'
import logoutImg from '../../assets/log-out.svg'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <div style={{
                    width: '30%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    alignItems: 'center'
                }}>
                    <button
                        type="button"
                        onClick={onOpenNewTransactionModal}
                    >
                        Nova transação
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            localStorage.removeItem('@userToken')
                            window.location.reload()
                        }}
                    >
                        <img src={logoutImg} alt='exit' />
                    </button>

                </div>


            </Content>
        </Container>
    )
}