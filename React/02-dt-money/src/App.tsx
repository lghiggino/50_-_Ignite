import { Global } from "@emotion/react";
import { Header } from "./components/Header/Header";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <div className="App">
      <Global styles={GlobalStyles} />
      <Header />
    </div>
  );
}


