import { Global } from "@emotion/react";
import { useState, Suspense, FormEvent, useEffect } from "react";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Header } from "./components/Header/Header";
import { LoginHeader } from "./components/LoginHeader/LoginHeader";
import { GlobalStyles } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal/NewTransactionModal";
import { LoginModal } from "./components/LoginModal/LoginModal";
import { RegisterModal } from "./components/RegisterModal/RegisterModal";
import axios from "axios";
import { isBigInt64Array } from "util/types";

export function App() {
  const [user, setUser] = useState<null | string>(null)
  const [error, setError] = useState<string>("")
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const localToken = localStorage.getItem("@userToken")
    // descobrir uma maneira de passar o expiry do token e comparar de alguma forma
    if (!localToken) {
      return
    }
    setUser(localToken)
  }, [])



  useEffect(() => {

    async function getUserTransactions() {

      const parsedUser = JSON.parse(user as string)
      const userId = parsedUser.userForToken.id

      const axiosConfig = {
        headers: { Authorization: parsedUser.token },
      }

      // const config = {
      //   method: 'get',
      //   url: `http://localhost:3333/transaction/${userId}`,
      //   headers: {
      //     'Authorization': `Bearer ${parsedUser.token}`
      //   }
      // };

      // axios(config)
      //   .then(function (response: any) {
      //     console.log(JSON.stringify(response.data));
      //   })
      //   .catch(function (error: any) {
      //     console.log(error);
      //   });

      const { data } = await axios.get(`http://localhost:3333/transaction/${userId}`, axiosConfig)
      return data
    }

    const data = getUserTransactions()
    if (!data) {
      return
    } else {
      console.log("DATA", data)
      setTransactions(data as any)
      console.log("TRANSACTIONS", transactions)
    }

  }, [user])

  // useEffect(() => {
  // if (!user) {
  //   return
  // }
  // const getUserData = async () => {
  //   console.log(user)
  //   const parsedUser = JSON.parse(user as string)
  //   const userId = parsedUser.userForToken.id

  //   const token = `bearer ${parsedUser.token}`

  //   const config = {
  //     headers: { Authorization: token },
  //   }

  //   const { data } = await axios.get(
  //     `http://localhost:3000/transaction/${userId}`,
  //     config
  //   )

  //   if (!data) {
  //     return []
  //   }
  //   if (data) {
  //     setTransactions(data)
  //     console.log(transactions)
  //   }
  // }

  // getUserData().catch(error => {
  //   console.error(error)
  // })
  // }, [user])



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
        <Suspense
          fallback={<h1>loading....</h1>}
        >
          <LoginHeader
            setUser={setUser}
            onOpenLoginModal={handleOpenLoginModal}
            onOpenRegisterModal={handleOpenRegisterModal}
          />
          <div>
            <h1 style={{ textAlign: 'center' }}>Welcome to DtMoney</h1>
          </div>
        </Suspense>

      }

      {user &&
        <Suspense
          fallback={<h1>loading....</h1>}
        >
          <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
          <Dashboard />
        </Suspense>
      }

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onRequestClose={handleCloseLoginModal}
        onChangeUser={setUser}
        onError={setError}
      />

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onRequestClose={handleCloseRegisterModal}
      />

    </div>
  );
}



