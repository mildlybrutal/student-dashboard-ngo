import React from "react";
import { useParams } from "react-router-dom";

const StudentDetails = ({ data }) => {
	const { id } = useParams();
	const studentdata = data.find((student) => student.id === parseInt(id));

	if (!studentdata) {
		return (
			<div className="flex items-center justify-center h-screen bg-gray-100">
				<div className="text-2xl font-semibold text-gray-700">
					Student not found
				</div>
			</div>
		);
	}

	const { name, age, achievements, aboutUs } = studentdata;

	return (
		<div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
				<div className="bg-blue-600 px-6 py-4">
					<h1 className="text-3xl font-bold text-white">{name}</h1>
					<p className="text-blue-200 mt-1">Age: {age}</p>
				</div>
				<div className="px-6 py-8">
					<div className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-800 mb-4">
							Achievements
						</h2>
						<ul className="space-y-2">
							{achievements.map((achievement, index) => (
								<li key={index} className="flex items-center">
									<svg
										className="h-5 w-5 text-green-500 mr-2"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
									</svg>
									<span className="text-gray-700">{achievement}</span>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h2 className="text-2xl font-semibold text-gray-800 mb-4">
							About {name}
						</h2>
						<p className="text-gray-600 leading-relaxed">{aboutUs}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StudentDetails;
