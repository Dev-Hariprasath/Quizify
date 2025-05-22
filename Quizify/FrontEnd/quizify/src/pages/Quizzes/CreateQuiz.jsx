import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateQuiz() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      topic: form.topic.value,
      category: form.category.value,
      num: form.num.value,
      difficulty: form.difficulty.value,
    };

    axios
      .post("http://localhost:8080/api/addQuiz", null, { params: data })
      .then(() => navigate("/quizzes"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-6">
      <h2 className="text-4xl font-bold text-[#1E2A78] mb-4 text-center">
        Create a Quiz
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow"
      >
        <Input label="Topic" name="topic" required />
        <Input label="Category" name="category" required />
        <Input label="Number of Questions" name="num" type="number" required />
        <Input label="Difficulty" name="difficulty" required />
        <Button
          type="submit"
          className="w-full bg-[#1E2A78] hover:bg-[#162158] mt-6 text-center text-white font-semibold py-3 px-7 rounded-lg shadow-lg transition duration-300 text-lg"
        >
          Create Quiz
        </Button>
      </form>
    </div>
  );
}
