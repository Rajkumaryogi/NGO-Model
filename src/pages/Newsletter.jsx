import React, { useState } from "react";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    email: "", // Only email field is needed
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
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = "Enter a valid email";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError(""); // Clear previous API errors
    if (validateForm()) {
      try {
        const response = await fetch("https://ngo-model-backend.vercel.app/api/newsLatter/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: formData.email }), // Send email in the request body
        });

        const data = await response.json();
        if (response.ok) {
          setSuccessMessage("🎉 Subscribed Successfully!");
          setFormData({ email: "" }); // Clear the form
          setErrors({});
        } else {
          setApiError(data.message); // Set API error message
        }
      } catch (error) {
        console.error("Error in subscribing:", error);
        setApiError("Something went wrong. Try again later!"); // Set generic error message
      }
      setTimeout(() => setSuccessMessage(""), 4000); // Hide success message after 3 sec
    }
  };

  return (
    <div className="">
      <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 items-center">
        {/* Email Input */}
        <input
          type="email"
          name="email" // Add name attribute
          placeholder="Enter your email"
          value={formData.email} // Bind to email state
          onChange={handleChange}
          className="w-full px-4 py-2 text-black rounded-md focus:outline-none"
        />
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500 transition"
        >
          Subscribe
        </button>
      </form>

      {/* Success Message */}
      {successMessage && (
        <p className="text-green-900 text-center mt-2 font-semibold">
          {successMessage}
        </p>
      )}

      {/* Error Message */}
      {apiError && (
        <p className="text-red-600 text-center mt-2 font-semibold">
          {apiError}
        </p>
      )}

      {/* Validation Error */}
      {errors.email && (
        <p className="text-red-500 text-sm mt-2">{errors.email}</p>
      )}
    </div>
  );
};

export default Newsletter;