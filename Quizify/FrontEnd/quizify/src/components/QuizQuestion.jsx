import React, { useEffect, useState } from "react";

export default function QuizQuestion({ question, index, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [role, setRole] = useState("");

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("user"));
    if (userData?.role) {
      setRole(userData.role);
    }
  }, []);

  useEffect(() => {
    if (role === "admin") {
      const fetchCorrectAnswer = async () => {
        try {
          const response = await fetch(
            `http://localhost:8080/api/question/${question.id}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setCorrectAnswer(data.answer);
        } catch (err) {
          console.error("Failed to fetch correct answer:", err);
        }
      };

      fetchCorrectAnswer();
    }
  }, [question.id, role]);

  const handleClick = (optionKey) => {
    setSelectedOption(optionKey);
    onAnswer(question.id, question[optionKey]);
  };

  const getButtonClass = (key) => {
    const isSelected = selectedOption === key;
    const isCorrect = question[key] === correctAnswer;

    if (role === "admin") {
      if (isCorrect) return "bg-green-500 text-white";
      return "bg-red-100 text-black";
    }

    return isSelected
      ? "bg-blue-500 text-white"
      : "bg-gray-100 hover:bg-blue-100";
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 space-y-4">
      <h4 className="text-lg font-semibold">
        {index + 1}. {question.question}
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {["option1", "option2", "option3", "option4"].map((key) => (
          <button
            key={key}
            onClick={() => handleClick(key)}
            className={`px-4 py-2 rounded-lg transition ${getButtonClass(key)}`}
          >
            {question[key]}
          </button>
        ))}
      </div>
    </div>
  );
}
