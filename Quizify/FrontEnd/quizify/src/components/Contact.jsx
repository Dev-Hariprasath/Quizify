import React, { useRef, useState } from "react";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const formRef = useRef();
  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(formRef.current);
    formData.append("access_key", "99a34d62-6920-434a-a3b7-bc51bb606af1"); // Replace with your actual access_key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        formRef.current.reset();
      } else {
        setResult(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <section
      className="bg-gradient-to-br from-[#E4E5FF] to-white py-16 px-4 text-center"
      id="contact"
    >
      <h2 className="text-4xl md:text-4xl font-bold text-[#000294] mb-6 tracking-tight">
        Contact Us
      </h2>

      <p className="max-w-xl mx-auto mb-12 text-lg italic text-[#3B3F9C]">
        “Great conversations start with a simple hello. Reach out and let's
        connect!”
      </p>

      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="max-w-lg mx-auto bg-white shadow-lg rounded-3xl p-8 space-y-6 border border-[#5963FF]/20"
      >
        <div className="text-left">
          <label
            htmlFor="name"
            className="block mb-1 text-[#1E2A78] font-semibold"
          >
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            required
            className="w-full p-3 bg-white border border-[#5963FF]/30 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5963FF]/50 transition-all duration-200"
          />
        </div>

        <div className="text-left">
          <label
            htmlFor="email"
            className="block mb-1 text-[#1E2A78] font-semibold"
          >
            Your Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            className="w-full p-3 bg-white border border-[#5963FF]/30 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5963FF]/50 transition-all duration-200"
          />
        </div>

        <div className="text-left">
          <label
            htmlFor="message"
            className="block mb-1 text-[#1E2A78] font-semibold"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Type your message here..."
            required
            className="w-full p-3 bg-white border border-[#5963FF]/30 rounded-xl shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#5963FF]/50 transition-all duration-200"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-[#1E2A78] hover:bg-[#162158] mt-6 text-center text-white font-semibold py-3 px-7 rounded-lg shadow-lg transition duration-300"
        >
          <FiSend className="w-5 h-5" />
          Send Message
        </button>

        {result && (
          <p className="mt-4 text-center text-gray-700 font-medium">{result}</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
