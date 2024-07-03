import React from "react";
import ReactDOM from "react-dom/client";
import StudentsList from "./components/StudentList";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import StudentDetails from "./components/StudentDetails";
import mockdata from "./utils/mockdata";
import HomePage from "./components/Homepage";
import Footer from "./components/Footer";
import Donate from "./components/Donate";
import { StudentProvider } from "./contexts/StudentContext";
import AdminStudentForm from "./components/AdminStudentForm";
const AppLayout = () => {
	return (
		<StudentProvider>
			<div className="flex flex-col min-h-screen">
				<Header />
				<main className="flex-grow">
					<Outlet />
				</main>
				<Footer />
			</div>
		</StudentProvider>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/our-students",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/student/:id",
				element: <StudentDetails data={mockdata} />,
			},
			{
				path: "/donate",
				element: <Donate />,
			},
			{
				path: "/upload",
				element: <AdminStudentForm />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
