import React, { useEffect, useState } from "react";

const ProjectCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <div className=" mt-6 relative w-full max-w-3xl mx-auto overflow-hidden">
      <h2 className="text-3xl font-semibold text-center mb-6 text-yellow-300">Featured Initiatives</h2>
      <div className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {projects.slice(0, 6).map((project, index) => (
          <div key={index} className="w-full flex-shrink-0 p-4">
            <div className="border relative bg-white bg-opacity-20 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-xl" />
              <div className="p-4 text-center">
                <h3 className="text-2xl font-semibold text-yellow-300">{project.title}</h3>
                <p className="text-lg opacity-80">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
