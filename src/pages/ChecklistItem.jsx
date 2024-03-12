import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ChecklistItem = ({ questions }) => {
  const navigate = useNavigate();

  const storedIndex = localStorage.getItem("currentQuestionIndex");
  const initialIndex = storedIndex ? parseInt(storedIndex, 10) : 0;

  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState(initialIndex);

  const [answers, setAnswers] = useState(
    JSON.parse(localStorage.getItem("answers")) ||
      Array(questions.length).fill(null)
  );

  useEffect(() => {
    setCurrentQuestionIndex(initialIndex);
  }, [initialIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 1.5 } },
  };

  const containerVariants1 = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1.5, duration: 2.5 } },
  };

  const handleCheck = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
    localStorage.setItem("answers", JSON.stringify(newAnswers)); // Store answers in local storage
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate("/summary"); // Navigate to summary page when all questions are answered
    }
  };

  const goToEnd =()=>{
    navigate("/summary");
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <motion.div
      className="background flex flex-col items-center justify-center h-[100dvh] overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="overlay absolute top-0 w-full h-full"></div>
      <motion.div
        className="z-50 background2 rounded-lg p-3 m-2"
        variants={containerVariants1}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-justify italic mb-3 bg-blue-200 p-2 rounded-md text-blue-700 font-extrabold">
          {questions[currentQuestionIndex].title}
        </h2>
        <p className="text-justify font-bold mb-3">
          {questions[currentQuestionIndex].question}
        </p>
        <div className="flex justify-around items-center mb-4 w-full gap-3">
          <span
            className={`${
              answers[currentQuestionIndex] === true
                ? "bg-green-500"
                : "bg-green-300 hover:bg-green-500"
            } flex justify-center gap-2 items-center py-4 px-7 rounded-md font-bold cursor-pointer w-1/2`}
            onClick={() => handleCheck(currentQuestionIndex, true)}
          >
            <FaCheckCircle color="green" />
            <p>Tick</p>
          </span>
          <span
            className={`${
              answers[currentQuestionIndex] === false
                ? "bg-red-500"
                : "bg-red-300 hover:bg-red-500"
            } flex justify-center gap-2 items-center py-4 px-7 rounded-md font-bold cursor-pointer w-1/2`}
            onClick={() => handleCheck(currentQuestionIndex, false)}
          >
            <FaTimesCircle color="red" />
            <p>Cross</p>
          </span>
        </div>
        <p className="bg-blue-200 text-blue-900 flex flex-col rounded-md p-2 shadow italic shadow-blue-300 mb-4">
          <span className="border-b-[1px] border-b-blue-900">Hint:</span>
          {questions[currentQuestionIndex].hint}
        </p>
        <div className="flex justify-around items-end">
          <div
            className={`text-blue-900 italic w-fit font-bold cursor-pointer justify-center items-center bg-blue-300 p-2 rounded ${
              currentQuestionIndex === 0 ? "hidden" : "flex"
            } ${storedIndex > 0 ? "hidden" : "flex"} `}
            onClick={handlePrevious}
          >
            <FaAngleLeft color="blue" />
            Previous
          </div>
          <div
            className={`text-blue-900 w-fit font-bold cursor-pointer flex justify-center items-center bg-blue-300 p-2 rounded italic ${
              storedIndex > 0 ? "hidden" : "flex"
            } `}
            onClick={handleNext}
          >
            {currentQuestionIndex === questions.length - 1 ? "Done" : "Next"}
            <FaAngleRight color="blue" />
          </div>
          <div
            className={`text-blue-900 w-fit font-bold cursor-pointer justify-center items-center bg-blue-300 p-2 rounded italic ${
              storedIndex > 0 ? "flex" : "hidden"
            }`}
            onClick={goToEnd}
          >
            Go to End
            <FaAngleRight color="blue" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ChecklistItem;

