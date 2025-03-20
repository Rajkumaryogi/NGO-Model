import React, { useRef } from "react";
import { motion } from "framer-motion";
import home1 from "../assets/home.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import home4 from "../assets/home4.jpg";

const images = [home1, home2, home3, home4];

const HeroSection = () => {
  const carouselRef = useRef(null); // Reference for drag constraints

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"></div>

      {/* Image Carousel (Auto-Scroll + Drag) */}
      <motion.div
        ref={carouselRef} // Attach ref to the div
        className="absolute flex space-x-8 w-[400%] h-full items-center cursor-grab active:cursor-grabbing"
        animate={{ x: ["0%", "-100%"] }} // Auto-scroll effect
        transition={{
          repeat: Infinity,
          duration: 20, // Adjust speed
          ease: "linear",
        }}
        whileHover={{ animationPlayState: "paused" }} // Pause on hover
        drag="x" // Enable drag movement
        dragConstraints={{ left:-1500, right: 0 }} // Limits drag area
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="relative w-[100vw] h-full flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.05 }} // Scale effect on hover
          >
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </motion.div>

      {/* Hero Text Overlay */}
      <div className="absolute z-20 text-white text-center px-6 sm:px-12">
        <h1 className="text-4xl sm:text-6xl font-bold animate-fadeInUp">
          Empower. <span className="text-yellow-400">Inspire.</span> Transform.
        </h1>
        <p className="mt-4 text-lg sm:text-xl opacity-90 animate-fadeInUp delay-200">
          Join hands with us to create a <span className="font-semibold text-yellow-400">positive impact</span> in the world.
        </p>
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="/donate"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-yellow-500 transform hover:scale-105 transition"
          >
            Donate Now
          </a>
          <a
            href="/volunteer"
            className="border-2 border-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transform hover:scale-105 transition"
          >
            Join Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
