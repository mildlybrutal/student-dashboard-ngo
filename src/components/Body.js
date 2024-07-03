import React from "react";
import mockdata from "../utils/mockdata";
import StudentList from "./StudentList";

const Body = () => {
	return (
		<div className="container mx-auto px-4">
			<h1 className="text-4xl font-bold text-center mt-8 mb-12">Our Students</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
				{mockdata.map((student) => (
					<StudentList key={student.id} studentdata={student} />
				))}
			</div>
		</div>
	);
};

export default Body;
