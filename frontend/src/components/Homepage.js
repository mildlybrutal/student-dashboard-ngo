import React from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarausel";

const HomePage = () => {
	const carouselImages = [
		{ src: require("../assets/images/img1.jpg"), alt: "Volunteers in action" },
		{ src: require("../assets/images/img2.jpg"), alt: "Community outreach" },
		{ src: require("../assets/images/img3.jpg"), alt: "Education program" },
	];

	// This should be replaced with actual data from your backend or state management
	const studentCount = 150;

	return (
		<div className="bg-gray-100 min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
					Welcome to NGO
				</h1>
				<p className="text-xl text-gray-700 text-center mb-12">
					Empowering communities and changing lives through sustainable
					development
				</p>
				<div className="mb-16">
					<ImageCarousel images={carouselImages} />
				</div>

				{/* New Student Count Section */}
				<div className="bg-white shadow-lg rounded-lg p-6 mb-16">
					<h2 className="text-2xl font-bold text-gray-800 mb-4">Our Impact</h2>
					<div className="flex items-center justify-between">
						<div>
							<p className="text-4xl font-bold text-blue-600">{studentCount}</p>
							<p className="text-gray-600">Students Enrolled</p>
						</div>
						<Link
							to="/our-students"
							className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
						>
							View All Students
						</Link>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<FeatureCard
						icon="🤝"
						title="Our Mission"
						description="We strive to create lasting change by addressing poverty, inequality, and social injustice."
					/>
					<FeatureCard
						icon="🌱"
						title="Our Programs"
						description="From education to healthcare, we run diverse programs to support communities in need."
					/>
					<FeatureCard
						icon="❤️"
						title="Get Involved"
						description="Join us as a volunteer, donor, or partner to make a difference in people's lives."
					/>
				</div>
			</div>
		</div>
	);
};

const FeatureCard = ({ icon, title, description }) => (
	<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
		<div className="text-4xl mb-4">{icon}</div>
		<h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
		<p className="text-gray-600">{description}</p>
	</div>
);

export default HomePage;
