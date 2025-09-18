import React, { useState } from "react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Profile from "./components/Profile";
import { quizzes } from "./data/quizData.jsx";  

const App = () => {
  const [page, setPage] = useState("home");
  const [currentQuizId, setCurrentQuizId] = useState(null);
  const [results, setResults] = useState([]);
  const [lastScore, setLastScore] = useState(0);

  const startQuiz = (id) => {
    setCurrentQuizId(id);
    setPage("quiz");
  };

  const finishQuiz = (quizId, score) => {
    const quiz = quizzes.find(q => q.id === quizId);
    setResults([...results, { quizTitle: quiz.title, score, total: quiz.questions.length }]);
    setLastScore(score);
    setPage("result");
  };

  const cancelQuiz = () => setPage("home");
  const restart = () => setPage("home");
  const goProfile = () => setPage("profile");
  const backHome = () => setPage("home");

  return (
    <div className="App">
  {page === "home" && <Home startQuiz={startQuiz} goProfile={goProfile} />}
  {page === "quiz" && <Quiz quizId={currentQuizId} finishQuiz={finishQuiz} cancelQuiz={cancelQuiz} />}
  {page === "result" && <Result quizTitle={quizzes.find(q => q.id === currentQuizId).title} score={lastScore} total={quizzes.find(q => q.id === currentQuizId).questions.length} restart={restart} />}
  {page === "profile" && <Profile results={results} backHome={backHome} />}
</div>

    
  );
};

export default App;
