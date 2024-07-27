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

  const { name, age, achievements, aboutUs, image } = studentData;
  const parsedAchievements = parseAchievements(achievements);

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-ngo-primary px-6 py-8 md:flex md:items-center">
          {image && (
            <img
              src={image}
              alt={`${name}'s profile`}
              className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0 md:mr-8 border-4 border-white shadow-lg"
            />
          )}
          <div className="mt-4 md:mt-0">
            <h1 className="text-4xl font-bold text-white text-center md:text-left font-heading">
              {name}
            </h1>
            <p className="text-ngo-accent mt-2 text-xl text-center md:text-left font-body">
              Age: {age}
            </p>
          </div>
        </div>
        <div className="px-6 py-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-heading">
              Achievements
            </h2>
            <div className="bg-green-100 rounded-lg p-4">
              {parsedAchievements.length > 0 ? (
                <ul className="list-disc list-inside text-gray-700 font-body">
                  {parsedAchievements.map((achievement, index) => (
                    <li key={index} className="mb-2">
                      {achievement}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 font-body">
                  No achievements listed
                </p>
              )}
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-heading">
            About {name}
          </h2>
          <p className="text-gray-600 leading-relaxed bg-gray-100 p-4 rounded-lg font-body">
            {aboutUs || "No information provided."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
