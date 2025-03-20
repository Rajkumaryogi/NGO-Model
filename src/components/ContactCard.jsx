import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

// Import local images
import Nishant from "../assets/Nishant.webp";  
import Vikash from "../assets/Vikash.webp"; 
import Ramesh from "../assets/Ramesh.webp"; 
import Jayant from "../assets/Jayant.webp"; 
import Prinkesh from "../assets/Prinkesh.webp";
import Ansh from "../assets/Ansh.webp";
import Yogi from "../assets/Yogi.webp";

// Team members data
const teamMembers = [
  {
    name: "Kavi Nishant Bhardwaj",
    role: "Founder & CEO",
    image: Nishant,
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/kavi-nishant-bhardwaj-rajput-666957211/",
      twitter: "https://twitter.com/nishant",
      facebook: "https://facebook.com/nishant",
      instagram: "https://instagram.com/nishant",
    },
  },
  {
    name: "Vikash Kumar",
    role: "Director and Co-Founder",
    image: Vikash,
    socialMedia: {
      linkedin: "https://linkedin.com/in/vikash",
      twitter: "https://twitter.com/vikash",
      facebook: "https://facebook.com/vikash",
      instagram: "https://instagram.com/vikash",
    },
  },
  {
    name: "Ramesh Kumar",
    role: "Director and Co-Founder",
    image: Ramesh,
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/ramesh-kumar-7352a41a2/",
      twitter: "https://twitter.com/ramesh",
      facebook: "https://facebook.com/ramesh",
      instagram: "https://instagram.com/ramesh",
    },
  },
  {
    name: "Jayant Kumar",
    role: "Developer Lead",
    image: Jayant,
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/me-jayant/",
      twitter: "https://twitter.com/jayant",
      facebook: "https://facebook.com/jayant",
      instagram: "https://instagram.com/jayant",
    },
  },
  {
    name: "Prinkesh K. Singh",
    role: "Incharge Yoga and Naturopath",
    image: Prinkesh,
    socialMedia: {
      linkedin: "https://linkedin.com/in/prinkesh",
      twitter: "https://twitter.com/prinkesh",
      facebook: "https://facebook.com/prinkesh",
      instagram: "https://instagram.com/prinkesh",
    },
  },
  {
    name: "Ansh Raj",
    role: "'School Scholars' Coordinator",
    image: Ansh,
    socialMedia: {
      linkedin: "https://linkedin.com/in/ansh",
      twitter: "https://twitter.com/ansh",
      facebook: "https://facebook.com/ansh",
      instagram: "https://instagram.com/ansh",
    },
  },
  {
    name: "Rajkumar Yogi",
    role: "Developer",
    image: Yogi,
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/rajkumaryogi-jnu/",
      twitter: "https://x.com/rajkumar6777y",
      facebook: "https://www.facebook.com/raj.yogi.1811",
      instagram: "https://instagram.com/raj__yogii",
    },
    
  },
];

const ContactCard = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-green-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 animate-fadeIn text-yellow-400">Meet Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Team Member Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover"
              />

              {/* Team Member Details */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{member.role}</p>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-4 mt-4">
                  <a
                    href={member.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={member.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </a>
                  <a
                    href={member.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 transition-colors duration-300"
                  >
                    <FaFacebook className="w-6 h-6" />
                  </a>
                  <a
                    href={member.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-700 transition-colors duration-300"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCard;