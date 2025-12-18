function DiceRollButton({children, handleClick}) {
  return (
    <div className="roll-dice-btn">
        <button onClick={handleClick}>
            {children}
        </button>
    </div>
  )
}

export default DiceRollButton