import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestionById } from "../../services/questionService";

export default function QuestionDetails() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    getQuestionById(id).then((res) => setQuestion(res.data));
  }, [id]);

  if (!question)
    return <p className="text-center mt-10">Loading question...</p>;

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6 mt-6">
      <h2 className="text-xl font-bold text-blue-600 mb-4">Question Details</h2>
      <p className="text-gray-800 mb-2">
        <strong>Question:</strong> {question.questionTitle}
      </p>
      <ul className="list-disc pl-6 text-gray-700 mb-2">
        <li>{question.option1}</li>
        <li>{question.option2}</li>
        <li>{question.option3}</li>
        <li>{question.option4}</li>
      </ul>
      <p className="text-green-700 font-semibold">
        Answer: {question.rightAnswer}
      </p>
      <p className="text-gray-500 mt-2">Category: {question.category}</p>
      <p className="text-gray-500">Difficulty: {question.difficultyLevel}</p>
    </div>
  );
}
