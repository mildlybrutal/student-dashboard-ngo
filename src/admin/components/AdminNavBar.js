import React from "react";
import { Link, useLocation } from "react-router-dom";

const AdminNavBar = () => {
	const location = useLocation();

	const isActive = (path) => location.pathname === path;

	return (
		<nav className="bg-gray-800 text-white p-4">
			<div className="container mx-auto flex flex-wrap justify-between items-center">
				<div className="flex items-center flex-shrink-0 mr-6">
					<span className="font-semibold text-xl tracking-tight">
						Admin Panel
					</span>
				</div>
				<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
					<div className="text-sm lg:flex-grow">
						<Link
							to="/admin/dashboard"
							className={`block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 ${
								isActive("/admin/dashboard") ? "text-white" : "text-gray-400"
							}`}
						>
							Dashboard
						</Link>
						<Link
							to="/admin/student/add"
							className={`block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 ${
								isActive("/admin/student/add") ? "text-white" : "text-gray-400"
							}`}
						>
							Add Student
						</Link>
						<Link
							to="/admin/students"
							className={`block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 ${
								isActive("/admin/students") ? "text-white" : "text-gray-400"
							}`}
						>
							Manage Students
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default AdminNavBar;
