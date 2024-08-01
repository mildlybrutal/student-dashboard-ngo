import React from "react";
import { Link } from "react-router-dom";

const StudentList = ({ studentdata }) => {
  const { name, id, image, age } = studentdata;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="bg-blue-600 h-40 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={`${name}'s profile`}
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-blue-400 flex items-center justify-center text-white text-4xl font-bold">
            {name[0]}
          </div>
        )}
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800 font-serif">
          {name}
        </h2>
        <p className="text-center text-gray-600 mb-4 font-sans">Age: {age}</p>
        <Link
          to={`/student/${id}`}
          className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 text-center font-sans"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default StudentList;
