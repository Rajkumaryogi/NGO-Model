import React from "react";

const steps = [
  { step: "Step 1", title: "Identify Social Issues", icon: "🔍" },
  { step: "Step 2", title: "Organize Events & Awareness", icon: "📢" },
  { step: "Step 3", title: "Raise Funds & Volunteer Support", icon: "🤝" },
  { step: "Step 4", title: "Execute & Track Impact", icon: "📈" },
];

const ServicesDetails = () => {
  return (
    <div className="max-w-6xl mx-auto mt-12 text-center">
      <h2 className="text-3xl font-bold text-yellow-300 mb-8">How We Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="p-6 bg-white bg-opacity-20 rounded-xl shadow-lg transform transition-all hover:scale-105 border">
            <div className="text-5xl mb-3">{step.icon}</div>
            <h3 className="text-xl font-semibold text-yellow-300">{step.step}</h3>
            <p className="text-lg opacity-80">{step.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesDetails;
