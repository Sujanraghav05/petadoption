import { Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import petpallogo from './petpallogo.jpg';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <div className="container">
                <Link to="/status" className="notify">
                    Notifications
                </Link>

                <img
                    src={petpallogo}
                    alt="PetPal logo"
                    style={{
                        height: "32px",
                        width: "auto",
                        borderRadius: "6px"
                    }}
                />

                <Link className="navbar-brand fw-bold" to="/">
                    🐾 Pet Pal
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#petpalNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className='dropdown'>
                    <button className='btn btn-link' style={{ color: "lightblue", textDecoration: "none" }}>For Admin</button>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/admin/login">Admin Login</Link></li>
                            <li><Link className="dropdown-item" to="/admin/register">Admin Register</Link></li>
                        </ul>
                </div>

                <div className="collapse navbar-collapse" id="petpalNavbar">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/services">Services</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/adoption">Adoption</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;