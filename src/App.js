import React from "react";
import Die from "./Die";
import './App.css';

export default function App() {

  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice (){
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
  }

  const diceElements = dice.map( die => <Die value={die} /> )

  return (
    <main className="App">
      <div className="dice-container">
        {diceElements}

      </div>
    </main>
  );
}


