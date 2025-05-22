import React from "react";

const AlertModal = ({ type, message, onClose }) => {
  const colors = {
    success: "bg-green-500",
    error: "bg-red-500",
  };

  return (
    <div className="fixed bottom-4 right-4">
      <div
        className={`text-white px-4 py-2 rounded shadow-md ${colors[type]} flex items-center justify-between`}
      >
        <span>{message}</span>
        <button className="ml-4 text-white font-bold" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default AlertModal;
