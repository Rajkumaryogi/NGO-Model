import React, { useState } from "react";
import { motion } from "framer-motion";

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dob: "",
    address: "",
    email: "",
    occupation: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [apiError, setApiError] = useState(""); // State for API errors

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.match(/^\d{10}$/))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!formData.dob) newErrors.dob = "Date of Birth is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Enter a valid email";
    if (!formData.occupation.trim())
      newErrors.occupation = "Occupation is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError(""); // Clear previous API errors
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:4001/api/volunteers/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
          setSuccessMessage("🎉 Registration Successful!");
          setFormData({
            name: "",
            phone: "",
            dob: "",
            address: "",
            email: "",
            occupation: "",
          });
          setErrors({});
        } else {
          setApiError(data.message); // Set API error message
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setApiError("Something went wrong. Try again later!"); // Set generic error message
      }
      setTimeout(() => setSuccessMessage(""), 4001); // Hide success message after 3 sec
    }
  };

  return (
    <div className="border flex justify-center items-center bg-gradient-to-r from-blue-600 to-green-500 mt-16 py-8 px-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-2xl rounded-2xl p-6 max-w-2xl w-full"
      >
        <h3 className="text-3xl font-bold text-center mb-6 text-yellow-600">
          Registration Form
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Phone Number", name: "phone", type: "text" },
            { label: "Date of Birth", name: "dob", type: "date" },
            { label: "Email ID", name: "email", type: "email" },
            { label: "Occupation", name: "occupation", type: "text" },
          ].map((field, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <label className="block font-semibold">{field.label}:</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 transition-all duration-200 shadow-md"
              />
              {errors[field.name] && (
                <p className="text-red-500 text-sm">{errors[field.name]}</p>
              )}
            </motion.div>
          ))}

          {/* Address Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <label className="block font-semibold">Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 transition-all duration-200 shadow-md"
            ></textarea>
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </motion.div>

          {/* Success message */}
          {successMessage && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-green-600 text-center mb-4 font-semibold"
            >
              {successMessage}
            </motion.p>
          )}

          {/* API Error message */}
          {apiError && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-red-500 text-center mb-4 font-semibold"
            >
              {apiError}
            </motion.p>
          )}

          {/* Submit Button with Animation */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-yellow-600 text-white py-2 rounded-lg shadow-lg hover:bg-yellow-700 transition-all duration-200"
          >
            Register
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default JoinUs;