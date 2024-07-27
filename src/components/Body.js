import React, { useEffect } from "react";
import StudentList from "./StudentList";
import { useStudents } from "../contexts/StudentContext";

const Body = () => {
	const { students, fetchStudents } = useStudents();

	useEffect(() => {
		fetchStudents();
	}, []);

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6">Our Students</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{students.map((student) => (
					<StudentList key={student.id} studentdata={student} />
				))}
			</div>
		</div>
	);
};

export default Body;
