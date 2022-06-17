import { Global } from "@emotion/react";
import { useState } from "react";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Header } from "./components/Header/Header";
import { LoginHeader } from "./components/LoginHeader/LoginHeader";
import { GlobalStyles } from "./styles/global";
import Modal from 'react-modal'
import { NewTransactionModal } from "./components/NewTransactionModal/NewTransactionModal";
import { LoginModal } from "./components/LoginModal/LoginModal";
import { RegisterModal } from "./components/RegisterModal/RegisterModal";

export function App() {
  const [user, setUser] = useState(true)
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  function handleOpenLoginModal() {
    setIsLoginModalOpen(true)
  }

  function handleCloseLoginModal() {
    setIsLoginModalOpen(false)
  }

  function handleOpenRegisterModal() {
    setIsRegisterModalOpen(true)
  }

  function handleCloseRegisterModal() {
    setIsRegisterModalOpen(false)
  }


  return (
    <div className="App">
      <Global styles={GlobalStyles} />

      {!user &&
        <>
          <LoginHeader
            setUser={setUser}
            onOpenLoginModal={handleOpenLoginModal}
            onOpenRegisterModal={handleOpenRegisterModal}
          />
          <div>
            <h1 style={{ textAlign: 'center' }}>Welcome to DtMoney</h1>
          </div>
        </>

      }

      {user &&
        <>
          <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
          <Dashboard />
        </>
      }

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onRequestClose={handleCloseLoginModal}
      />

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onRequestClose={handleCloseRegisterModal}
      />

    </div>
  );
}


