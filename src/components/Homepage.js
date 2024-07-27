import React from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarausel";

const HomePage = () => {
  const carouselImages = [
    { src: require("../assets/images/img1.jpg"), alt: "Volunteers in action" },
    { src: require("../assets/images/img2.jpg"), alt: "Community outreach" },
    { src: require("../assets/images/img3.jpg"), alt: "Education program" },
  ];

  const studentCount = 150;

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md sticky top-0 z-50">
        {/* Add navigation menu items here */}
      </header>

      <div
        className="hero-section bg-cover bg-center h-screen flex items-center justify-center relative"
        style={{ backgroundImage: "url('/path-to-hero-image.jpg')" }}
      >
        <div className="text-center text-white z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-heading">
            Welcome to NGO
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-body">
            Empowering communities and changing lives
          </p>
          <Link
            to="/donate"
            className="bg-ngo-accent hover:bg-ngo-secondary text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg"
          >
            Donate Now
          </Link>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16">
          <ImageCarousel images={carouselImages} />
        </div>

        <div className="bg-ngo-primary text-white shadow-lg rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-4 font-heading">Our Impact</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-5xl font-bold">{studentCount}</p>
              <p className="text-xl">Students Supported</p>
            </div>
            <Link
              to="/our-students"
              className="bg-white text-ngo-primary hover:bg-ngo-secondary hover:text-white font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Meet Our Students
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon="🤝"
            title="Our Mission"
            description="We strive to create lasting change by addressing poverty, inequality, and social injustice."
          />
          <FeatureCard
            icon="🌱"
            title="Our Programs"
            description="From education to healthcare, we run diverse programs to support communities in need."
          />
          <FeatureCard
            icon="❤️"
            title="Get Involved"
            description="Join us as a volunteer, donor, or partner to make a difference in people's lives."
          />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center font-heading">
            How You Can Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HelpCard
              title="Donate"
              description="Your financial support helps us continue our mission."
              action="Donate Now"
              link="/donate"
            />
            <HelpCard
              title="Volunteer"
              description="Give your time and skills to make a difference."
              action="Join Us"
              link="/volunteer"
            />
            <HelpCard
              title="Spread the Word"
              description="Share our mission with your network."
              action="Share"
              link="#"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center font-heading">
            What People Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Testimonial
              quote="This NGO has changed my life. I'm now able to pursue my dreams."
              author="Sarah, Student"
            />
            <Testimonial
              quote="The dedication of the volunteers is truly inspiring."
              author="John, Donor"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 border-t-4 border-ngo-secondary">
    <div className="text-5xl mb-4 text-ngo-primary">{icon}</div>
    <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-heading">
      {title}
    </h2>
    <p className="text-gray-600 leading-relaxed font-body">{description}</p>
  </div>
);

const HelpCard = ({ title, description, action, link }) => (
  <div className="bg-white rounded-lg shadow-md p-6 text-center">
    <h3 className="text-xl font-semibold mb-3 font-heading">{title}</h3>
    <p className="text-gray-600 mb-4 font-body">{description}</p>
    <Link
      to={link}
      className="bg-ngo-primary text-white px-4 py-2 rounded-full inline-block hover:bg-ngo-secondary transition duration-300"
    >
      {action}
    </Link>
  </div>
);

const Testimonial = ({ quote, author }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <p className="text-gray-600 italic mb-4 font-body">"{quote}"</p>
    <p className="text-right font-semibold font-heading">- {author}</p>
  </div>
);

export default HomePage;
