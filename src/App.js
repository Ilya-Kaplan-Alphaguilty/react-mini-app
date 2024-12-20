import "./App.css";

import {
  BackButton,
  useInitData,
  useReadTextFromClipboard,
  useWebApp,
} from "@vkruglikov/react-telegram-web-app";
import { useEffect, useState } from "react";

import GoogleLogin from "./Google";
import logo from "./logo.svg";
import { useElementSize } from "./useElementSize";
import { useSearchParams } from "react-router-dom";

function App() {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");

  const [initDataUnsafe, initData] = useInitData();
  const [searchParams] = useSearchParams();
  const webApp = useWebApp();

  const readText = useReadTextFromClipboard();

  const { setRef, size } = useElementSize();

  useEffect(() => {
    console.log("initDataUnsafe", initDataUnsafe);
    console.log("initData", initData);
  }, [initData, initDataUnsafe]);

  useEffect(() => {
    console.log(searchParams.get("ref"));
  }, [searchParams]);

  console.log("initDataUnsafe, initData", window.Telegram.WebApp);

  const tg = window.Telegram.WebApp;
  tg.expand(); // Optional: Expand the web app to full view

  // Function to trigger the invoice
  function openInvoice1() {
    try {
      console.log("openInvoice 1");
      // webApp.openInvoice("https://t.me/$Z1EmSSuyOEp1CwAApoHTu7q-6nw");

      webApp.openInvoice("https://t.me/$oBNUcCuyOEp3CwAA58Q9v6bFs94");
    } catch (error) {
      console.error("Error opening invoice:", error);
    }
  }

  // Listen for the "invoice_closed" event
  tg.onEvent("invoice_closed", (eventData) => {
    console.log("Invoice closed event data:", eventData);

    // Additional logic when the invoice is closed
    if (eventData?.status === "paid") {
      alert("Thank you for your payment!");
    } else {
      alert("Payment was not completed.");
    }
  });

  return (
    <div className="App" ref={setRef}>
      {/* <button onClick={() => window.open("https://www.google.com", "_self")}>
        test
      </button> */}

      <GoogleLogin />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <a href="https://t.me/privax_test_bot/test">test</a>
        </p>

        <BackButton onClick={() => console.log("here")} />

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

        <h1>Size</h1>
        <p>Width: {size.width}</p>
        <p>Height: {size.height}</p>

        <button onClick={() => navigator.share({ url: "https://google.com" })}>
          test
        </button>

        <button onClick={openInvoice1}>Test payment 1</button>

        <button
          onClick={() =>
            readText().then((value) => {
              console.log(value);
              setText(value);

              navigator.clipboard.readText().then((text) => {
                console.log("Clipboard text", text);
                setText1(text);
              });
            })
          }
        >
          Read text
        </button>

        <h1>Clipboard text</h1>
        <p>{text}</p>
        <p>{text1}</p>

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corporis
          officia quas eius, qui unde vero? Provident soluta unde cum temporibus
          consequuntur nemo ipsam, eveniet vel error corrupti officiis rem
          asperiores? Neque fuga facilis, quae unde delectus maxime voluptatibus
          voluptatem vel deserunt aspernatur repudiandae amet suscipit nemo quia
          officiis soluta nam velit, a nihil aperiam fugit minus ullam? Iusto
          delectus, autem est dolor numquam suscipit nisi illo vero totam
          similique asperiores, velit possimus fugiat exercitationem facere
          earum aliquid accusamus. Vitae sed nemo, consequatur laudantium,
          quaerat similique architecto asperiores debitis odit neque laboriosam
          velit accusamus quia aliquid officia sapiente libero provident magni
          tempora maiores itaque ratione perferendis. Omnis hic officia placeat
          perspiciatis consectetur laboriosam quia ex earum facere, repudiandae
          enim quos possimus ullam aliquam ipsam. Earum magni laborum modi
          recusandae ex asperiores sint fuga sequi et quas praesentium incidunt
          id dolore neque pariatur accusantium veritatis, error unde excepturi
          iste dolorum? Porro quae laborum quia ullam, officia labore molestias
          rem quo, maiores ratione corporis excepturi voluptate ab minus quidem
          minima amet placeat ipsa ducimus illum, illo aspernatur maxime
          adipisci? Sit iste qui pariatur ipsum, error sequi eos corrupti
          voluptatem alias veritatis. Nam ab repellendus quod sapiente eum ad
          expedita quo illo inventore consequuntur repudiandae illum reiciendis
          neque adipisci soluta veritatis aut iusto, amet reprehenderit
          voluptate dolores? Atque quia illum quibusdam recusandae? Architecto
          cum reprehenderit molestias ipsum incidunt eligendi quos cupiditate
          minus temporibus voluptatem? Dolore pariatur nesciunt, distinctio
          nostrum rerum assumenda error amet incidunt iusto! Cumque,
          reprehenderit ullam iure soluta temporibus minus odit dolorem possimus
          unde iusto illo, corrupti laudantium in expedita quisquam deserunt.
          Est earum deserunt dolorum exercitationem sunt tempora expedita, iure,
          dignissimos nobis, doloribus eveniet quisquam? Voluptatum, dolores!
          Odio enim natus aperiam vero exercitationem totam quos repudiandae
          numquam nemo perferendis nesciunt id fuga maxime recusandae voluptates
          quis, consectetur iusto ad nihil. Eaque obcaecati accusamus velit
          ipsa, magnam praesentium assumenda voluptatem earum, excepturi nobis,
          vitae pariatur quae aliquid odio? Esse, accusantium eius distinctio
          quibusdam debitis unde dolores velit earum consequatur est dignissimos
          pariatur exercitationem aperiam deserunt, recusandae molestiae ea
          dolore ut vero obcaecati odio nihil. Alias nulla, et laborum beatae
          consectetur dolorum? Pariatur odit possimus molestias qui dolore ad
          veniam quaerat amet repellendus. Cum reprehenderit illo sunt odit quod
          rem quasi repellendus tenetur! Nam quam et dolorum non temporibus iste
          praesentium ducimus voluptate, mollitia inventore obcaecati excepturi
          tenetur provident assumenda laborum sunt rem repellendus dolor!
          Veritatis voluptatibus sint dolore, cupiditate consectetur animi esse
          eveniet eos placeat exercitationem quaerat, libero excepturi, autem
          atque labore ipsum accusamus reprehenderit sit nam ipsa! Architecto
          numquam officiis corporis officia eveniet vero libero veritatis nulla
          sit quaerat veniam itaque natus similique distinctio molestiae, saepe
          porro alias? Sed fugit facere, iusto nam et, quos harum vitae ipsum
          accusantium tempora vel consequuntur similique maiores ut ducimus
          cupiditate ullam cum eaque asperiores officiis ad nobis quibusdam.
          Consequuntur enim animi, reiciendis ipsa voluptates, deleniti a sed
          aliquam ab laboriosam inventore minima possimus sit accusamus? Aut
          animi enim perspiciatis excepturi adipisci provident iste quam quia
          repellat, inventore harum asperiores placeat, repellendus praesentium,
          aliquid consequatur delectus illum fugiat? In maxime at obcaecati
          error ipsam blanditiis, repudiandae non id, optio voluptatum et modi
          qui tempore consequatur numquam aliquid magnam consequuntur vitae
          sequi dolorum laboriosam ab commodi magni eius! Mollitia aliquam magni
          enim, hic corrupti quas aliquid recusandae consequatur, sit nobis
          blanditiis ad doloremque nam molestias expedita pariatur, nesciunt
          exercitationem rerum cumque ipsam culpa officia quo consequuntur.
          Repudiandae, minus doloribus vitae alias quos repellendus excepturi?
          Quo dolore, impedit nisi eveniet maxime atque eius sit quisquam qui,
          similique repellat sint suscipit! Consectetur cumque veritatis
          asperiores. Necessitatibus impedit vel sapiente, tempora, autem
          possimus fugiat deserunt voluptatem placeat quos earum! Vel eos
          numquam minus quia, necessitatibus quaerat alias veritatis beatae
          atque assumenda sequi et doloribus autem distinctio quidem totam,
          dolores harum, omnis odit consequuntur possimus vitae ut provident
          aliquid. Voluptatibus libero ipsa amet adipisci nesciunt reprehenderit
          obcaecati ad maxime perspiciatis, quo quis mollitia odit? Error neque
          iste ad atque provident rem natus odit facere ullam autem tenetur
          voluptate recusandae hic libero, cum non enim. Impedit tempore non
          officiis cum quia exercitationem animi incidunt explicabo, repudiandae
          velit assumenda, recusandae aliquam dignissimos veritatis iste
          voluptatum debitis suscipit voluptates! Explicabo tempore inventore,
          quaerat, fugit autem excepturi dicta modi neque ipsum a dignissimos,
          quos cum sed ab voluptate. Explicabo consequuntur voluptatum
          asperiores magni delectus? Officia id dignissimos odit qui modi
          nostrum natus asperiores, consequuntur harum pariatur aliquam quo
          deserunt quidem praesentium magnam quaerat doloribus. Fugit aut vitae
          expedita dolorum. Dolores quo architecto quae neque, incidunt quos
          quis illum mollitia animi. Enim, fugit similique? Reprehenderit vero
          quisquam nobis harum nulla nam voluptas laborum, esse velit
          praesentium. Placeat aspernatur dolores recusandae reprehenderit illum
          cumque quibusdam, laborum modi odio tenetur, labore nemo, non dolorum
          quisquam tempore officia rem. Maiores non rem accusamus sunt
          doloremque perspiciatis dolorum velit ad repellendus natus mollitia
          minus nisi fugiat nam, unde quas, commodi delectus voluptate autem!
          Adipisci quibusdam, quidem vitae cum et ipsum fugit inventore quod id
          consectetur! Velit nisi laborum eveniet voluptatum eaque doloribus
          sequi inventore dolor veniam, earum dolorum, quam repellendus. Ex sunt
          enim voluptatum repellendus quae qui obcaecati sed quibusdam quod
          magni est, repudiandae sit voluptatibus quos, ipsam tenetur quia minus
          mollitia saepe eligendi officiis. Voluptatibus atque officiis
          consectetur id dolore odit! Autem ut dolorum ducimus error facere
          temporibus accusamus culpa porro magni iste esse animi aperiam quas
          sunt sequi pariatur, iusto nihil ipsum! Eum ad beatae nisi ratione
          perferendis alias accusantium dolorem iusto ut est perspiciatis et,
          quo dolor atque pariatur veritatis ab tenetur quod doloremque in
          dignissimos? In voluptate consectetur temporibus quia eos aliquid
          perspiciatis dolorum dicta rerum ipsum error deleniti natus sed minima
          quibusdam nihil doloribus sequi consequatur, magni fugiat fuga totam
          ea esse! Mollitia quibusdam doloribus fugit laborum eligendi, ex
          possimus ipsa. Amet temporibus, tempora sequi perferendis saepe
          officiis eaque maiores et animi, expedita qui excepturi? Mollitia,
          ducimus blanditiis! Ipsa distinctio adipisci debitis illo fugiat iste
          eum dignissimos autem repudiandae ab. Deleniti hic fugiat quas
          architecto, corrupti distinctio dolores rem ipsum amet totam odit
          quisquam? Dolores expedita rem omnis at. Temporibus odio sunt animi.
        </div>

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
