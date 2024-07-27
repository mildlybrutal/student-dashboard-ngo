import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/students/`);
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const addStudent = async (formData) => {
    try {
      const data = new FormData();
      for (let key in formData) {
        if (key === "image" && formData[key]) {
          data.append(key, formData[key], formData[key].name);
        } else if (key === "achievements") {
          // Split achievements into an array
          const achievementsArray = formData[key]
            .split(",")
            .map((item) => item.trim());
          data.append(key, JSON.stringify(achievementsArray));
        } else {
          data.append(key, formData[key]);
        }
      }

      console.log("Sending data:", Object.fromEntries(data));
      const response = await axios.post(`${API_BASE_URL}/students/`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Add student response:", response.data);
      setStudents((prevStudents) => [...prevStudents, response.data]);
      return response.data;
    } catch (error) {
      console.error(
        "Error adding student:",
        error.response ? error.response.data : error.message,
      );
      throw error;
    }
  };

  return (
    <StudentContext.Provider value={{ students, fetchStudents, addStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudents = () => useContext(StudentContext);
