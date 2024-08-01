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
    <div className="bg-gray-100">
      <section className="relative">
        <ImageCarousel images={carouselImages} />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white z-10 max-w-3xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Welcome to <span className="text-yellow-400">NGO</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10">
              Empowering communities and changing lives, one step at a time
            </p>
            <Link
              to="/donate"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition duration-300 text-lg inline-block"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-2xl rounded-lg p-10 mb-20">
          <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <p className="text-6xl font-bold mb-2">{studentCount}</p>
              <p className="text-2xl">Students Supported</p>
            </div>
            <Link
              to="/our-students"
              className="bg-white text-blue-600 hover:bg-yellow-400 hover:text-blue-800 font-bold py-3 px-8 rounded-full transition duration-300 text-lg"
            >
              Meet Our Students
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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

        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
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
              link="/contact"
            />
            <HelpCard
              title="Spread the Word"
              description="Share our mission with your network."
              action="Learn More"
              link="/about"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
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
  <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300 border-t-4 border-blue-500 transform hover:-translate-y-1">
    <div className="text-5xl mb-4 text-blue-600">{icon}</div>
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const HelpCard = ({ title, description, action, link }) => (
  <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
    <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <Link
      to={link}
      className="bg-blue-600 text-white px-6 py-3 rounded-full inline-block hover:bg-blue-700 transition duration-300 font-bold"
    >
      {action}
    </Link>
  </div>
);

const Testimonial = ({ quote, author }) => (
  <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
    <p className="text-gray-600 italic mb-6 text-lg">"{quote}"</p>
    <p className="text-right font-semibold text-blue-600">- {author}</p>
  </div>
);

export default HomePage;
