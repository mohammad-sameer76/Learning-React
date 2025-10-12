Q1-what will be the output ?
will the counter increase +1 +1 on click or it will increase +4 each time

function App() {

  let [counterValue, setCounterValue] = useState(1);

  let countInc = () => {
    
    setCounterValue(counterValue+1);
 
    setCounterValue(counterValue+1);
 
    setCounterValue(counterValue+1);
 
    setCounterValue(counterValue+1);
  };
  
  return (
    <>
      <h1>Counter: {counterValue}</h1>
      <button onClick={countInc}>Increase {counterValue}</button>

    </>
  );
}



    OUTPUUT - +1
Ans-
because same work is repeating so it will be executed only once 

so we use call back so that next one is executed only if first is completed


  let countInc = () => {
    // setCounterValue(counterValue+1);
    // setCounterValue(counterValue+1);
    // setCounterValue(counterValue+1);
    // setCounterValue(counterValue+1);
    setCounterValue(prevCount => prevCount+1);
    setCounterValue(prevCount => prevCount+1);
    
  };