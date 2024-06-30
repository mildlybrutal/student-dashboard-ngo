import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="bg-gray-800 shadow-lg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-4">
					<div className="flex items-center">
						<img className="h-12 w-auto" src={LOGO_URL} alt="Logo" />
					</div>
					<div className="flex items-center">
						<NavLink to="/">Home</NavLink>
						<NavLink to="/our-students">Our Students</NavLink>
						<NavLink to="/about">About Us</NavLink>
						<NavLink to="/contact">Contact</NavLink>
						<NavLink
							to="/donate"
							className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ml-4"
						>
							Donate
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

const NavLink = ({ to, children, className = "" }) => (
	<Link
		to={to}
		className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${className}`}
	>
		{children}
	</Link>
);

export default Header;
