import { Global } from "@emotion/react";
import { useState } from "react";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Header } from "./components/Header/Header";
import { LoginHeader } from "./components/LoginHeader/LoginHeader";
import { GlobalStyles } from "./styles/global";

export function App() {
  const [user, setUser] = useState(false)

  return (
    <div className="App">
      <Global styles={GlobalStyles} />

      {!user &&
          <LoginHeader/>
      }

      {user &&
        <>
          <Header />
          <Dashboard />
        </>
      }

    </div>
  );
}


