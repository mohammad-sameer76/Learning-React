import { useState } from "react";
import "./App.css";

function App() {

  let [counterValue, setCounterValue] = useState(1);

  let countInc = () => {
    counterValue++;
    setCounterValue(counterValue);
  };
  let countDec = () => {
    if (counterValue >  0)   counterValue--;
    setCounterValue(counterValue);
  };
  
  return (
    <>
      <h1>Counter: {counterValue}</h1>
      <button onClick={countInc}>Increase {counterValue}</button>

      <button onClick={countDec}>Decrease {counterValue}</button>
      <p>Counter is set to  {counterValue}</p>
    </>
  );
}

export default App;
