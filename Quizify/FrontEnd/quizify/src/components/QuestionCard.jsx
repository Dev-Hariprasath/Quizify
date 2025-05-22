import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/auth/AuthContext"
import axios from "axios";
import { toast } from "react-toastify";

export default function QuestionCard({ question }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleEdit = () => {
    navigate(`/editQuestion/${question.id}`);
  };

  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure you want to delete this question?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:8080/api/question/${question.id}`);
      toast.success("Question deleted successfully");
      window.location.reload(); 
    } catch (err) {
      toast.error("Failed to delete question");
    }
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all h-full flex flex-col justify-between">
      <div>
        <h4 className="text-lg font-semibold text-blue-800 mb-2">
          {question.question}
        </h4>
        <h5 className="text-sm text-gray-600">
          Answer: <span className="font-medium text-green-400">{question.answer}</span>
        </h5>
        <p className="text-sm text-gray-600 mb-2">
          Category: <span className="font-medium">{question.category}</span>
        </p>
        <p className="text-sm text-gray-600">
          Difficulty: <span className="font-medium">{question.difficulty}</span>
        </p>
        
      </div>

      {user?.role === "admin" && (
        <div className="mt-4 flex justify-end gap-3 text-blue-700">
          <FaEdit
            className="cursor-pointer hover:text-blue-900"
            onClick={handleEdit}
            title="Edit Question"
          />
          <FaTrash
            className="cursor-pointer hover:text-red-600"
            onClick={handleDelete}
            title="Delete Question"
          />
        </div>
      )}
    </div>
  );
}
