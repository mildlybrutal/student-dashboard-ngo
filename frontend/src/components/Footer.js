import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white">
			<div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-lg font-semibold mb-4">About Us</h3>
						<p className="text-gray-300">
							[Your NGO Name] is dedicated to making a positive impact in our
							community through various initiatives and programs.
						</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<Link to="/" className="text-gray-300 hover:text-white">
									Home
								</Link>
							</li>
							<li>
								<Link
									to="/our-students"
									className="text-gray-300 hover:text-white"
								>
									Our Students
								</Link>
							</li>
							<li>
								<Link to="/about" className="text-gray-300 hover:text-white">
									About Us
								</Link>
							</li>
							<li>
								<Link to="/contact" className="text-gray-300 hover:text-white">
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Contact Us</h3>
						<p className="text-gray-300">123 NGO Street, City, Country</p>
						<p className="text-gray-300">Email: info@yourngoemail.org</p>
						<p className="text-gray-300">Phone: +1 234 567 8900</p>
					</div>
				</div>
				<div className="mt-8 border-t border-gray-700 pt-8 text-center">
					<p className="text-gray-300">
						© 2023 NGO . All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
