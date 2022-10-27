import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import quiz from "../quiz.jpg";
import { updateFN } from "../features/userR";

function Quiz(props) {
  //reset the scores when the quiz is rendered
  props.reset();
  //add user updateFN to update the user State to get the name of the user
  const dispatch = useDispatch();
  const changeUserState = (e) => {
    dispatch(updateFN(e.target.value));
  };
  return (
    <section className="quiz">
      <div className="quiz-container">
        <img src={quiz} alt={"quiz"} />
      </div>

      <div className="student-info">
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" onChange={changeUserState} />
        </div>
        <div className="student-actions">
          <Link to="/exam" className="btn">
            Enter the Exam
          </Link>
          <Link to="my-scores" className="btn">
            Review
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Quiz;
