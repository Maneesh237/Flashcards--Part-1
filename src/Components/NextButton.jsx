function NextButton({ nextQuestion, isNextQuestion }) {
  return (
    <>
      <div>
        <button onClick={nextQuestion}>Next Question</button>
      </div>
    </>
  );
}
export default NextButton;
