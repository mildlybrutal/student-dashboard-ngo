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
		} else if (e.target.name === "achievements") {
			setFormData({ ...formData, achievements: e.target.value.split(",") });
		} else {
			setFormData({ ...formData, [e.target.name]: e.target.value });
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = new FormData();
		for (let key in formData) {
			if (key === "achievements") {
				formData[key].forEach((achievement, index) => {
					data.append(`achievements[${index}]`, achievement.trim());
				});
			} else {
				data.append(key, formData[key]);
			}
		}

		try {
			await addStudent(data);
			setMessage("Student added successfully!");
			// Reset form
			setFormData({
				name: "",
				age: "",
				achievements: "",
				aboutUs: "",
				image: null,
			});
		} catch (error) {
			setMessage("Error adding student. Please try again.");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="name"
				value={formData.name}
				onChange={handleChange}
				placeholder="Name"
				required
			/>
			<input
				type="number"
				name="age"
				value={formData.age}
				onChange={handleChange}
				placeholder="Age"
				required
			/>
			<input
				type="text"
				name="achievements"
				value={formData.achievements}
				onChange={handleChange}
				placeholder="Achievements (comma-separated)"
			/>
			<textarea
				name="aboutUs"
				value={formData.aboutUs}
				onChange={handleChange}
				placeholder="About the student"
			></textarea>
			<input
				type="file"
				name="image"
				onChange={handleChange}
				accept="image/*"
			/>
			<button type="submit">Add Student</button>
			{message && <p>{message}</p>}
		</form>
	);
};

export default AdminStudentForm;
