import React from "react";

const testimonials = [
  {
    name: "Alex Johnson",
    feedback: "QuizApp makes learning fun and interactive!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Sharma",
    feedback: "Creating custom quizzes for my students has never been easier.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "James Lee",
    feedback: "Absolutely love the design and simplicity.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center mt-2 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-[#FFD700]" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09L5.64 12.45 1 8.91l6.061-.89L10 2.5l2.939 5.52 6.061.89-4.64 3.54 1.518 5.64z" />
        </svg>
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#F0F4FF] text-center">
      <h2 className="text-3xl font-bold text-[#1E2A78] mb-4">
        What Our Users Say
      </h2>

      <div className="text-lg italic text-[#4F5B93] mb-10 px-4 max-w-2xl mx-auto">
        “Feedback isn’t just about improvement—it’s proof of connection.”
      </div>

      <div className="flex flex-wrap justify-center gap-10 px-4">
        {testimonials.map(({ name, feedback, rating, image }) => (
          <div
            key={name}
            className="bg-white max-w-xs p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center border border-[#E0E7FF]"
          >
            <img
              src={image}
              alt={name}
              className="w-20 h-20 rounded-full object-cover border-4 border-[#E0E7FF] mb-4"
            />
            <h3 className="font-semibold text-lg text-[#1E2A78]">{name}</h3>
            <StarRating rating={rating} />
            <p className="text-[#4F5B93] text-sm italic">"{feedback}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
