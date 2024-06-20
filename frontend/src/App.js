import React from "react";
import ReactDOM from "react-dom/client";
import StudentsList from "./components/StudentList";

const AppLayout = () => {
	return (
		<div>
			<StudentsList />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
