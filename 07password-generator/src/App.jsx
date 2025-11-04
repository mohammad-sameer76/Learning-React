import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersAllowed) str += "1234567890";
    if (charactersAllowed) str += "~`!@#$%^&*()_-+={}[]:;<>,.?/";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str[char];
    }
    setPassword(pass);
  }, [length, numbersAllowed, charactersAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, charactersAllowed, passwordGenerator]);

  const copyToclipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password);
  }, [password]);



  return (
    <>
      <div className="w-full max-w-max bg-gray-800  p-10 m-auto my-10 rounded-xl">
        <h1 className="mb-4 m-auto text-2xl  font-extrabold text-center leading-none tracking-tight text-gray-900 dark:text-white">
          Password Generator
        </h1>
        <div className="w-full rounded-2xl text-2xl flex mb-4  ">
          <input
            id="pass-field"
            type="text"
            readOnly
            ref={passwordRef}
            value={password}
            className=" bg-white text-green-600 w-md px-3 py-2 rounded-l-xl max-md:w-full"
          />
          <button
            onClick={copyToclipboard}
            className="cursor-pointer outline-0  bg-blue-600 text-white px-6 py-2 rounded-r-xl font-medium "
          >
            Copy
          </button>
        </div>

        <div className="w-full rounded-2xl text-2xl flex items-center">
          <input
            type="range"
            id="len"
            min={6}
            max={20}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            className=" bg-white  w-1/4 px-3 py-2 rounded-l-xl cursor-pointer "
          />
          <label
            className="ml-2 text-lg text-green-600 max-md:text-sm"
            htmlFor="len"
          >
            Length ({length})
          </label>

          <input
            type="checkbox"
            id="num"
            defaultChecked={numbersAllowed}
            className="size-5 ml-3"
            onChange={() => {
              setNumbersAllowed((prev) => !prev);
            }}
          />
          <label
            htmlFor="num"
            className="text-lg ml-1 text-green-600 max-md:text-sm"
          >
            Numbers
          </label>

          <input
            type="checkbox"
            id="char"
            defaultChecked={charactersAllowed}
            className="size-5 ml-3"
            onChange={() => {
              setCharactersAllowed((prev) => !prev);
            }}
          />
          <label
            htmlFor="char"
            className="text-lg ml-1 text-green-600 max-md:text-sm"
          >
            Characters
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
