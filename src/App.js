import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import StudentDetails from "./components/StudentDetails";
import HomePage from "./components/Homepage";
import Footer from "./components/Footer";
import Donate from "./components/Donate";
import { StudentProvider } from "./contexts/StudentContext";
import { AdminProvider } from "./admin/contexts/AdminContext";
import AdminLogin from "./admin/components/AdminLogin";
import AdminDashboard from "./admin/components/AdminDashboard";
import AdminStudentEdit from "./admin/components/AdminStudentEdit";
import AdminStudentForm from "./admin/components/AdminStudentForm";
import AdminStudentList from "./admin/components/AdminStudentList";

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

const AdminLayout = () => {
  return (
    <AdminProvider>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
    </AdminProvider>
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
        element: <StudentDetails />,
      },
      {
        path: "/donate",
        element: <Donate />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "login",
        element: <AdminLogin />,
      },
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "students",
        element: <AdminStudentList />,
      },
      {
        path: "student/add",
        element: <AdminStudentForm />,
      },
      {
        path: "student/:id/edit",
        element: <AdminStudentEdit />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
