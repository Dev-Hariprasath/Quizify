import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F0F4FF] text-[#4F5B93] py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-[#1E2A78] mb-2">Quizify</h2>
          <p className="text-sm text-[#4F5B93]">
            Empowering learning through interactive quizzes. Test, learn, and
            grow with QuizApp.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-md font-semibold text-[#1E2A78] mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-left text-blue-700 hover:underline"
              >
                About us
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("partners")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-left text-blue-700 hover:underline"
              >
                Partners
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("courses")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-left text-blue-700 hover:underline"
              >
                Courses Offered
              </button>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-md font-semibold text-[#1E2A78] mb-3">
            Follow Us
          </h3>
          <div className="flex gap-4 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1E2A78] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#4F5B93] transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1E2A78] transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-sm text-[#4F5B93] mt-10">
        &copy; {new Date().getFullYear()} QuizApp. All rights reserved.
      </div>
    </footer>
  );
}
