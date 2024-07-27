import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import StudentList from "./StudentList";
import StudentDetails from "./StudentDetails";
import AdminStudentForm from "./AdminStudentForm";

const StudentManager = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8000/api/students/");
      setStudents(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching students:", error);
      setError("Failed to load students. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-ngo-primary mb-8">
              Student Management
            </h1>
            <AdminStudentForm onStudentAdded={fetchStudents} />
            {loading ? (
              <div className="text-center py-8">
                <p className="text-xl text-gray-600">Loading students...</p>
              </div>
            ) : error ? (
              <div className="text-center py-8">
                <p className="text-xl text-red-600">{error}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {students.map((student) => (
                  <StudentList key={student.id} studentdata={student} />
                ))}
              </div>
            )}
          </div>
        }
      />
      <Route path="/student/:id" element={<StudentDetails />} />
    </Routes>
  );
};

export default StudentManager;
