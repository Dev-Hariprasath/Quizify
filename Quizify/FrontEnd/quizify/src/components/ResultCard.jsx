import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

export default function ResultCard({ score, total }) {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);
  const percentage = Math.round((score / total) * 100);

  useEffect(() => {
    if (percentage > 75) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [percentage]);

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="flex mt-16 items-center justify-center bg-[#f9fafb]">
      {showConfetti && <Confetti />}
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          Quiz Completed!
        </h2>
        <p className="text-xl font-semibold mb-2">
          Your Score: {score} / {total}
        </p>
        <p
          className={`text-lg mb-6 ${
            percentage >= 50 ? "text-green-600" : "text-red-600"
          }`}
        >
          {percentage > 75
            ? "🎉 Amazing! You nailed it!"
            : percentage >= 50
            ? "Good job!"
            : "Try again!"}
        </p>

        <button
          onClick={handleHomeClick}
          className="bg-[#162158] text-white px-6 py-2 rounded-full hover:bg-[#0e153d] transition duration-300 shadow"
        >
          Return Home
        </button>
      </div>
    </div>
  );
}
