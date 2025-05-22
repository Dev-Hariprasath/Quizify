import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import { useAuth } from "./AuthContext";
import AlertModal from "../AlertModal";
import { FaGoogle, FaGithub } from "react-icons/fa";

const sliderImages = [
  "https://media.istockphoto.com/id/2122148349/photo/writing-an-exam-at-the-university.jpg?s=612x612&w=0&k=20&c=LgVzLcd_cxNDQrolZFFqg7AIQnTd_xBrvdWfr-eVoK8=",
  "https://img.freepik.com/free-vector/online-test-concept-illustration_114360-5456.jpg",
  "https://www.hp.com/content/dam/sites/worldwide/poly/solutions/platform/microsoft/Services%20-%20Desktop@2x.png",
];

const practiceUsers = [
  { mail: "user@gmail.com", password: "user@123", role: "USER" },
  { mail: "admin@gmail.com", password: "admin@123", role: "ADMIN" },
];

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ mail: "", password: "" });
  const [alert, setAlert] = useState({ open: false, message: "", type: "" });
  const [currentImage, setCurrentImage] = useState(0);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(credentials);
      const userData = res.data;
      login(userData);
      setAlert({ open: true, message: "Login successful!", type: "success" });
      navigate(userData.role.toLowerCase() === "admin" ? "/" : "/quizzes");
    } catch (err) {
      const matchedUser = practiceUsers.find(
        (user) =>
          user.mail === credentials.mail &&
          user.password === credentials.password
      );

      if (matchedUser) {
        login(matchedUser);
        setAlert({
          open: true,
          message: "Login successful (practice mode)!",
          type: "success",
        });
        navigate(matchedUser.role.toLowerCase() === "admin" ? "/" : "/quizzes");
      } else {
        setAlert({ open: true, message: "Invalid credentials", type: "error" });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex mt-5 items-center justify-center h-screen bg-[#F2F4F8] px-4">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row h-[80vh]">
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

        {/* Right Form */}
        <div className="md:w-1/2 w-full flex flex-col justify-center p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#000294] text-center mb-2">
            Quizifi
          </h1>
          <p className="text-center text-gray-500 mb-6 text-sm">
            Login to your account
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              name="mail"
              placeholder="Email"
              value={credentials.mail}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5963FF]"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5963FF]"
            />
            <button
              type="submit"
              className="w-full bg-[#5963FF] text-white py-2 rounded-md hover:bg-[#434bdb] transition"
            >
              Login
            </button>
          </form>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="px-2 text-gray-500 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          <div className="space-y-2">
            <button className="w-full flex items-center justify-center border py-2 rounded-md hover:bg-gray-100 transition">
              <FaGoogle className="mr-2 text-red-500" /> Continue with Google
            </button>
            <button className="w-full flex items-center justify-center border py-2 rounded-md hover:bg-gray-100 transition">
              <FaGithub className="mr-2 text-gray-700" /> Continue with GitHub
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="/signup" className="text-[#5963FF] hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>

      {alert.open && (
        <AlertModal
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert({ ...alert, open: false })}
        />
      )}
    </div>
  );
};

export default LoginForm;
