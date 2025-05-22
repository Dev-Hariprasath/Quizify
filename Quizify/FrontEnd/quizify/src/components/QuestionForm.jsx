import React from "react";
import Input from "./Input";
import Button from "./Button";

export default function QuestionForm({
  onSubmit,
  question = {},
  isEdit = false,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newQuestion = {
      title: form.title.value,
      option1: form.option1.value,
      option2: form.option2.value,
      option3: form.option3.value,
      option4: form.option4.value,
      answer: form.answer.value,
      category: form.category.value,
    };
    onSubmit(newQuestion);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 shadow-md rounded-2xl max-w-xl mx-auto space-y-4"
    >
      <Input
        label="Question"
        name="title"
        defaultValue={question.title}
        required
      />
      <Input
        label="Option A"
        name="option1"
        defaultValue={question.option1}
        required
      />
      <Input
        label="Option B"
        name="option2"
        defaultValue={question.option2}
        required
      />
      <Input
        label="Option C"
        name="option3"
        defaultValue={question.option3}
        required
      />
      <Input
        label="Option D"
        name="option4"
        defaultValue={question.option4}
        required
      />
      <Input
        label="Correct Answer"
        name="answer"
        defaultValue={question.answer}
        required
      />
      <Input
        label="Category"
        name="category"
        defaultValue={question.category}
        required
      />

      <div className="flex justify-center">
        <Button type="submit">
          {isEdit ? "Update Question" : "Add Question"}
        </Button>
      </div>
    </form>
  );
}
