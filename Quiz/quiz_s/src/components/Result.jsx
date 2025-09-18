import React from "react";

const Result = ({ quizTitle, score, total, restart }) => {
  return (
    <div className="result">
      <h2>{quizTitle} Completed!</h2>
      <p>Your Score: {score} / {total}</p>
      <button onClick={restart}>Back to Home</button>
    </div>
  );
};

export default Result;
