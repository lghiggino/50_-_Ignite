import { Global } from "@emotion/react";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <div className="App">
      <Global styles={GlobalStyles} />
      <h1>Hello World</h1>
    </div>
  );
}


