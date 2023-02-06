import "./App.css";
import Input from "./components/Input";
import { useState } from "react";
import Output from "./components/Output";
import translate from "./services/translate";

function App() {
  const [value, setValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    translate(value).then((result) => setOutputValue(result));
    setValue("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-box">
          <span className="logo">纹</span>
          <span>
            <h1>LOGOGRAM TATOO!</h1>
          </span>
          <span className="logo">身</span>
        </div>
      </header>
      <main>
        <Input value={value} onChange={setValue} onSubmit={handleSubmit} />
        <Output value={outputValue} />
      </main>
    </div>
  );
}

export default App;
