import React from "react";
import { Link } from "react-router-dom";
import AdminStudentList from "./AdminStudentList";

const AdminDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="mb-6">
        <Link
          to="/admin/student/add"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Add New Student
        </Link>
      </div>
      <AdminStudentList />
    </div>
  );
};

export default AdminDashboard;
