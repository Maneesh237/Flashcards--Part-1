function Card({
  color,
  question,
  answer,
  toggleAnswer,
  showAnswer,
  isFlipped,
}) {
  return (
    <>
      <div
        className={`card ${isFlipped ? "flipped" : ""}`}
        onClick={toggleAnswer}
        style={{ backgroundColor: color }}
      >
        <div className="front">{!showAnswer && <h2>{question}</h2>}</div>
        <div className="back">{showAnswer && <h2>{answer}</h2>}</div>
      </div>
    </>
  );
}

export default Card;
