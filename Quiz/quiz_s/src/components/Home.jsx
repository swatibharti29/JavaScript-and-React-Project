import React from "react";
import { quizzes } from "../data/quizData.jsx"; 

const Home = ({ startQuiz, goProfile }) => {
  return (
    <div className="home">
      <h1>React Quiz</h1>
      {quizzes.map((quiz) => (
        <button key={quiz.id} onClick={() => startQuiz(quiz.id)}>{quiz.title}</button>
      ))}
      <br />
      <button onClick={goProfile}>Profile</button>
    </div>
  );
};

export default Home;
