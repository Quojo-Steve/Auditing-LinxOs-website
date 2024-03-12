import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CiCircleAlert } from "react-icons/ci";

const ChecklistSummary = ({ questions }) => {
  const answers = JSON.parse(localStorage.getItem("answers"));
  const navigate = useNavigate();

  const handleItemClick = (index) => {
    localStorage.setItem("currentQuestionIndex", index);
    navigate("/checklist");
  };

  return (
    <div className="container mx-auto p-4 background">
      {questions.map((question, index) => (
        <div
          key={index}
          className={`p-4 my-2 ${
            answers[index] !== null
              ? answers[index]
                ? "bg-green-300"
                : "bg-red-300"
              : "bg-gray-600"
          } rounded-md shadow shadow-gray-400 cursor-pointer`}
          onClick={() => handleItemClick(index)}
        >
          <div className="flex justify-start items-baseline gap-2">
            <span>
              {answers[index] !== null ? (
                answers[index] ? (
                  <FaCheckCircle color="green" size={20} />
                ) : (
                  <FaTimesCircle color="red" size={20} />
                )
              ) : (
                <CiCircleAlert color="white" size={20} />
              )}
            </span>
            <h2 className="text-lg font-bold mb-2">{question.question}</h2>
          </div>
        </div>
      ))}
      <span className="mt-2 flex justify-center items-center">
        <Link
          to={"/finalpage"}
          className="bg-blue-300 w-1/2 p-3 text-center text-blue-700 mt-2 font-bold rounded-sm shadow shadow-blue-300"
        >
          Finish
        </Link>
      </span>
    </div>
  );
};

export default ChecklistSummary;
