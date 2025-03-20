import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube} from "react-icons/fa";

// Statistics Data
const stats = [
  { title: "Volunteers", value: "10,000+", icon: "🤝" },
  { title: "Funds Raised", value: "$5M+", icon: "💰" },
  { title: "Lives Impacted", value: "500,000+", icon: "❤️" },
  { title: "Projects Completed", value: "120+", icon: "📌" },
];

const ImpactStats2 = () => {
  return (
    <section className="w-full pt-2  bg-gradient-to-r from-blue-800 to-green-500 text-white text-center">
    {/* Social Media Icons */}
    <div className=" flex justify-center md:justify-end px-4 space-x-4 text-black">
              <a href="https://www.facebook.com/raj.yogi.1811"
                 target="_blank"
                 rel="noopener noreferrer"
               className="text-4xl hover:text-red-700 transition transform hover:scale-110"><FaYoutube /></a>
              <a href="https://www.facebook.com/raj.yogi.1811"
                 target="_blank"
                 rel="noopener noreferrer"
               className="text-4xl hover:text-blue-800 transition transform hover:scale-110"><FaFacebook /></a>
              
              <a href="https://x.com/rajkumar6777y"
                 target="_blank"
                 rel="noopener noreferrer"
               className="text-4xl hover:text-blue-500 transition transform hover:scale-110"><FaTwitter /></a>
              <a href="https://www.instagram.com/raj__yogii/"
                 target="_blank"
                 rel="noopener noreferrer"
                  className="text-4xl hover:text-purple-600 transition transform hover:scale-110"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/rajkumaryogi-jnu/" 
                 target="_blank"
                 rel="noopener noreferrer"
                  className="text-4xl hover:text-blue-900 transition transform hover:scale-110"><FaLinkedin /></a>
            </div>

      {/* Section Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 mt-3"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Our Impact
      </motion.h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="border p-6 bg-white bg-opacity-20 rounded-xl shadow-lg text-center cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.05, ease: "easeOut", delay: index * 0.2 }}
            whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.3)" }}
          >
            {/* Icon */}
            <motion.div
              className="text-6xl mb-3"
              whileHover={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.4 }}
            >
              {stat.icon}
            </motion.div>

            {/* Stats */}
            <h3 className="text-2xl font-bold text-yellow-400">{stat.value}</h3>
            <p className="text-lg opacity-90">{stat.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStats2;
