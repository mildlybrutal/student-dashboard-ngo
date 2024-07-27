import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-12 text-center">
          About Us
        </h1>

        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg p-8 mb-12 shadow-lg">
          <p className="text-xl text-white leading-relaxed">
            We are an NGO dedicated to supporting children from the
            North-Eastern states of India. Our mission is to empower these young
            minds through education, healthcare, and community development
            programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Our Vision
            </h2>
            <p className="text-gray-100">
              To create a brighter future for every child in the North-Eastern
              states, ensuring they have access to quality education and
              opportunities for growth.
            </p>
          </div>

          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Our Impact
            </h2>
            <ul className="list-disc list-inside text-gray-100">
              <li>Supported over 1000 children</li>
              <li>Established 10 community learning centers</li>
              <li>Provided healthcare services to 5000+ families</li>
            </ul>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-white border-opacity-30 rounded-lg p-6 text-center">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-white">
                Education First
              </h3>
            </div>
            <div className="border border-white border-opacity-30 rounded-lg p-6 text-center">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              <h3 className="text-xl font-semibold text-white">
                Healthcare Access
              </h3>
            </div>
            <div className="border border-white border-opacity-30 rounded-lg p-6 text-center">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-white">
                Community Empowerment
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
