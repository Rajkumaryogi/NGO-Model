import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaLightbulb } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const MissionVision = () => {
  const navigate = useNavigate(); //Create navigate function

  const handleClick = () => {
    navigate("/about"); // Navigate to '/about'
  };

  return (
    <section className="w-full py-16 bg-gradient-to-r from-blue-800 to-green-500 text-white text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Our Mission & Vision
      </motion.h2>

      {/* Container */}
      <div className="max-w-auto mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
        
        {/* Mission Section */}
        <motion.div
          className="border bg-white bg-opacity-20 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <FaHandsHelping className="text-yellow-300 text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Mission</h3>
          <p className="text-lg opacity-90">
          Our mission is to restore ecological balance and enhance environmental sustainability through afforestation, water conservation, and pond rejuvenation. We aim to empower communities by fostering active participation in waste management, horticulture, and educational initiatives. By driving innovation and research, we are committed to improving water quality and promoting long-term solutions for ecological health and community development.
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="border bg-white bg-opacity-20 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          
        >
          <FaLightbulb className="text-yellow-300 text-5xl mx-auto mb-4"  />
          <h3 className="text-2xl font-semibold mb-2">Vision</h3>
          <p className="text-lg opacity-90">
          Our vision is to create a world where ecosystems thrive in harmony with human development. We envision resilient communities actively engaged in preserving natural resources, where sustainable practices in afforestation, water conservation, and environmental restoration lead to healthier, more sustainable environments for future generations. Through education and innovation, we aspire to be leaders in driving positive environmental and societal change.
          </p>
        </motion.div>
      </div>

      {/* Read More Button */}
      <motion.button onClick={handleClick}
        className="mt-8 px-6 py-3 text-lg font-semibold bg-yellow-400 text-gray-800 rounded-full shadow-md hover:bg-yellow-500 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Read More
      </motion.button>
    </section>
  );
};

export default MissionVision;
