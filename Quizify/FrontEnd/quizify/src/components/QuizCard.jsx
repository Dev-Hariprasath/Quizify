import React from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaEye } from "react-icons/fa";
import { useAuth } from "../components/auth/AuthContext";

export default function QuizCard({ quiz, onDelete }) {
  const { user } = useAuth();
  const role = user?.role || "guest";

  const firstQuestion =
    quiz.questionList && quiz.questionList.length > 0
      ? quiz.questionList[0]
      : null;

  console.log(quiz.questionList[0].answer);
  const difficulty = firstQuestion?.difficulty || "N/A";
  const category = firstQuestion?.category || "N/A";

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this quiz?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:8080/api/quiz/${quiz.id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Quiz deleted successfully.");
        if (onDelete) onDelete(quiz.id);
      } else {
        alert("Failed to delete quiz.");
      }
    } catch (error) {
      console.error("Error deleting quiz:", error);
      alert("An error occurred while deleting the quiz.");
    }
  };

  return (
    <div className="relative bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition duration-300 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-[#1E2A78]">
          {quiz.topic || "Untitled Quiz"}
        </h3>

        <p className="text-gray-800 text-base mb-2">
          <span className="font-medium text-[#6B7280]">Total Questions:</span>{" "}
          <span className="font-semibold text-[#111827]">
            {quiz.questionList?.length || 0}
          </span>
        </p>

        <p className="text-gray-800 text-base mb-2">
          <span className="font-medium text-[#6B7280]">Level:</span>{" "}
          <span className="font-semibold text-[#1D4ED8]">{difficulty}</span>
        </p>

        <p className="text-gray-800 text-base">
          <span className="font-medium text-[#6B7280]">Language:</span>{" "}
          <span className="font-semibold text-[#10B981]">{category}</span>
        </p>
      </div>

      <div className="flex justify-center mt-4">
        {role === "admin" && (
          <div className="flex gap-3">
            <Link
              to={`/quiz/view/${quiz.id}`}
              className="flex items-center gap-2 text-white bg-[#162158] hover:bg-[#0e153d] px-4 py-2 text-sm rounded-full shadow"
            >
              <FaEye /> View
            </Link>
            <button
              onClick={handleDelete}
              className="flex items-center gap-2 text-white bg-[#e63946] hover:bg-[#c82333] px-4 py-2 text-sm rounded-full shadow"
            >
              <FaTrash /> Delete
            </button>
          </div>
        )}

        {role === "user" && (
          <Link
            to={`/quiz/${quiz.id}`}
            className="inline-block px-6 py-3 text-sm font-semibold text-white bg-gradient-to-t from-[#1E2A78] to-[#3A47BD] hover:from-[#162158] hover:to-[#2c388f] rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#5963FFB2] focus:ring-offset-2"
          >
            🚀 Start Quiz
          </Link>
        )}
      </div>
    </div>
  );
}
