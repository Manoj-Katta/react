import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numAllowed, setNumAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let num = "0123456789";
    let pass = "";
    if (numAllowed) str += num;
    if (charAllowed) str += "/,.;)];{}";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numAllowed, passwordGenerator]);

  const passwordRef = useState(null);

  const copyToClipboard = () => {
    passwordRef.current?.select();
    navigator.clipboard.writeText(password);
  };


  return (
    <div className="w-full bg-gray-700 text-white flex-col h-80 p-4">
      <h1 className="text-orange-500 mb-4">Password Generator</h1>
      <input
        className="bg-gray-200 p-4 rounded-lg text-black w-full mb-2"
        value={password}
        readOnly
        placeholder="Password"
      ></input>
      <button className="border bg-orange-500 p-4 m-2 rounded-lg" onClick={copyToClipboard}>Copy</button>
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-2">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer mr-2"
            ref={passwordRef}
            onChange={(e) => setLength(e.target.value)}
          ></input>
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={charAllowed}
            id="charInput"
            className="cursor-pointer mr-2"
            onChange={() => setCharAllowed((prev) => !prev)}
          ></input>
          <label htmlFor="charInput">Characters Allowed</label>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={numAllowed}
            id="numInput"
            className="cursor-pointer mr-2"
            onChange={() => setNumAllowed((prev) => !prev)}
          ></input>
          <label htmlFor="numInput">Numbers Allowed</label>
        </div>
      </div>
    </div>
  );
}

export default App;
