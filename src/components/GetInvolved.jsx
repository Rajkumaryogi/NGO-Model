import React from "react";
import { Link } from "react-router-dom";

const GetInvolved = () => {
  return (
    <section className=" w-full pb-10 bg-gradient-to-r from-blue-800 to-green-500 text-white text-center rounded-lg">
      <h2 className="text-3xl font-bold mb-6"
      >Get Involved & Make a Difference</h2>
      <p className="text-lg opacity-80 max-w-3xl mx-auto mb-8">
        Whether you want to volunteer, donate, or collaborate, your support can create meaningful change.
      </p>
      <div className="flex justify-center space-x-4">
        <Link to ='/join' className="px-6 py-2 bg-green-500 text-black font-bold rounded-lg hover:bg-green-600 transition ">
          Join Us
        </Link>
        <Link to = '/donate' className="px-4 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition text-justify-center">
          Donate
        </Link>
        <Link to ='/contact' className="px-3 py-2 bg-blue-600 text-black font-bold rounded-lg hover:bg-blue-700 transition">
          Partner With Us
        </Link>
      </div>
    </section>
  );
};

export default GetInvolved;
