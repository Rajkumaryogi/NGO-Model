import React from "react";

const ProjectCard = ({ project, onClick, isHovered }) => {
  return (
    <div
      className={` border p-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-lg transform transition-all duration-500 ease-in-out flex flex-col items-center text-center
      ${isHovered ? "scale-110 shadow-2xl bg-opacity-40" : "hover:scale-105"}`}
      onClick={() => onClick(project)}
    >
      <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
      <h3 className="text-2xl font-semibold text-yellow-300">{project.title}</h3>
      <p className="text-lg opacity-80">{project.description}</p>
    </div>
  );
};

export default ProjectCard;
