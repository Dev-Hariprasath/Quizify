import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getQuestionsByCategory } from "../../services/questionService";

export default function QuestionsByCategory() {
  const { category } = useParams();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestionsByCategory(category).then((res) => setQuestions(res.data));
  }, [category]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Questions in "{category}"
      </h2>
      {questions.length === 0 ? (
        <p className="text-center text-gray-500">
          No questions found in this category.
        </p>
      ) : (
        <div className="space-y-4">
          {questions.map((q, i) => (
            <div key={i} className="p-4 bg-white rounded-lg shadow">
              <p className="font-semibold">{q.questionTitle}</p>
              <ul className="pl-4 list-disc text-gray-700">
                {[q.option1, q.option2, q.option3, q.option4].map(
                  (opt, idx) => (
                    <li key={idx}>{opt}</li>
                  )
                )}
              </ul>
              <p className="text-sm text-green-600 mt-1">
                Answer: {q.rightAnswer}
              </p>
              <p className="text-sm text-gray-500">
                Difficulty: {q.difficultyLevel}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
