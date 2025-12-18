import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AdminLogin = () => {
    const [form, setForm] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const login = async () => {
        // 🔐 Frontend safety login
        if (form.username === "admin" && form.password === "admin123") {
            localStorage.setItem("adminToken", "admin-safe-token");
            navigate("/admin");
            return;
        }

        try {
            const res = await axios.post(
                "http://localhost:8080/api/admin/login",
                form
            );
            localStorage.setItem("adminToken", res.data.token);
            navigate("/admin");
        } catch {
            setError("Invalid credentials");
        }
    };

    return (
        <div className="about">
            <h3>Admin Login</h3>

            {error && <p className="text-danger">{error}</p>}

            <input
                className="form-control mb-2"
                placeholder="Username"
                onChange={(e) => setForm({ ...form, username: e.target.value })}
            />

            <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
            />

            <button className="btn btn-success" onClick={login}>
                Login
            </button>
        </div>
    );
};

export default AdminLogin;
