import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-green-600 py-6 px-8">
          <h1 className="text-3xl font-bold text-white">Contact Us</h1>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-green-600 mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-2">
                <strong>Phone:</strong> 123-456-7890
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Email:</strong> info@ngo-example.org
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Address:</strong> 123 NGO Street, Cityville, State 12345
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-green-600 mb-4">
                Office Hours
              </h2>
              <p className="text-gray-600 mb-2">
                Monday - Friday: 9:00 AM - 5:00 PM
              </p>
              <p className="text-gray-600 mb-2">Saturday: 10:00 AM - 2:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-green-600 mb-4">
              Send Us a Message
            </h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500 mb-4"
              ></textarea>
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
