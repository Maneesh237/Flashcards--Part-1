import { Fragment, useState } from "react";
import Card from "./Components/Card";
import Header from "./Components/Header";
import NextButton from "./Components/NextButton";
import "./App.css";

function App() {
  const resourcess = [
    {
      color: "transparent",
      question: "Start!",
      answer: "Press the next question to start the flashcards :)",
    },
    {
      color: "#e6e26fd9",
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces.",
    },
    {
      color: "#ea9177d9",
      question: "What is JSX?",
      answer: "A syntax extension for JavaScript.",
    },
    {
      color: "#a7eaaed9",
      question: "What is a component?",
      answer: "An independent, reusable piece of UI.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextQuestion = () => {
    setShowAnswer(false);
    setIsFlipped(false);
    if (currentIndex < resourcess.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(1);
    }
  };

  const [showAnswer, setShowAnswer] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleCard = () => {
    setShowAnswer(!showAnswer);
    setIsFlipped(!isFlipped);
  };

  const currentResource = resourcess[currentIndex];
  const isLastQuestion = currentIndex === resourcess.length - 1;
  return (
    <>
      <Header />
      <Card
        color={currentResource.color}
        question={currentResource.question}
        answer={currentResource.answer}
        toggleAnswer={toggleCard}
        showAnswer={showAnswer}
        isFlipped={isFlipped}
      />
      <NextButton nextQuestion={nextQuestion} isNextQuestion={isLastQuestion} />
    </>
  );
}

export default App;
