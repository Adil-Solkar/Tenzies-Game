import Dice from "./Components/Dice"
import DiceRollButton from "./Components/DiceRollButton"
import Die from "./Components/Die"
function App() {
  return (
    <>
      <div className="container">
        <h2>Tenzies</h2>
        <p>
          Roll until all dice are the same.
          Click each die to freeze it at its current value between rolls.
        </p>
        <Dice>
          <Die value={1}/>
          <Die value={1}/>
          <Die value={1}/>
          <Die value={1}/>
          <Die value={1}/>
          <Die value={1}/>
          <Die value={1}/>
          <Die value={1}/>
          <Die value={1}/>
          <Die value={1}/>
        </Dice>     
        <DiceRollButton>
          Roll
        </DiceRollButton>
      </div>
    </>
  )
}

export default App
