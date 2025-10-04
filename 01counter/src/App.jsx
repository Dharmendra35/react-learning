import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  /*use state us used for ui updataion -> syntax [variable , fuction] = useState(default val of variable)
  function is responsible for the updation of that varibale */
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter + 1 <= 20) counter = counter + 1;
    setCounter(counter);
  };

  const removeValue = () => {
    if (counter - 1 >= 10) counter = counter - 1;
    setCounter(counter);
  };
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value is {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br></br>
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
