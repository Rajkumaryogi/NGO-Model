import React, { useState } from "react";
import ServicesCard from "../components/ServicesCard";
import ServicesCarousel from "../components/ServicesCarousel";
import ServicesDetails from "../components/ServicesDetails";
import { Link } from "react-router-dom";
import GetInvolved from "../components/GetInvolved";

const services = [
  { title: "Healthcare Assistance", description: "Providing free medical checkups & healthcare aid.", icon: "🏥" },
  { title: "Environmental Protection", description: "Conducting tree plantations & eco-awareness programs.", icon: "🌱" },
  { title: "Education for All", description: "Ensuring quality education for underprivileged children.", icon: "📚" },
  { title: "Blood Donation Drives", description: "Encouraging voluntary blood donations to save lives.", icon: "🩸" },
  { title: "Legal Aid & Awareness", description: "Providing free legal advice & rights awareness.", icon: "⚖️" },
  { title: "Orphan & Elderly Care", description: "Supporting orphans & elderly with food and shelter.", icon: "👩‍👦" },
];

const Services = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className=" mt-16 pt-8 w-full min-h-screen bg-gradient-to-r from-blue-600 to-green-500 text-white pb-1 px-1">
      {/* Hero Section */}
      <div className="text-center"
       initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>
        <h1 className="text-5xl font-extrabold mb-4 animate-fadeIn text-yellow-400">Our Services</h1>
        <p className="text-lg max-w-3xl mx-auto mb-8">Join us in making a difference through impactful initiatives.</p>
        <Link to ='/join' className=" px-6 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition">Get Involved</Link>
      </div>

      {/* Services Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <ServicesCard service={service} isHovered={hoverIndex === index} />
          </div>
        ))}
      </div>

      {/* Featured Services Carousel */}
      <ServicesCarousel services={services} />

      {/* How We Work */}
      <ServicesDetails />

      {/* Call to Action */}
      <div className="w-full my-10 py-6 bg-gradient-to-r from-blue-800 to-green-500 text-white text-center border rounded-lg">
      <GetInvolved/>
      </div>
      {/* <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-yellow-300">Get Involved</h2>
        <p className="text-lg opacity-80 max-w-3xl mx-auto">Be a part of the change – volunteer, donate, or spread awareness.</p>
        <div className="flex justify-center gap-6 mt-6">
          <Link to ='/join' className="px-6 py-3 bg-green-600 text-black font-bold rounded-lg hover:bg-green-800 transition">Volunteer</Link>
          <Link to ='/donate' className="px-6 py-3 bg-yellow-500 font-bold rounded-lg hover:bg-yellow-600 text-black transition">Donate Now</Link>
          <Link to ='/contact' className="px-6 py-3 bg-blue-600 text-black font-bold rounded-lg hover:bg-blue-700 transition">
            Partner With Us
          </Link>
          
        </div>
      </div> */}
    </section>
  );
};

export default Services;



