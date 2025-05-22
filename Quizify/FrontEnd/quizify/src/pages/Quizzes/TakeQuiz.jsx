import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import QuizQuestion from "../../components/QuizQuestion";
import axios from "axios";
import { useAuth } from "../../components/auth/AuthContext";

export default function TakeQuiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const role = user?.role || "guest";

  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/getQuiz/${id}`)
      .then((res) => setQuestions(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleAnswer = (questionId, answer) => {
    if (role !== "user") return;

    setResponses((prev) => {
      const updated = { ...prev, [questionId]: answer };
      const responseList = Object.entries(updated).map(([qId, response]) => ({
        id: parseInt(qId),
        response,
      }));
      localStorage.setItem("responses", JSON.stringify(responseList));
      return updated;
    });
  };

  const handleSubmit = () => {
    if (role !== "user") return;

    const storedResponses = JSON.parse(localStorage.getItem("responses")) || [];

    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Submit and navigate with score
    axios
      .post(`http://localhost:8080/api/submit/${id}`, storedResponses)
      .then((res) => {
        const { score, total } = res.data; // Make sure backend returns { score, total }
        navigate(`/result/${id}`, { state: { score, total } });
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to submit quiz.");
      });
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <h2 className="text-3xl font-bold text-[#1E2A78] mb-4">
        {role === "admin" ? "Quiz Overview" : "Take the Quiz"}
      </h2>

      {questions.map((q, i) => (
        <QuizQuestion
          key={q.id}
          question={q}
          answer={q.answer}
          index={i}
          onAnswer={handleAnswer}
          selectedAnswer={responses[q.id]}
          readOnly={role !== "user"}
        />
      ))}

      {role === "user" && (
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="bg-[#1E2A78] hover:bg-[#162158] mt-4 text-center text-white font-semibold py-2 px-5 rounded-lg shadow-lg transition duration-300 flex items-center justify-center gap-2 hover:shadow-xl"
          >
            Submit Quiz
          </button>
        </div>
      )}
    </div>
  );
}
