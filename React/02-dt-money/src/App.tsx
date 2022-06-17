import { Global } from "@emotion/react";
import { useState } from "react";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Header } from "./components/Header/Header";
import { LoginHeader } from "./components/LoginHeader/LoginHeader";
import { GlobalStyles } from "./styles/global";

export function App() {
  const [user, setUser] = useState(false)
  const [userToken, setUserToken] = useState<string>("")

  if(user){
    const token = localStorage.getItem("@userToken")
    setUserToken(token as string)
  }

  return (
    <div className="App">
      <Global styles={GlobalStyles} />

      {!user &&
        <>
          <LoginHeader setUser={setUser} />
          <div>
            <h1 style={{textAlign: 'center'}}>Welcome to DtMoney</h1>
          </div>
        </>

      }

      {user &&
        <>
          <Header />
          <Dashboard userToken={userToken} />
        </>
      }

    </div>
  );
}


