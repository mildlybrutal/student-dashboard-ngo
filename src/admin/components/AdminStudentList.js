import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAdmin } from "../contexts/AdminContext";
import AdminNavBar from "./AdminNavBar";

const AdminStudentList = () => {
	const { fetchStudents, deleteStudent } = useAdmin();
	const [students, setStudents] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const loadStudents = async () => {
			try {
				const data = await fetchStudents();
				setStudents(data);
				setLoading(false);
			} catch (err) {
				setError("Failed to load students");
				setLoading(false);
			}
		};
		loadStudents();
	}, [fetchStudents]);

	const handleDelete = async (id) => {
		if (window.confirm("Are you sure you want to delete this student?")) {
			try {
				await deleteStudent(id);
				setStudents(students.filter((student) => student.id !== id));
			} catch (err) {
				setError("Failed to delete student");
			}
		}
	};

	if (loading) return <div>Loading...</div>;
	if (error) return <div className="text-red-500">{error}</div>;

	return (
		<div>
			<AdminNavBar />
			<div className="overflow-x-auto">
				<table className="min-w-full bg-white">
					<thead>
						<tr>
							<th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
								Name
							</th>
							<th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
								Age
							</th>
							<th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						{students.map((student) => (
							<tr key={student.id}>
								<td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
								<td className="px-6 py-4 whitespace-nowrap">{student.age}</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<Link
										to={`/admin/student/${student.id}/edit`}
										className="text-indigo-600 hover:text-indigo-900 mr-4"
									>
										Edit
									</Link>
									<button
										onClick={() => handleDelete(student.id)}
										className="text-red-600 hover:text-red-900"
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AdminStudentList;
