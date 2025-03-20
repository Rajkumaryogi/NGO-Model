import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Health Camp for Rural Areas",
    description: "Providing free healthcare to 10,000+ individuals.",
    image: "/images/project1.jpg",
  },
  {
    title: "Green Planet Initiative",
    description: "Planted 50,000 trees to fight climate change.",
    image: "/images/project2.jpg",
  },
  {
    title: "Education for All",
    description: "Scholarships for 5,000 underprivileged students.",
    image: "/images/project3.jpg",
  },
];

const FeaturedProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hoverRef = useRef(false); // Tracks hover state

  useEffect(() => {
    const changeSlide = () => {
      if (!hoverRef.current) {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }
    };

    const interval = setInterval(changeSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <section className="w-full py-16 bg-gradient-to-r from-blue-800 to-green-500 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Featured Projects</h2>

      {/* Carousel Container */}
      <div
        className="border relative max-w-3xl mx-auto overflow-hidden p-6 rounded-xl shadow-lg"
        onMouseEnter={() => (hoverRef.current = true)} // Stops auto-slide on hover
        onMouseLeave={() => (hoverRef.current = false)} // Resumes auto-slide
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="border flex flex-col items-center bg-white bg-opacity-20 p-6 rounded-lg shadow-md cursor-pointer" whileHover={{ scale: 1.05 }}
          >
            {/* Project Image */}
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              className="border w-full md:w-3/4 h-64 object-cover rounded-md shadow-lg"
            />

            {/* Project Info */}
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-yellow-300">{projects[currentIndex].title}</h3>
              <p className="text-lg opacity-90">{projects[currentIndex].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="mt-6 flex justify-center space-x-3">
        {projects.map((_, index) => (
          <motion.span
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-yellow-400 scale-125" : "bg-gray-300"
            }`}
            animate={{ scale: index === currentIndex ? 1.3 : 1 }}
            transition={{ duration: 0.3 }}
          ></motion.span>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
