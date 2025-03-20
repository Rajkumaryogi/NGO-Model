import React from "react";

const ProjectDetailsModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white text-black p-6 rounded-xl max-w-lg w-full shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
        <p className="text-lg">{project.description}</p>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
