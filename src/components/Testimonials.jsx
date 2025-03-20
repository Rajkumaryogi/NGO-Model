import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Pankaj from "../assets/Dr.Pankaj.webp"

const testimonials = [
  {
    name: "Anjali Sharma",
    feedback:
      "Thanks to Dharti Foundation, my village now has access to free healthcare services. Truly life-changing!",
    image: "/images/user1.jpg",
  },
  {
    name: "Dr. Pankaj Kumar Gupta",
    feedback:
      "Volunteering here has been the most fulfilling experience of my life. The impact is real!",
    image: Pankaj ,
  },
  {
    name: "Priya Verma",
    feedback:
      "The educational support given to underprivileged children is outstanding. I am proud to be a donor.",
    image: "/images/user3.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hoverRef = useRef(false); // Ref to track hover state

  useEffect(() => {
    const changeTestimonial = () => {
      if (!hoverRef.current) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }
    };

    const interval = setInterval(changeTestimonial, 5000); // Auto-slide every 5s

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="w-full py-16 bg-gradient-to-r from-blue-800 to-green-500 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">What People Say About Us</h2>

      {/* Testimonial Carousel */}
      <div
        className="border relative max-w-3xl mx-auto overflow-hidden p-6 rounded-xl shadow-lg"
        onMouseEnter={() => (hoverRef.current = true)} // Hover stops auto-slide
        onMouseLeave={() => (hoverRef.current = false)} // Resume auto-slide on leave
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            
            className="border flex flex-col items-center p-6 bg-gradient-to-r from-blue-800 to-green-500 text-white rounded-lg shadow-md"
          >
            {/* User Image */}
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-24 h-24 rounded-full shadow-md mb-4"
            />

            {/* Feedback */}
            <p className="text-lg italic max-w-xl px-4">"{testimonials[currentIndex].feedback}"</p>

            {/* Name */}
            <h3 className="text-xl font-semibold mt-4 text-yellow-400">
              {testimonials[currentIndex].name}
            </h3>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="mt-6 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.1 }}
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

export default Testimonials;
