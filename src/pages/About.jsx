
import React from "react";
import { motion } from "framer-motion";
import ContactCard from "../components/ContactCard"
import GetInvolved from "../components/GetInvolved";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const AboutUs = () => {
  

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-green-500 flex flex-col text-white mt-16 px-3">
    <motion.section initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} 
        whileHover={{ animationPlayState: "paused"}} className="text-center mb-12 p-8 rounded-lg m-w-">
          <h2 className="text-5xl font-extrabold text-center mb-8 animate-fadeIn text-yellow-400">About Us</h2>
          <p className=" text-2xl font-semibold text-yellow-900">
          Dharti International: Advancing Ecological Restoration and Sustainable Development through Community and Innovation
          </p>
          <p className="text-lg mt-4">Committed to enhancing ecological balance, Green Horizon promotes afforestation, water conservation, and pond restoration. We engage communities in sustainable practices such as solid waste management and horticulture, while fostering environmental awareness through education. With a strong focus on research and innovation, we aim to create lasting positive impacts on both ecosystems and communities.
          </p>
        </motion.section>

      {/* Page Container */}
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 py-12">
        {/* Mission */}
        <motion.section initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} 
        whileHover={{ animationPlayState: "paused" , scale:1.05}} className="text-center mb-12 p-8 to-blue-800 rounded-lg border ">
          <h4 className="text-3xl font-semibold drop-shadow-md text-yellow-400">Mission</h4>
          <p className="text-lg mt-4">Our mission is to restore ecological balance and enhance environmental sustainability through afforestation, water conservation, and pond rejuvenation. We aim to empower communities by fostering active participation in waste management, horticulture, and educational initiatives. By driving innovation and research, we are committed to improving water quality and promoting long-term solutions for ecological health and community development. </p>
        </motion.section>

         {/*Vision */}
        <motion.section initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} 
        whileHover={{ animationPlayState: "paused" , scale:1.05}} className="text-center mb-12 p-8 rounded-lg border ">
          <h4 className="text-3xl font-semibold drop-shadow-md text-yellow-400">Vision</h4>
          <p className="text-lg mt-4">Our vision is to create a world where ecosystems thrive in harmony with human development. We envision resilient communities actively engaged in preserving natural resources, where sustainable practices in afforestation, water conservation, and environmental restoration lead to healthier, more sustainable environments for future generations. Through education and innovation, we aspire to be leaders in driving positive environmental and societal change. </p>
        </motion.section>

        {/* From desk */}
        <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        whileHover={{ animationPlayState: "paused" , scale:1.05}} className="bg-gradient-to-b from-green-500 to-blue-800 p-8 shadow-2xl rounded-lg text-center mb-12 border ">
          <h3 className="text-3xl font-semibold text-yellow-400">From the Desk of Kavi Nishant Bhardwaj Rajput Founder, Dharti International Foundation</h3>
          <p className="text-lg mt-4">Welcome to Dharti International Foundation (DIF), where our guiding principle is to address the urgent environmental crises of today and secure a sustainable future for tomorrow. As the founder, I am both proud of our achievements and deeply aware of the challenges ahead as we confront the mounting threats to our planet. At DIF, we recognize that the environmental problems we face—rising temperatures, deforestation, water scarcity, and biodiversity loss—require bold, coordinated action. Our focus is on implementing real-world solutions that address the root causes of environmental degradation. Whether it's through our large-scale afforestation efforts like the "Mission 500 Crore Plantation Drive," water body rejuvenation under the Save River Campaign, or the promotion of sustainable agricultural practices, every initiative is designed to make a lasting impact. The scale of the environmental challenges before us is immense, but we are undeterred. Our work is built on collaboration—partnering with academic institutions, governments, and grassroots organizations. The path forward demands not just awareness, but bold, immediate action. Join Us: Whether you are an individual, business, or institution, you have a vital role to play. I invite you to be part of our journey toward a greener and healthier world. Together, we can turn the tide on environmental destruction and create a future where human well-being is aligned with the health of our planet. Thank you for being a part of this movement.</p>
        </motion.section>

         {/* History Section */}
        <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        whileHover={{ animationPlayState: "paused" , scale:1.05}} className="bg-gradient-to-b from-green-500 to-blue-800 p-8 shadow-2xl rounded-lg text-center mb-12 border ">
          <h3 className="text-3xl font-semibold drop-shadow-md text-yellow-400">History</h3>
          <p className="text-lg mt-4">Since 2010, we've impacted over 50,000 lives through our programs and community efforts.</p>
        </motion.section>

        

        {/* Call to Action */}
        <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        whileHover={{ animationPlayState: "paused" , scale:1.05}} className="bg-gradient-to-r from-blue-600 to-green-500 text-black text-center  rounded-lg shadow-xl hover:shadow-xl transition border  ">
        {/* Meet Our Team*/}
        <ContactCard />
        <GetInvolved/>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutUs;
