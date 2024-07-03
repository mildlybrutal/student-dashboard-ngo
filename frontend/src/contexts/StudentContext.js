import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Adjust if your URL is different

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
	const [students, setStudents] = useState([]);

	const fetchStudents = async () => {
		try {
			const response = await axios.get(`${API_BASE_URL}/students`);
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
			const response = await axios.post(`${API_BASE_URL}/students`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			setStudents((prevStudents) => [...prevStudents, response.data]);
			return response.data;
		} catch (error) {
			console.error("Error adding student:", error);
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
