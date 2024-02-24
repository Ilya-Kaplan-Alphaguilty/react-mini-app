import logo from "./logo.svg";
import "./App.css";
import { useInitData } from "@vkruglikov/react-telegram-web-app";
import { useEffect } from "react";

function App() {
  const [initDataUnsafe, initData] = useInitData();

  useEffect(() => {
    console.log("initDataUnsafe", initDataUnsafe);
    console.log("initData", initData);
  }, [initData, initDataUnsafe]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <h1>Init data unsafe</h1>
        <p>{JSON.stringify(initDataUnsafe)}</p>

        <h1>Init data</h1>
        <p>{JSON.stringify(initData)}</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
