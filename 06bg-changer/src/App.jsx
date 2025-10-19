import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState("lightPink")

  function changeColor(newColor){
    setColor(newColor)

  }

  return (
    <>
    <div className='w-screen h-screen' style={{backgroundColor:color}}>
      <div className='fixed bottom-5 inset-x-0 flex flex-wrap gap-5 p-2 rounded-4xl w-3 bg-white'>
        <button onClick={() => setColor("red")} className='px-4 py-2 shadow-lg  rounded-4xl outline-0 border-none bg-red-500 cursor-pointer'>Red</button>
        <button onClick={() => setColor("green")} className='px-4 py-2 shadow-lg cursor-pointer rounded-4xl outline-0 border-none bg-green-500'>Green</button>
        <button onClick={() => setColor("blue")} className='px-4 py-2 shadow-lg cursor-pointer rounded-4xl outline-0 border-none bg-blue-500'>Blue</button>
        <button onClick={() => setColor("yellow")} className='px-4 py-2 shadow-lg  cursor-pointer rounded-4xl outline-0 border-none bg-yellow-500'>Yellow</button>
        <button onClick={() => setColor("purple")} className='px-4 py-2 shadow-lg cursor-pointer rounded-4xl outline-0 border-none bg-purple-500'>Purple</button>
        <button onClick={() => setColor("black")} className='px-4 py-2 shadow-lg cursor-pointer rounded-4xl outline-0 border-none bg-black'>Black</button>
        <button onClick={() => setColor("teal")} className='px-4 py-2 shadow-lg cursor-pointer rounded-4xl outline-0 border-none bg-teal-500'>Teal</button>
        <button onClick={() => setColor("white")} className='px-4 py-2 shadow-lg cursor-pointer rounded-4xl outline-0 border-none bg-white text-black'>White</button>
      </div>
    </div>

    </>
  )
}

export default App
