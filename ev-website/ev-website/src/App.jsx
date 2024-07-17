import React, { useState } from "react";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  let heroData = [
    {text1: "Dive into", text2: "What you love"},
    {text1: "Indulge", text2: "Your passions"},
    {text1: "Give in to", text2: "Your passions"}
]
const [heroCount, setHeroCount] = useState(1);
const [playStatus, setPlayStatus] = useState(false);
  return (
    <div>
      <Background heroCount={heroCount} playStatus={playStatus} />
      <Navbar />
    </div>
  );
};

export default App;
