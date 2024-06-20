import axios from "axios";
import { useEffect, useState } from "react";

const StudentsList = () => {
	const [students, setStudents] = useState([]);
	const backendUrl = process.env.REACT_APP_BACKEND_URL;
	useEffect(() => {
		axios
			.get("http://localhost:5000/students") // Ensure this URL matches your backend server
			.then((response) => setStudents(response.data))
			.catch((error) =>
				console.error("There was an error fetching the students data!", error)
			);
	}, [backendUrl]);

	return (
		<div>
			<h1>Students</h1>
			<ul>
				{students.map((student) => (
					<li key={student._id}>{student.name}</li>
				))}
			</ul>
		</div>
	);
};

export default StudentsList;
