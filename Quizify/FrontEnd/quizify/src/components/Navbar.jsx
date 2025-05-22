import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaQuestionCircle,
  FaPlusCircle,
  FaSignOutAlt,
  FaUserCircle,
  FaLock,
} from "react-icons/fa";
import { useAuth } from "./auth/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const renderLinks = () => {
    if (!user) return null;

    const commonLinks = [
      {
        to: "/questions",
        icon: <FaQuestionCircle className="mr-2" />,
        label: "Questions",
      },
    ];

    const userLinks = [
      {
        to: "/quizzes",
        icon: <FaHome className="mr-2" />,
        label: "Quizzes",
      },
    ];

    const adminLinks = [
      {
        to: "/create",
        icon: <FaPlusCircle className="mr-2" />,
        label: "Create Quiz",
      },
      {
        to: "/quizzes",
        icon: <FaHome className="mr-2" />,
        label: "All Quizzes",
      },
      {
        to: "/add-question",
        icon: <FaPlusCircle className="mr-2" />,
        label: "Add Question",
      },
    ];

    const links =
      user.role?.toLowerCase() === "admin"
        ? [...adminLinks, ...commonLinks]
        : [...userLinks, ...commonLinks];

    return links.map((link, index) => (
      <Link
        key={index}
        to={link.to}
        onClick={() => setIsOpen(false)}
        className="flex items-center text-[#1E2A78] hover:text-[#4F5B93] transition-colors duration-200"
      >
        {link.icon}
        {link.label}
      </Link>
    ));
  };

  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";

  const authButton = !user && (
    <Link to={isLoginPage ? "/signup" : "/login"}>
      <button className="bg-gradient-to-r from-[#1E2A78] to-[#3A47BD] hover:from-[#162158] hover:to-[#2c388f] text-white px-6 py-2 text-sm rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl">
        {isLoginPage ? (
          <>
            <FaUserCircle className="text-white text-base" />
            Sign Up
          </>
        ) : (
          <>
            <FaLock className="text-white text-base" />
            Login
          </>
        )}
      </button>
    </Link>
  );

  return (
    <nav className="bg-white/70 backdrop-blur-lg shadow-md fixed w-full top-0 z-50 transition duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-[#1E2A78] tracking-tight"
        >
          Quizify
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center text-base font-medium">
          {renderLinks()}
          {authButton}
          {user && (
  <>
    <div className="w-8 h-8 bg-[#1E2A78] text-white rounded-full flex items-center justify-center font-bold uppercase">
      {user.name?.[0] || 'U'}
    </div>
    <button
      onClick={handleLogout}
      className="ml-4 text-[#1E2A78] hover:text-red-500 flex items-center"
    >
      <FaSignOutAlt className="mr-1" />
      Logout
    </button>
  </>
)}

        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#1E2A78] focus:outline-none text-2xl transition-transform duration-200 hover:scale-110"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-xl border-t border-[#E0E7FF] px-6 py-4 space-y-4">
          {renderLinks()}
          {!user ? (
            <Link
              to={isLoginPage ? "/signup" : "/login"}
              onClick={() => setIsOpen(false)}
              className="text-[#1E2A78] hover:text-[#4F5B93] transition-colors duration-200 flex items-center"
            >
              {isLoginPage ? (
                <>
                  <FaUserCircle className="mr-2" />
                  Sign Up
                </>
              ) : (
                <>
                  <FaLock className="mr-2" />
                  Login
                </>
              )}
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="text-[#1E2A78] hover:text-red-500 flex items-center"
            >
              <FaSignOutAlt className="mr-2" />
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
