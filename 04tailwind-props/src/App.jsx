// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  let arr = [1,2,3,4];
  let obj = {
    name:"sameer",
    uni:"uu"
  }
  return (
    <>
      <div className="bg-white text-black text-xl  mb-5 border rounded-md p-2 ">
        Learning Tailwind and Props
      </div>
      <Card username={"sameer"} btnText={"Visit me"}/>
      <Card username={"David"} />
    </>
  );
}

export default App;
