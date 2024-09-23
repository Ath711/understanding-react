import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 0;

  const addValue = () => {
    if (counter < 20) setCounter(++counter);
  };

  const removeValue = () => {
    if (counter > 0) setCounter(--counter);
  };

  return (
    <>
      <h1> chai </h1>
      <h2> counter value: {counter}</h2>
      <button onClick={addValue}>+ {counter}</button> <br />
      <p />
      <button onClick={removeValue}>- {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
