import EventCard from "./EventCard";

const events = [
  {
    title: "Food Drive for the Homeless",
    description: "Join us in distributing food to those in need. Let's make a difference together.",
    date: "March 10, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Community Center, NY",
    image: "/event1.jpg",
    link: "/event-details"
  },
  {
    title: "Tree Plantation Drive",
    description: "Help us plant 500+ trees in the local community to fight climate change.",
    date: "March 15, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "Central Park, NY",
    image: "/event2.jpg",
    link: "/event-details"
  }
];

const Events = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
};

export default Events;
