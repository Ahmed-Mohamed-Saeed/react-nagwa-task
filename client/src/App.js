import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Quiz from "./components/Quiz";
import Exam from "./components/Exam";
import { useState } from "react";
import Rank from "./components/Rank";
import MyScores from "./components/MyScores";

function App() {
  //a score function which will only be pobulated if the user answered correctly //
  const [score, setScore] = useState([]);
  //the reset function will be called if the user got into the exam or home page after attempting the exam
  //to avoid any unnecessary bugs ///
  const reset = () => {
    score.length > 0 && setScore([]);
  };
  //update score FN //
  const changeScore = () => {
    setScore((prev) => [...prev, true]);
  };

  return (
    <div className="App">
      <Router>
        <header className="header">
          {/* the logo is the redirect to Home page */}
          <Link className="link" to="/">
            <h1 className="nagwa">Nagwa Task</h1>
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<Quiz reset={reset} />} />
          <Route path="/rank" element={<Rank score={score} />} />
          <Route path="/my-scores" element={<MyScores />} />
          <Route
            path="/exam"
            element={
              <Exam handleScores={changeScore} score={score} reset={reset} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
