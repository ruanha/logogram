import "./App.css";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
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
        <Input value={value} onChange={setValue} />
      </main>
    </div>
  );
}

export default App;
