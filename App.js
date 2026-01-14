import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Adoption from "./Adoption";
import Contact from "./Contact";
import ThankYou from "./Thankyou";
import Status from "./Status";
import Footer from "./footer";

import AdminLogin from "./AdminLogin";
import AdminRegister from "./AdminRegister";
import AdminDashboard from "./AdminDashboard";

import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";
import UserDashboard from "./UserDashboard";

import Navbar from "./Navbar";
import "./App.css";

/* Simple Admin Protection */
const AdminRoute = ({ children }) => {
    const token = localStorage.getItem("adminToken");
    return token ? children : <Navigate to="/admin/login" replace />;
};

/* Simple User Protection */
const UserRoute = ({ children }) => {
    const token = localStorage.getItem("userToken");
    return token ? children : <Navigate to="/user/login" replace />;
};

function App() {
    return (
        <>
            {/* Common Navbar */}
            <Navbar />

            <Routes>
                {/* Public Pages */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/adoption" element={<Adoption />} />
                <Route path="/contact" element={<Contact />} />

                {/* Adoption Flow */}
                <Route path="/thankyou/:id" element={<ThankYou />} />
                <Route path="/status" element={<Status />} />

                {/* Admin Auth */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/register" element={<AdminRegister />} />

                {/* User Auth */}
                <Route path="/user/login" element={<UserLogin />} />
                <Route path="/user/register" element={<UserRegister />} />

                {/* Admin Dashboard (Protected) */}
                <Route
                    path="/admin"
                    element={
                        <AdminRoute>
                            <AdminDashboard />
                        </AdminRoute>
                    }
                />

                {/* User Dashboard (Protected) */}
                <Route
                    path="/user/dashboard"
                    element={
                        <UserRoute>
                            <UserDashboard />
                        </UserRoute>
                    }
                />

                {/* User Profile (Protected) */}
                <Route
                    path="/user/edit-profile"
                    element={
                        <UserRoute>
                            <UserDashboard /> {/* You can create a separate EditProfile component */}
                        </UserRoute>
                    }
                />

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
