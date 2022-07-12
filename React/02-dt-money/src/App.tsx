import { useState, Suspense, useEffect } from "react";
import { Global } from "@emotion/react";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Header } from "./components/Header/Header";
import { LoginHeader } from "./components/LoginHeader/LoginHeader";
import { GlobalStyles } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal/NewTransactionModal";
import { LoginModal } from "./components/LoginModal/LoginModal";
import { RegisterModal } from "./components/RegisterModal/RegisterModal";
import { TransactionsProvider } from "./hooks/useTransactions";
import { UserProvider } from "./UserContext";

export type User = {
  token: string,
  userForToken: {
    email: string
    firstname: string
    id: string
    lastname: string
    phonenumber: string
  }
}

export type Transaction = {
  amount: number
  category: string
  createdAt: string
  id: string
  title: string
  type: "credit" | "withdraw"
  userId: string
}

export function App() {
  const [user, setUser] = useState<User>({
    token: "",
    userForToken: {
      email: "",
      firstname: "",
      id: "",
      lastname: "",
      phonenumber: "",
    }
  })

  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [error, setError] = useState<string>("")

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  useEffect(() => {
    const localToken = localStorage.getItem("@userToken")
    // descobrir uma maneira de passar o expiry do token e comparar de alguma forma
    if (!localToken) {
      return
    }
    const parsedLocalToken: User = JSON.parse(localToken)
    setUser(parsedLocalToken)
  }, [])

  function handleOpenModal(modalName: string) {
    if (modalName === 'newTransaction') {
      setIsNewTransactionModalOpen(true);
    }
    if (modalName === 'login') {
      setIsLoginModalOpen(true)
    }
    if (modalName === 'register') {
      setIsRegisterModalOpen(true)
    }
  }

  function handleCloseModal(modalName: string) {
    if (modalName === 'newTransaction') {
      setIsNewTransactionModalOpen(false);
    }
    if (modalName === 'login') {
      setIsLoginModalOpen(false)
    }
    if (modalName === 'register') {
      setIsRegisterModalOpen(false)
    }
  }

  return (
    <div className="App">

      <Global styles={GlobalStyles} />

      <UserProvider>
        {!user.token &&
          <Suspense
            fallback={<h1>loading....</h1>}
          >
            <LoginHeader
              setUser={setUser}
              onOpenLoginModal={() => { handleOpenModal('login') }}
              onOpenRegisterModal={() => { handleOpenModal('register') }}
            />
            <div>
              <h1 style={{ textAlign: 'center' }}>Welcome to DtMoney</h1>
            </div>
          </Suspense>
        }

        <TransactionsProvider user={user}>
          {user.token && transactions &&
            <Suspense
              fallback={<h1>loading....</h1>}
            >
              <Header onOpenNewTransactionModal={() => { handleOpenModal('newTransaction') }} />
              <Dashboard />
            </Suspense>
          }
        </TransactionsProvider>


        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={() => { handleCloseModal('newTransactions') }}
        />

        <LoginModal
          isOpen={isLoginModalOpen}
          onRequestClose={() => { handleCloseModal('login') }}
          onChangeUser={setUser}
          onError={setError}
        />

        <RegisterModal
          isOpen={isRegisterModalOpen}
          onRequestClose={() => { handleCloseModal('register') }}
        />
      </UserProvider>
    </div>
  );
}



