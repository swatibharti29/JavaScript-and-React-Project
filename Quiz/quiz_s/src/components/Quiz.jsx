import React, { useState, useEffect } from "react";
import { quizzes } from "../data/quizData.jsx"; 
import Question from "./Question";

const Quiz = ({ quizId, finishQuiz, cancelQuiz }) => {
  const quiz = quizzes.find(q => q.id === quizId);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) {
      handleNext();
      return;
    }
    const interval = setInterval(() => setTimer(t => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleSelect = (option) => setSelected(option);

  const handleNext = () => {
    if (selected === quiz.questions[current].answer) setScore(prev => prev + 1);
    setSelected("");
    if (current + 1 < quiz.questions.length) {
      setCurrent(current + 1);
      setTimer(30);
    } else {
      finishQuiz(quiz.id, score + (selected === quiz.questions[current].answer ? 1 : 0));
    }
  };

  return (
    <div className="quiz">
      <Question question={quiz.questions[current]} selected={selected} handleSelect={handleSelect} />
      <p>Time Left: {timer}s</p>
      <button onClick={handleNext} disabled={!selected}>Next</button>
      <button onClick={cancelQuiz}>Cancel</button>
      <p>Score: {score}</p>
    </div>
  );
};

export default Quiz;
