import React from "react";

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#1E2A78] hover:bg-[#162158] mt-6 text-center text-white font-semibold py-2 px-5 rounded-lg shadow-lg transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
}
