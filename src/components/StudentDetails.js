import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const StudentDetails = () => {
  const { id } = useParams();
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/students/${id}/`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched student data:", data);
        setStudentData(data);
      } catch (error) {
        console.error("Error fetching student details:", error);
        setError("Failed to load student data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, [id]);

  const parseAchievements = (achievements) => {
    if (!achievements || achievements.length === 0) {
      return [];
    }

    try {
      return achievements
        .map((item) => item.replace(/\\|"/g, ""))
        .map((item) => item.replace(/^\[|\]$/g, ""))
        .map((item) => item.replace(/^\[|\]$/g, ""))
        .map((item) => item.split(",").map((i) => i.trim()))
        .flat();
    } catch (error) {
      console.error("Error parsing achievements:", error);
      return [];
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-2xl font-semibold text-gray-700">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-2xl font-semibold text-red-600">{error}</div>
      </div>
    );
  }

  if (!studentData) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-2xl font-semibold text-gray-700">
          No student data found.
        </div>
      </div>
    );
  }

  const {
    name,
    age,
    date_of_birth,
    latitude,
    longitude,
    achievements,
    aboutUs,
    image,
    gallery,
  } = studentData;
  const parsedAchievements = parseAchievements(achievements);

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-ngo-primary to-ngo-secondary rounded-t-lg overflow-hidden">
          <div className="px-8 py-12 md:flex md:items-center">
            {image && (
              <img
                src={image}
                alt={`${name}'s profile`}
                className="w-48 h-48 rounded-full object-cover mx-auto md:mx-0 md:mr-10 border-4 border-white shadow-lg"
              />
            )}
            <div className="mt-6 md:mt-0 text-center md:text-left">
              <h1 className="text-5xl font-extrabold text-white mb-2 font-heading">
                {name}
              </h1>
              <p className="text-ngo-accent text-2xl font-semibold">
                Age: {age}
              </p>
              <p className="text-white text-xl">
                Date of Birth: {date_of_birth}
              </p>
              <p className="text-white text-xl">
                Location: {latitude}, {longitude}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-xl p-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-heading">
              Achievements
            </h2>
            <div className="bg-green-100 rounded-lg p-6">
              {parsedAchievements.length > 0 ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {parsedAchievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700 font-body">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 font-body italic">
                  No achievements listed yet. Great things are coming!
                </p>
              )}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-heading">
              About {name}
            </h2>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-600 leading-relaxed font-body text-lg">
                {aboutUs || "No information provided."}
              </p>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-heading">
              Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {gallery && gallery.length > 0 ? (
                gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                ))
              ) : (
                <p className="text-gray-600 font-body italic">
                  No gallery images available.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
