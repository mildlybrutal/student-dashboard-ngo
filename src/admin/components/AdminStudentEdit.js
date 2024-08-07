import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAdmin } from "../contexts/AdminContext";
import AdminNavBar from "./AdminNavBar";

const AdminStudentEdit = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { fetchStudent, updateStudent } = useAdmin();
	const [student, setStudent] = useState({
		name: "",
		age: "",
		achievements: "",
		aboutUs: "",
		image: null,
	});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const loadStudent = async () => {
			try {
				const data = await fetchStudent(id);
				setStudent({
					...data,
					achievements: Array.isArray(data.achievements)
						? data.achievements.join(", ")
						: data.achievements,
				});
				setLoading(false);
			} catch (err) {
				setError("Failed to load student");
				setLoading(false);
			}
		};
		loadStudent();
	}, [id, fetchStudent]);

	const handleChange = (e) => {
		const { name, value, files } = e.target;
		setStudent((prev) => ({
			...prev,
			[name]: files ? files[0] : value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const formData = new FormData();
			for (const key in student) {
				if (key === "achievements") {
					formData.append(
						key,
						JSON.stringify(student[key].split(",").map((item) => item.trim()))
					);
				} else {
					formData.append(key, student[key]);
				}
			}
			await updateStudent(id, formData);
			navigate("/admin/dashboard");
		} catch (err) {
			setError("Failed to update student");
		}
	};

	if (loading) return <div>Loading...</div>;
	if (error) return <div className="text-red-500">{error}</div>;

	return (
		<div>
			<div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
				<h2 className="text-2xl font-bold mb-6">Edit Student</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							htmlFor="name"
							className="block text-gray-700 font-bold mb-2"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={student.name}
							onChange={handleChange}
							className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="age" className="block text-gray-700 font-bold mb-2">
							Age
						</label>
						<input
							type="number"
							id="age"
							name="age"
							value={student.age}
							onChange={handleChange}
							className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="achievements"
							className="block text-gray-700 font-bold mb-2"
						>
							Achievements
						</label>
						<input
							type="text"
							id="achievements"
							name="achievements"
							value={student.achievements}
							onChange={handleChange}
							className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="aboutUs"
							className="block text-gray-700 font-bold mb-2"
						>
							About the student
						</label>
						<textarea
							id="aboutUs"
							name="aboutUs"
							value={student.aboutUs}
							onChange={handleChange}
							className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							rows="4"
						></textarea>
					</div>
					<div className="mb-4">
						<label
							htmlFor="image"
							className="block text-gray-700 font-bold mb-2"
						>
							Student Image
						</label>
						<input
							type="file"
							id="image"
							name="image"
							onChange={handleChange}
							className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
					>
						Update Student
					</button>
				</form>
			</div>
		</div>
	);
};

export default AdminStudentEdit;
