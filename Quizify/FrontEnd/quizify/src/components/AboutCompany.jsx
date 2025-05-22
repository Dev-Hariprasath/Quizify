import React from "react";

export default function AboutCompany() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-[#E4E5FF] to-[#F9FAFF]">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg"
            alt="Team collaborating on quizzes"
            className="rounded-3xl shadow-2xl object-cover w-full h-full max-h-[400px]"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-[#3B3F9C] text-4xl font-bold capitalize tracking-wide mb-6">
            About Quizify
          </h2>

          {/* Quote */}
          <blockquote className="italic text-[#5963FF] mb-8 max-w-xl mx-auto md:mx-0">
            “Education is the passport to the future, for tomorrow belongs to
            those who prepare for it today.”
          </blockquote>

          <p className="text-lg text-[#4A4A6A] leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
            QuizApp is your go-to platform for engaging and customizable
            quizzes. Whether you're a student brushing up on subjects, a teacher
            creating class assessments, or a trivia lover, QuizApp empowers you
            with tools designed to make learning effective and enjoyable.
          </p>
          <p className="text-md text-[#6B6B8A] max-w-xl mx-auto md:mx-0">
            With an intuitive interface, real-time feedback, and collaborative
            features, we aim to foster curiosity and knowledge-sharing across
            communities. Join thousands who are transforming the way they learn
            and teach, making every quiz a step towards mastery.
          </p>
        </div>
      </div>
    </section>
  );
}
