import React, { useEffect, useState } from "react";
import QuizCard from "../../components/QuizCard";
import { FiPlus } from "react-icons/fi";

export default function QuizList() {
  const [quizzes, setQuizzes] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    fetch("http://localhost:8080/api/allQuizzes")
      .then((res) => res.json())
      .then((data) => setQuizzes(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const loadMore = () => setVisibleCount((prev) => prev + 3);

  const displayedQuizzes = quizzes.slice(0, visibleCount);

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-4xl font-bold text-[#1E2A78] mb-4 text-center">
        Quiz List
      </h2>

      <div className="text-lg text-center italic text-[#4F5B93] mb-10 px-4 max-w-2xl mx-auto">
        “You're not aiming for perfection. You're aiming for progress.”
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array.isArray(displayedQuizzes) && displayedQuizzes.length > 0 ? (
          displayedQuizzes.map((quiz) => <QuizCard key={quiz.id} quiz={quiz} />)
        ) : (
          <p className="text-base sm:text-lg" style={{ color: "#6B7280" }}>
            No quizzes available.
          </p>
        )}
      </div>

      {visibleCount < quizzes.length && (
        <div className=" flex justify-center text-center mt-12">
          <button
            onClick={loadMore}
            className="bg-[#1E2A78] hover:bg-[#162158] mt-4 text-center text-white font-semibold py-2 px-5 rounded-lg shadow-lg transition duration-300 flex items-center justify-center gap-2 hover:shadow-xl"
          >
            <FiPlus size={20} />
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
