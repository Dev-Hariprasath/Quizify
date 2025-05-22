import React from "react";
import QuestionForm from "../../components/QuestionForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddQuestion() {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    axios
      .post("http://localhost:8080/api/addQuestion", data)
      .then(() => navigate("/questions"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="max-w-4xl mt-12 mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#1E2A78] mb-4 text-center">
        Add New Question
      </h1>
      <QuestionForm onSubmit={handleSubmit} />
    </div>
  );
}
