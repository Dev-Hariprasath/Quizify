import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuestionCard from "../../components/QuestionCard";
import axios from "axios";
import { useAuth } from "../../components/auth/AuthContext";

export default function AllQuestions() {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  const categories = React.useMemo(() => {
    const cats = questions.map((q) => q.category).filter(Boolean);
    return ["all", ...Array.from(new Set(cats))];
  }, [questions]);

  const difficulties = React.useMemo(() => {
    const diffs = questions.map((q) => q.difficulty).filter(Boolean);
    return ["all", ...Array.from(new Set(diffs))];
  }, [questions]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/api/questions")
      .then((res) => {
        setQuestions(res.data);
        setFilteredQuestions(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load questions. Please try again later.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = questions;

    if (searchTerm.trim() !== "") {
      const lower = searchTerm.toLowerCase();
      filtered = filtered.filter((q) =>
        (q.question || "").toLowerCase().includes(lower)
      );
    }

    if (category !== "all") {
      filtered = filtered.filter((q) => q.category === category);
    }

    if (difficulty !== "all") {
      filtered = filtered.filter(
        (q) => q.difficulty?.toLowerCase() === difficulty.toLowerCase()
      );
    }

    setFilteredQuestions(filtered);
  }, [searchTerm, category, difficulty, questions]);

  return (
    <div className="max-w-6xl mx-auto mt-12 p-6">
      <h2 className="text-4xl font-bold text-[#1E2A78] mb-4 text-center">
        Question List
      </h2>

      <div className="text-lg text-center italic text-[#4F5B93] mb-10 px-4 max-w-2xl mx-auto">
        “Doubt kills more dreams than failure ever will.”
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
        <input
          type="text"
          placeholder="Search questions..."
          className="w-full sm:max-w-xs px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="w-full sm:max-w-xs px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "all" ? "All Categories" : cat}
            </option>
          ))}
        </select>

        <select
          className="w-full sm:max-w-xs px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          {difficulties.map((diff) => (
            <option key={diff} value={diff}>
              {diff === "all" ? "All Difficulties" : diff}
            </option>
          ))}
        </select>
      </div>

      {user?.role !== "user" && (
        <div className="flex justify-center mb-6">
          <Link to="/add-question">
            <button className="bg-[#1E2A78] hover:bg-[#2c388f] text-white px-6 py-2 rounded-full font-semibold shadow-md transition duration-300">
              + Add Question
            </button>
          </Link>
        </div>
      )}

      {loading && (
        <div className="flex justify-center items-center my-12">
          <svg
            className="animate-spin h-8 w-8 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
        </div>
      )}

      {error && (
        <div className="text-red-600 text-center font-semibold mb-6">
          {error}
        </div>
      )}

      {!loading && filteredQuestions.length === 0 && (
        <p className="text-gray-600 text-center mt-12 text-lg">
          No questions found. Try a different search term or filter.
        </p>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredQuestions.map((q) => (
          <div
            key={q.id}
            className="transform hover:scale-[1.03] transition-transform duration-300"
          >
            <QuestionCard question={q} />
          </div>
        ))}
      </div>
    </div>
  );
}
