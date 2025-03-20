import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-6">
      
      {/* Animated 404 Text */}
      <motion.h1
        className="text-7xl sm:text-9xl font-bold text-gray-800"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>

      {/* Error Message */}
      <motion.p
        className="text-xl sm:text-2xl text-gray-600 mt-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>

      {/* Home Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Link
          to="/"
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md 
          hover:bg-blue-700 transition duration-300"
        >
          Go Back Home
        </Link>
      </motion.div>

      {/* Floating Animation */}
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rounded-full opacity-50"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      ></motion.div>

      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 bg-green-500 rounded-full opacity-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      ></motion.div>
    </div>
  );
};

export default NotFound;
