import React from "react";

const Question = ({ question, selected, handleSelect }) => {
  return (
    <div className="question">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(option)}
            style={{
              backgroundColor: selected
                ? option === question.answer
                  ? "green"
                  : option === selected
                    ? "red"
                    : ""
                : ""
            }}
            disabled={!!selected}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
