import React from "react";
import "./Services.css"; // Import CSS for styling

const Services = () => {
  const services = [
    {
      title: " Checkup",
      description: "Get a free health checkup at our partnered clinics.",
    },
    {
      title: "Explore Doctors",
      description: "Find and consult with experienced doctors.",
    },
    {
      title: "Medicine",
      description: "Order prescribed medicines online with doorstep delivery.",
    },
    {
      title: "Book Doctors",
      description: "Easily book an appointment with specialists.",
    },
    {
      title: " Emergency Support",
      description: "Access emergency healthcare support anytime, anywhere.",
    },
    {
      title: "Health & Wellness Blog",
      description: "Stay informed with expert health tips and articles.",
    },
  ];

  return (
    <div className="services-container">
      <h1>Our Services & Features</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
