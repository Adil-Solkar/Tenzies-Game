import { useState } from "react";
import Dice from "./Components/Dice";
import DiceRollButton from "./Components/DiceRollButton";
import Die from "./Components/Die";
import Confetti from 'react-confetti'
import { generateAllNewDice } from "./utils/generateAllNewDice";
function App() {
  const [dice, setDice] = useState(generateAllNewDice);

  // if every die isHeld is true and every die is of same value then log game finish
  const gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)

  // if die is clicked change its bg to green and isHeld property to true
  function hold(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  // if die isHeld is true then donot change it and if game is won the generate newDice
  function handleDiceRoll() {
    gameWon ? setDice(generateAllNewDice) :
    setDice((prevRoll) =>
      prevRoll.map((die) => {
        return die.isHeld
          ? die
          : { ...die, value: Math.floor(Math.random() * 6 + 1) };
      })
    );
  }

  return (
    <>
      {gameWon && <Confetti />}
      <div className="container">
        <h2>Tenzies</h2>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <Dice>
          {dice.length
            ? dice.map(({ value, isHeld, id }) => (
                <Die
                  key={id}
                  value={value}
                  isHeld={isHeld}
                  hold={() => hold(id)}
                />
              ))
            : null}
        </Dice>
        <DiceRollButton handleClick={handleDiceRoll}>
          {gameWon ? "New Game" : "Roll"}
        </DiceRollButton>
      </div>
    </>
  );
}

export default App;
