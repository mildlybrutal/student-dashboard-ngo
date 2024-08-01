import React, { useEffect } from "react";
import StudentList from "./StudentList";
import { useStudents } from "../contexts/StudentContext";

const Body = () => {
  const { students, fetchStudents } = useStudents();

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-ngo-primary to-ngo-secondary p-8">
          <h1 className="text-4xl font-extrabold text-white mb-2 font-heading">
            Our Students
          </h1>
          <p className="text-ngo-accent text-lg">
            Empowering the future, one student at a time
          </p>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {students.map((student) => (
              <StudentList key={student.id} studentdata={student} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
