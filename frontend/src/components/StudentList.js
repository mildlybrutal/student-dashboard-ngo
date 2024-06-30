import React, { useState } from "react";
import { Link } from "react-router-dom";

const StudentList = (props) => {
	const { studentdata } = props;
	const { name, id } = studentdata;

	return (
		<div className="bg-blue-100 rounded-lg shadow-md overflow-hidden">
			<div className="bg-slate-600 h-32 rounded-t-lg"> </div>
			<div className="p-4">
				<h2 className="text-lg font-semibold text-center mb-4">{name}</h2>
				<Link
					to={`/student/${id}`}
					className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 text-center"
				>
					Know more
				</Link>
			</div>
		</div>
	);
};

export default StudentList;
