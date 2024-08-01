import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [adminToken, setAdminToken] = useState(
    localStorage.getItem("adminToken"),
  );

  const login = async (username, password) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/admin/login/",
        { username, password },
      );
      const token = response.data.token;
      setAdminToken(token);
      localStorage.setItem("adminToken", token);
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const logout = () => {
    setAdminToken(null);
    localStorage.removeItem("adminToken");
  };

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/students/", {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching students:", error);
      throw error;
    }
  };

  const fetchStudent = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/students/${id}/`,
        {
          headers: { Authorization: `Bearer ${adminToken}` },
        },
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching student:", error);
      throw error;
    }
  };

  const updateStudent = async (id, data) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/api/students/${id}/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${adminToken}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error("Error updating student:", error);
      throw error;
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/students/${id}/`, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
    } catch (error) {
      console.error("Error deleting student:", error);
      throw error;
    }
  };

  const addStudent = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/students/",
        data,
        {
          headers: {
            Authorization: `Bearer ${adminToken}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error("Error adding student:", error);
      throw error;
    }
  };

  return (
    <AdminContext.Provider
      value={{
        adminToken,
        login,
        logout,
        fetchStudents,
        fetchStudent,
        updateStudent,
        deleteStudent,
        addStudent,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
