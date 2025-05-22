import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { signupUser } from "../../services/authService";
import { useAuth } from "../auth/AuthContext";

const sliderImages = [
  "https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7875.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?semt=ais_hybrid&w=740",
  "https://media.istockphoto.com/id/1312241687/photo/african-american-university-student-writing-while-having-test-in-the-classroom.jpg?s=612x612&w=0&k=20&c=2-tKggjR3jJbsQdJbNOVfqywvrdtKLhrowcyqDsQnTI=",
];

const SignupForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [currentImage, setCurrentImage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const normalizedData = {
        ...formData,
        role: formData.role.toLowerCase(),
      };

      const response = await signupUser(normalizedData);
      const savedUser = response.data;
      login(savedUser);
      navigate("/quizzes");
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed. Please try again.");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex mt-6 items-center justify-center h-screen bg-[#F2F4F8] px-4">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row h-[85vh]">
        {/* Left Image Slider */}
        <div className="md:w-1/2 w-full h-64 md:h-full relative hidden md:block">
          <img
            src={sliderImages[currentImage]}
            alt="Slider"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {sliderImages.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentImage === index ? "bg-blue-600" : "bg-white"
                } shadow`}
              ></span>
            ))}
          </div>
        </div>

        {/* Right Signup Form */}
        <div className="md:w-1/2 w-full flex flex-col justify-center p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#000294] text-center mb-2">
            Quizifi
          </h1>
          <p className="text-center text-gray-500 mb-6 text-sm">
            Create your account
          </p>

          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5963FF]"
            />
            <input
              type="email"
              name="mail"
              placeholder="Email"
              value={formData.mail}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5963FF]"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5963FF]"
            />
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5963FF]"
              required
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <button
              type="submit"
              className="w-full bg-[#5963FF] text-white py-2 rounded-md hover:bg-[#434bdb] transition"
            >
              Sign Up
            </button>
          </form>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="px-2 text-gray-500 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          <div className="space-y-2">
            <button className="w-full flex items-center justify-center border py-2 rounded-md hover:bg-gray-100 transition">
              <FaGoogle className="mr-2 text-red-500" /> Sign up with Google
            </button>
            <button className="w-full flex items-center justify-center border py-2 rounded-md hover:bg-gray-100 transition">
              <FaGithub className="mr-2 text-gray-700" /> Sign up with GitHub
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-[#5963FF] hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
