import React from "react";

import ContactCard from "../components/ContactCard";
import ContactDetails from "../components/ContactDetails";

const ContactUs = () => {
 
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-green-500 flex flex-col mt-10">

      {/* Our Team Container */}
      {/* Page Container */}
        <ContactCard />
        <ContactDetails/>      
    </div>
  );
};

export default ContactUs;