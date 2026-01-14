import { Link, NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import petpallogo from "./petpallogo.jpg";

const Navbar = () => {
    const isAdminLoggedIn = Boolean(localStorage.getItem("adminToken"));
    const isUserLoggedIn = Boolean(localStorage.getItem("userToken"));
    const username = localStorage.getItem("username");
    const navigate = useNavigate();

    const disabledStyle = {
        opacity: 0.5,
        pointerEvents: "none",
        cursor: "not-allowed",
    };

    const handleLinkClick = (e, condition) => {
        if (condition) {
            e.preventDefault();
        }
    };

    const adminLogout = () => {
        localStorage.removeItem("adminToken");
        navigate("/");
    };

    const userLogout = () => {
        localStorage.removeItem("userToken");
        localStorage.removeItem("userId");
        localStorage.removeItem("username");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userRole");
        navigate("/");
    };

    const logoutAll = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <div className="container">

                {/* 🔔 Notifications → enabled ONLY when logged OUT of admin */}
                <div className="d-flex align-items-center me-3">
                    <Link
                        to="/status"
                        className="text-light text-decoration-none"
                        style={isAdminLoggedIn ? disabledStyle : {}}
                        onClick={(e) => handleLinkClick(e, isAdminLoggedIn)}
                        title={isAdminLoggedIn ? "Available only when logged out" : "View adoption status"}
                    >
                        🔔 Status Check
                        {isAdminLoggedIn && (
                            <span className="ms-1 badge bg-secondary">Disabled</span>
                        )}
                    </Link>
                </div>

                <div className="d-flex align-items-center">
                    <img
                        src={petpallogo}
                        alt="PetPal logo"
                        style={{ height: "32px", borderRadius: "6px" }}
                    />
                    <Link className="navbar-brand fw-bold ms-2" to="/">
                        🐾 Pet Pal
                    </Link>
                </div>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto gap-2">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        <NavLink className="nav-link" to="/services">Services</NavLink>
                        <NavLink className="nav-link" to="/adoption">Adoption</NavLink>
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </ul>

                    {/* User Dropdown (if logged in) */}
                    {isUserLoggedIn && (
                        <div className="dropdown me-2">
                            <button
                                className="btn btn-success dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                👤 {username || "User"}
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <Link className="dropdown-item" to="/user/dashboard">
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/status">
                                        My Applications
                                    </Link>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <button
                                        className="dropdown-item text-danger"
                                        onClick={userLogout}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}

                    {/* Admin dropdown */}
                    <div className="dropdown">
                        <button
                            className="btn btn-outline-light dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Admin Panel
                        </button>

                        <ul className="dropdown-menu dropdown-menu-end">
                            {/* 📊 Dashboard → enabled ONLY when logged IN */}
                            <li>
                                <Link
                                    className="dropdown-item d-flex justify-content-between align-items-center"
                                    to="/admin"
                                    style={!isAdminLoggedIn ? disabledStyle : {}}
                                    onClick={(e) => handleLinkClick(e, !isAdminLoggedIn)}
                                >
                                    Dashboard
                                    {!isAdminLoggedIn && (
                                        <span className="badge bg-secondary ms-2">Locked</span>
                                    )}
                                </Link>
                            </li>

                            {isAdminLoggedIn ? (
                                <>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <button
                                            className="dropdown-item text-danger d-flex align-items-center"
                                            onClick={adminLogout}
                                        >
                                            <span className="me-2">🚪</span>
                                            Logout
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link className="dropdown-item" to="/admin/login">
                                            🔐 Admin Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/admin/register">
                                            📝 Admin Register
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>

                    {/* User Login Button (if not logged in) */}
                    {!isUserLoggedIn && !isAdminLoggedIn && (
                        <Link 
                            to="/user/login" 
                            className="btn btn-outline-success ms-2"
                        >
                            User Login
                        </Link>
                    )}

                    {/* Clear All Button (for testing) */}
                    <button 
                        className="btn btn-outline-warning ms-2"
                        onClick={logoutAll}
                        title="Clear all sessions (for testing)"
                    >
                        🧹 Clear
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
