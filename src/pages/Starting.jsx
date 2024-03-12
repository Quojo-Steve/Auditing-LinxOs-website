import React from "react";
import { motion } from "framer-motion";
import "./Starting.css";
import { useNavigate } from "react-router-dom";

const Starting = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 1.5 } },
  };
  const handleItemClick = (index) => {
    localStorage.setItem("currentQuestionIndex", index);
    localStorage.removeItem("answers")
    navigate("/checklist");
  };

  return (
    <motion.div
      className="background flex flex-col items-center justify-center h-screen overflow-hidden text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="overlay absolute top-0 w-full h-full"></div>
      <h1 className="text-3xl font-bold mb-4 text-center z-40">
        Welcome to Group 3 Linux Audit
      </h1>
      <p className="text-lg mb-6 z-40">
        Thank you for joining us in this audit journey.
      </p>
      <div
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline z-40"
        onClick={() => handleItemClick(0)}
      >
        Start Audit
      </div>
    </motion.div>
  );
};

export default Starting;
