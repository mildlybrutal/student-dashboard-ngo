import React, { useState } from "react";
import { useStudents } from "../contexts/StudentContext";

const AdminStudentForm = () => {
  const { addStudent } = useStudents();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    achievements: "",
    aboutUs: "",
    image: null,
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const achievementsArray = formData.achievements
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== "");
      const dataToSend = {
        ...formData,
        achievements: JSON.stringify(achievementsArray),
      };
      const result = await addStudent(dataToSend);
      console.log("Add student result:", result);
      setMessage("Student added successfully!");
      setFormData({
        name: "",
        age: "",
        achievements: "",
        aboutUs: "",
        image: null,
      });
    } catch (error) {
      setMessage("Error adding student. Please try again.");
      console.error("Error adding student:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full px-3 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ngo-primary"
            />
            <span className="absolute left-3 top-2 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="age"
            className="block text-gray-700 font-semibold mb-2"
          >
            Age
          </label>
          <div className="relative">
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Age"
              required
              className="w-full px-3 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ngo-primary"
            />
            <span className="absolute left-3 top-2 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="achievements"
          className="block text-gray-700 font-semibold mb-2"
        >
          Achievements
        </label>
        <input
          type="text"
          id="achievements"
          name="achievements"
          value={formData.achievements}
          onChange={handleChange}
          placeholder="Achievements (comma-separated)"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ngo-primary"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="aboutUs"
          className="block text-gray-700 font-semibold mb-2"
        >
          About the student
        </label>
        <textarea
          id="aboutUs"
          name="aboutUs"
          value={formData.aboutUs}
          onChange={handleChange}
          placeholder="About the student"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ngo-primary"
          rows="4"
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          htmlFor="image"
          className="block text-gray-700 font-semibold mb-2"
        >
          Student Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleChange}
          accept="image/*"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ngo-primary"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-ngo-primary hover:bg-ngo-secondary text-white font-bold py-3 px-4 rounded-lg transition duration-300 mt-6"
      >
        Add Student
      </button>
      {message && (
        <p className="mt-4 text-center font-semibold text-green-600">
          {message}
        </p>
      )}
    </form>
  );
};

export default AdminStudentForm;
