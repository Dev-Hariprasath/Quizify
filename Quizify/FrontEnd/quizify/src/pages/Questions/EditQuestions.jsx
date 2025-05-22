import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getQuestionById,
  updateQuestion,
} from "../../services/questionService";

export default function EditQuestion() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: "",
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
    category: "",
    difficulty: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/question/${id}`
        );
        if (!response.ok) {
          const errorText = await response.text();
          console.error("Error response:", response.status, errorText);
          throw new Error(`Network response was not ok: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);
        setForm({
          id: data.id,
          question: data.question || "",
          option1: data.option1 || "",
          option2: data.option2 || "",
          option3: data.option3 || "",
          option4: data.option4 || "",
          answer: data.answer || "",
          category: data.category || "",
          difficulty: data.difficulty || "",
        });
      } catch (err) {
        console.error("Failed to load question:", err);
        toast.error("Failed to load question");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestion();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateQuestion(form);
      toast.success("Question updated!");
      navigate("/questions");
    } catch (err) {
      toast.error("Update failed");
    }
  };

  if (loading) {
    return <p className="text-center mt-10 text-lg">Loading question...</p>;
  }

  return (
    <div className="max-w-4xl  mx-auto p-6">
      <h1 className="text-3xl mt-12 font-bold text-[#1E2A78] mb-4 text-center">
        Question Overveiw
      </h1>
      <div className="max-w-2xl mt-5 mx-auto p-6 bg-white shadow-xl rounded-xl">
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          name="question"
          value={form.question}
          onChange={handleChange}
          required
          placeholder="Question"
          className="w-full border p-2 rounded-lg"
        />
        <input
          name="option1"
          value={form.option1}
          onChange={handleChange}
          required
          placeholder="Option 1"
          className="w-full border p-2 rounded-lg"
        />
        <input
          name="option2"
          value={form.option2}
          onChange={handleChange}
          required
          placeholder="Option 2"
          className="w-full border p-2 rounded-lg"
        />
        <input
          name="option3"
          value={form.option3}
          onChange={handleChange}
          required
          placeholder="Option 3"
          className="w-full border p-2 rounded-lg"
        />
        <input
          name="option4"
          value={form.option4}
          onChange={handleChange}
          required
          placeholder="Option 4"
          className="w-full border p-2 rounded-lg"
        />
        <input
          name="answer"
          value={form.answer}
          onChange={handleChange}
          required
          placeholder="Correct Answer"
          className="w-full border p-2 rounded-lg"
        />
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          required
          placeholder="Category"
          className="w-full border p-2 rounded-lg"
        />
        <input
          name="difficulty"
          value={form.difficulty}
          onChange={handleChange}
          required
          placeholder="Difficulty"
          className="w-full border p-2 rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-[#1E2A78] hover:bg-[#162158] mt-2 text-center text-white font-semibold py-2 px-5 rounded-lg shadow-lg transition duration-300"
        >
          Update Question
        </button>
      </form>
    </div>
    </div>
  );
}
