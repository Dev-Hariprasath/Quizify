import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResultCard from "../../components/ResultCard";
import axios from "axios";

export default function QuizResult() {
  const { id } = useParams();
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedResponses = JSON.parse(localStorage.getItem("responses")) || [];

    axios
      .post(`http://localhost:8080/api/submit/${id}`, storedResponses)
      .then((res) => {
        setScore(res.data.score);
        setTotal(res.data.total);
        localStorage.removeItem("responses");
      })
      .catch(() => {
        setScore(0);
        setTotal(0);
      });
  }, [id]);

  return (
    <div className="max-w-md mx-auto p-6">
      <ResultCard score={score} total={total} />
    </div>
  );
}
