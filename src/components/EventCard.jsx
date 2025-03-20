import React from "react";

const EventCard = ({ event }) => {
  return (
    // Event Card Container with Hover Effect
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
      
      {/* Event Image */}
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-56 object-cover"
        />
        
        {/* Event Date - Positioned at the Top Left */}
        <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 text-sm font-semibold rounded-lg shadow-md">
          {event.date}
        </div>
      </div>

      {/* Event Details Section */}
      <div className="p-5">
        {/* Event Title */}
        <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>

        {/* Event Description - Limited to 3 lines */}
        <p className="text-gray-700 text-sm mt-2 line-clamp-3">
          {event.description}
        </p>

        {/* Location & Time */}
        <div className="mt-3 flex flex-wrap items-center text-sm text-gray-500">
          <span className="mr-4 flex items-center">
            <i className="fas fa-map-marker-alt mr-2"></i>
            {event.location}
          </span>
          <span className="flex items-center">
            <i className="fas fa-clock mr-2"></i>
            {event.time}
          </span>
        </div>

        {/* CTA Button */}
        <a href={event.link} 
          className="mt-4 inline-block bg-green-600 text-white text-center py-2 px-4 rounded-lg font-semibold text-sm hover:bg-green-700 transition w-full"
        >
          Join Event
        </a>
      </div>
    </div>
  );
};

export default EventCard;
