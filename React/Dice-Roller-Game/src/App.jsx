import React from "react";
import Home from "./components/Home";
import GamePlay from "./components/GamePlay";
import { useState } from "react";

const App = () => {
  const [isGameStarted, setisGameStarted] = useState(false);

  const togglePlay = () => {
    setisGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? (
         <div className="bg-slate-200 h-screen w-full">
          <GamePlay />
        </div>
      ) : (
        <div className="bg-slate-200 h-screen w-full flex items-center ">
          <Home toggle = {togglePlay}/>
        </div>
      )}
    </>
  );
};

export default App;
