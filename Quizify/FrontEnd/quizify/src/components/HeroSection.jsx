import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../components/auth/AuthContext";

const images = [
  "https://righteducations.com/assets/front/img/service/16742278101133610823.jpg",
  "https://cdn.itm.ac.in/2024/05/how-to-prepare-for-mht-cet-2022-13-tips-from-cet-toppers.webp",
  "https://kashmirobserver.net/wp-content/uploads/2021/04/Feature-Photo.jpeg.webp",
  "https://assets.thehansindia.com/h-upload/2023/07/21/1366367-micro-schools.webp",
];

export default function HeroSection() {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen mt-10 w-full overflow-hidden pt-[72px]">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col justify-center h-full text-white px-4 md:px-8 max-w-7xl mx-auto text-left animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
          Master Your Exams with <span className="text-[#2738aa]">Quizify</span>
        </h1>
        <p className="text-lg md:text-2xl font-light mb-8 max-w-xl drop-shadow-md">
          Prepare for UPSC, Banking, SSC, and more with India’s most trusted
          quiz platform.
        </p>
        <div className="flex flex-wrap gap-5">
          {isAdmin ? (
            <>
              <Link
                to="/quizzes"
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#1E2A78] px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#162158] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#5963FFB2] focus:ring-offset-2"
              >
                All Quiz
              </Link>

              <Link
                to="/create"
                className="mt-4 flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#1E2A78] shadow-lg transition duration-300 hover:bg-[#E0E7FF] focus:outline-none focus:ring-2 focus:ring-[#5963FFB2] focus:ring-offset-2"
              >
                Add Quiz
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/quizzes"
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#1E2A78] px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#162158] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#5963FFB2] focus:ring-offset-2"
              >
                Take Quiz
              </Link>

              <Link
                to="/questions"
                className="mt-4 flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#1E2A78] shadow-lg transition duration-300 hover:bg-[#E0E7FF] focus:outline-none focus:ring-2 focus:ring-[#5963FFB2] focus:ring-offset-2"
              >
                All Questions
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
