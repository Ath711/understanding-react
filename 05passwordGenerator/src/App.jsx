import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setcharactersAllowed] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const copyPasswordToClipBoard = useCallback(() => {
    if (!buttonClicked) {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0, length);
      window.navigator.clipboard.writeText(password);
      setButtonClicked(true);
    } else alert("already copied");
  }, [buttonClicked, password]);

  //useCallBack hook memorizes function, and here if we give password instead of setPassword then it wil go in loop. we can also avoid that.
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (charactersAllowed) str += "!@#$%^&*()_+-=[]{}|;:'`~";
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass); // This will run whenever the dependencies change
    setButtonClicked(false);
  }, [length, numberAllowed, charactersAllowed, setPassword]); // possible dependencies then optimize the method

  //useEffect hook when page loads it calls, and if dependency is changed then it reloads
  useEffect(() => {
    passwordGenerator(); // This will run whenever the dependencies change
  }, [length, numberAllowed, charactersAllowed, passwordGenerator]); // Dependencies to control the effect

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-white text-center my-3"> Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef}
        ></input>
        <button
          onClick={copyPasswordToClipBoard}
          className={`outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ${
            buttonClicked ? "bg-green-500" : "bg-blue-700"
          }`}
        >
          {buttonClicked ? "Copied" : "Copy"}
        </button>
      </div>

      <div className="flex text-sm gap-x-4 py-2 ">
        <div className="flex items-center gap-x-2">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          ></input>
          <label>Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            default={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label>Numbers</label>
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            default={charactersAllowed}
            id="characterInput"
            onChange={() => {
              setcharactersAllowed((prev) => !prev);
            }}
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
