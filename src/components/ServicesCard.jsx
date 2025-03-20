import React from "react";

const ServicesCard = ({ service, isHovered }) => {
  return (
    <div
      className={`border p-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-lg transform transition-all duration-500 ease-in-out flex flex-col items-center text-center 
      ${isHovered ? "scale-110 shadow-2xl bg-opacity-40" : "hover:scale-105"}`}
    >
      <div className="text-6xl mb-4">{service.icon}</div>
      <h3 className="text-2xl font-semibold text-yellow-300">{service.title}</h3>
      <p className="text-lg opacity-80">{service.description}</p>
    </div>
  );
};

export default ServicesCard;
