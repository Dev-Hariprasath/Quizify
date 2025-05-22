import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import CustomModal from "./CustomModel";

const courses = [
  {
    name: "UPSC Prelims",
    description:
      "Comprehensive preparation for UPSC preliminary exams covering General Studies.",
    icon: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/03/upsc-prelims-2024-1710897501.jpg",
  },
  {
    name: "UPSC Mains",
    description:
      "In-depth coaching for UPSC mains exam with essay writing and optional subjects.",
    icon: "https://vajiram-prod.s3.ap-south-1.amazonaws.com/UPSC_Mains_r_556acdfc44.webp",
  },
  {
    name: "Bank PO",
    description:
      "Focused training for Bank PO exams including reasoning, quantitative aptitude, and English.",
    icon: "https://i.pinimg.com/originals/0d/26/06/0d26062c00f158c3d37a3bdf95dc1823.jpg",
  },
  {
    name: "Railway RRB",
    description:
      "Complete course for Railway RRB exams with mock tests and previous year papers.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/Indian_Railways_official.jpg",
  },
  {
    name: "SSC CGL",
    description:
      "Structured coaching for SSC CGL exams covering all major sections.",
    icon: "https://static.wixstatic.com/media/c47c84_8da6d920eebc4f88831a7fe7515c96d8~mv2.png",
  },
  {
    name: "Current Affairs",
    description:
      "Daily and monthly current affairs updates for competitive exams.",
    icon: "https://cuet.iitk.ac.in/images/home/current_affairs_mobile.png",
  },
];

export default function CoachingCourses() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  const toggleFavorite = (name) => {
    const updated = favorites.includes(name)
      ? favorites.filter((n) => n !== name)
      : [...favorites, name];

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleEnquiry = (name) => {
    setSelectedCourse(name);
    setShowModal(true);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="courses"
      className="py-20 bg-gradient-to-br from-[#E4E5FF] to-white text-center"
    >
      <h2 className="text-4xl font-bold text-[#000294] mb-6">
        Coaching Courses for UPSC, Bank & Railway Exams
      </h2>

      <div className="text-lg italic text-[#5E5EA0] mb-10 px-4 max-w-3xl mx-auto">
        “Curiosity is the engine of achievement.”
      </div>
      <div className="flex flex-wrap justify-center gap-10 px-4">
        {courses.map((course, idx) => {
          const isFavorite = favorites.includes(course.name);
          return (
            <div
              key={idx}
              className="bg-white w-full max-w-sm p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center relative border border-[#5963FF]/10"
            >
              {/* Favorite Button */}
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-white hover:bg-[#f0f0ff] transition"
                onClick={() => toggleFavorite(course.name)}
              >
                <FaHeart
                  className={`text-lg ${
                    isFavorite ? "text-red-500" : "text-gray-400"
                  }`}
                />
              </button>

              <img
                src={course.icon}
                alt={course.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-[#5963FF]/30 mb-5 shadow-sm"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {course.name}
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {course.description}
              </p>

              <button
                onClick={() => handleEnquiry(course.name)}
                className="bg-gradient-to-r from-[#1E2A78] to-[#3A47BD] hover:from-[#162158] hover:to-[#2c388f] text-white px-6 py-2 text-sm rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Enquire
              </button>

              {/* Modal */}
              <CustomModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                title="Enquiry Sent!"
                message={`Thanks for your interest in ${selectedCourse}! Our team will reach out shortly.`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
