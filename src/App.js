import logo from "./logo.svg";
import "./App.css";
import { useInitData } from "@vkruglikov/react-telegram-web-app";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useElementSize } from "./useElementSize";

function App() {
  const [initDataUnsafe, initData] = useInitData();
  const [searchParams] = useSearchParams();

  const { setRef, size } = useElementSize();

  useEffect(() => {
    console.log("initDataUnsafe", initDataUnsafe);
    console.log("initData", initData);
  }, [initData, initDataUnsafe]);

  useEffect(() => {
    console.log(searchParams.get("ref"));
  }, [searchParams]);

  console.log("initDataUnsafe, initData", window.Telegram.WebApp);

  return (
    <div className="App" ref={setRef}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* <h1>Init data unsafe</h1>
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
        </button> */}

        <h1>Size</h1>
        <p>Width: {size.width}</p>
        <p>Height: {size.height}</p>

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
