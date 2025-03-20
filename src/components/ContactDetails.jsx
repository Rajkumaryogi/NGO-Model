import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactDetails = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({}); // State for validation errors
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [apiError, setApiError] = useState(""); // State for API errors

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to validate form data
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Enter a valid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError(""); // Clear previous API errors
    setSuccessMessage(""); // Clear previous success message

    if (validateForm()) {
      try {
        // Send a POST request to the backend
        const response = await fetch("http://localhost:4001/api/sendMessageRoute/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData), // Send form data as JSON
        });

        const data = await response.json(); // Parse the response

        if (response.ok) {
          setSuccessMessage("🎉 Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Clear the form
          setErrors({}); // Clear validation errors
        } else {
          setApiError(data.message || "Something went wrong. Please try again."); // Set API error message
        }
      } catch (error) {
        console.error("Error sending message:", error);
        setApiError("Something went wrong. Please try again."); // Set generic error message
      }
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-green-500 flex flex-col">

      {/* Page Container */}
      <motion.div
        className="container mx-auto px-6 sm:px-12 lg:px-24 py-12"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Page Title */}
        <motion.h2
          className="text-5xl font-extrabold text-center mb-12 animate-fadeIn text-yellow-400"
          variants={fadeInUp}
        >
          Contact Us
        </motion.h2>
        <motion.p
          className="text-center text-white mt-2 text-lg"
          variants={fadeInUp}
        >
          Have questions? Feel free to reach out to us.
        </motion.p>

        {/* Contact Section */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={staggerContainer}
        >
          {/* Contact Form Section */}
          <motion.div
            className="bg-white p-8 shadow-2xl rounded-lg transition duration-300 hover:shadow-3xl"
            variants={staggerItem}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 drop-shadow-md">Send us a Message</h3>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div variants={staggerItem}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-green-500 transition"
                />
                {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
              </motion.div>

              {/* Email Input */}
              <motion.div variants={staggerItem}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-green-500 transition"
                />
                {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
              </motion.div>

              {/* Message Input */}
              <motion.div variants={staggerItem}>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-green-500 transition"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-2xl"
                variants={staggerItem}
              >
                Send Message
              </motion.button>
            </form>

            {/* Success Message */}
            {successMessage && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-green-600 text-center mt-4 font-semibold"
              >
                {successMessage}
              </motion.p>
            )}

            {/* API Error Message */}
            {apiError && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-red-500 text-center mt-4 font-semibold"
              >
                {apiError}
              </motion.p>
            )}
          </motion.div>

          {/* Google Maps & Office Address Section */}
          <motion.div
            className="flex flex-col space-y-6"
            variants={staggerContainer}
          >
            {/* Google Map */}
            <motion.div
              className="w-full h-64 rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition"
              variants={staggerItem}
            >
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095446!2d144.95373531550437!3d-37.817209742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727f49b68433d0!2sNGO%20Office!5e0!3m2!1sen!2sus!4v1614587191042!5m2!1sen!2sus"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </motion.div>

            {/* Office Address */}
            <motion.div
              className="bg-white p-8 shadow-2xl rounded-lg hover:shadow-3xl transition"
              variants={staggerItem}
            >
              <h3 className="text-2xl font-semibold text-gray-900 my-1">Our Office</h3>
              <p className="text-gray-600 mt-2 text-lg flex gap-2">
                <FaMapMarkerAlt className="mt-1" /> B116 Damodar Hostel, JNU, New Delhi, INDIA (110067)
              </p>
              <p className="text-gray-600 text-lg flex gap-2 my-2">
                <FaEnvelope className="mt-1" /> rajkumar6777y@gmail.com
              </p>
              <p className="text-gray-600 text-lg flex gap-2 my-2">
                <FaPhoneAlt className="mt-2" /> +91 97856 41782
              </p>

              {/* Social Media Icons */}
              <motion.div
                className="mt-6 flex justify-center md:justify-start space-x-4"
                variants={staggerItem}
              >
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 transition-colors duration-300"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700 transition-colors duration-300"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactDetails;