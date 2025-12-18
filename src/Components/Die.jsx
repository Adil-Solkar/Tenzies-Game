function Die({ value, isHeld, hold }) {
  const bgColor = { backgroundColor: isHeld ? "#59E391" : "" };

  return (
    <button onClick={hold} style={bgColor} className="die">
      {value}
    </button>
  );
}

export default Die;
