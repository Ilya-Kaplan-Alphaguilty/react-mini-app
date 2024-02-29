import logo from "./logo.svg";
import "./App.css";
import { useInitData } from "@vkruglikov/react-telegram-web-app";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function App() {
  const [initDataUnsafe, initData] = useInitData();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    console.log("initDataUnsafe", initDataUnsafe);
    console.log("initData", initData);
  }, [initData, initDataUnsafe]);

  useEffect(() => {
    console.log(searchParams.get("ref"));
  }, [searchParams]);

  console.log("initDataUnsafe, initData", window.Telegram.WebApp);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <h1>Init data unsafe</h1>
        <button
          onClick={() => {
            navigator.clipboard.writeText(JSON.stringify(initDataUnsafe));
          }}
        >
          Copy init data unsafe
        </button>

        <h1>Init data</h1>
        <button
          onClick={() => {
            navigator.clipboard.writeText(JSON.stringify(initData));
          }}
        >
          Copy init data
        </button>

        <h1>Search params</h1>
        <h2>{searchParams.get("ref")}</h2>

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
