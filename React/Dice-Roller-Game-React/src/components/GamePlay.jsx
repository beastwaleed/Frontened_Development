import React from "react";
import { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";

const GamePlay = () => {
  const [selectedNum, setselectedNum] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [Score, setScore] = useState(0);
  const [Isrules, setIsrules] = useState(false);
  const [RuleBtn, setRuleBtn] = useState(true);

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  function rollDice() {
    if (!selectedNum) {
      alert("Please select a number first!");
      return;
    }

    const random = randomNumber(1, 7);
    setcurrentDice(random);

    if (selectedNum === random) {
      setScore((prev) => prev + random);
    } else {
      setScore((prev) => prev - 2);
    }

    setselectedNum(undefined);
  }

  function reset() {
    setScore(0);
    setselectedNum(undefined);
  }

  const showRules = `Show Rules`;
  const HideRules = `Hide Rules`;

//   const btnToggle = () => {
//     setRuleBtn((prev)=>!prev);
//   };

  const ToggleRules = () => {
    setIsrules((prev) => !prev);
    setRuleBtn((prev)=>!prev);
  };

  return (
    <div className="h-screen w-full bg-slate-200">
      <div className="topBar flex items-center justify-between px-10">
        <TotalScore CurrScore={Score} />

        <NumberSelector
          selectedNum={selectedNum}
          setselectedNum={setselectedNum}
        />
      </div>

      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btn flex flex-col justify-center items-center gap-2 py-4">
        <button
          onClick={reset}
          className="border border-gray-800 px-4 py-2 bg-white"
        >
          Reset Score
        </button>
        <button
          onClick={ToggleRules}
          className="border border-gray-800 px-4 py-2 bg-yellow-300"
        >
          {RuleBtn?"Show Rules":"Hide Rules"}
        </button>
      </div>

      {Isrules && (
        <div className="rules-wrapper bg-slate-200 flex justify-center">
          <div className="rules h-40 flex flex-col items-center justify-center bg-yellow-500 w-1/2">
            <h2 className="font-bold text-2xl">How to play dice game</h2>
            <ul>
              <li>Select any number</li>
              <li>Click on dice image to Roll the dice</li>
              <li>
                If the number selected and the number on the dice are same then
                you will get point same as dice
              </li>
              <li>If you get wrong guess then 2 points will be deducted</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePlay;
