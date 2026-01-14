import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UserLogin = () => {
    const [form, setForm] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const login = async () => {
        setError("");
        setLoading(true);
        
        try {
            const res = await axios.post(
                "http://localhost:8080/api/user/login",
                form
            );
            
            // Store user data in localStorage
            localStorage.setItem("userToken", res.data.token);
            localStorage.setItem("userId", res.data.userId);
            localStorage.setItem("username", res.data.username);
            localStorage.setItem("userEmail", res.data.email);
            localStorage.setItem("userRole", res.data.role);
            
            // Navigate to user dashboard
            navigate("/user/dashboard");
        } catch (err) {
            setError(err.response?.data?.message || "Invalid credentials");
        } finally {
            setLoading(false);
        }
    };

    const goToRegister = () => {
        navigate("/user/register");
    };

    return (
        <div className="about">
            <h3>User Login</h3>
            <p className="text-muted mb-4">Sign in to check your adoption status and manage your account</p>

            {error && <div className="alert alert-danger">{error}</div>}

            <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                    className="form-control"
                    placeholder="Enter your username"
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                    disabled={loading}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    disabled={loading}
                />
            </div>

            <button 
                className="btn btn-primary w-100 mb-3" 
                onClick={login}
                disabled={loading}
            >
                {loading ? "Logging in..." : "Login"}
            </button>

            <button 
                className="btn btn-outline-secondary w-100"
                onClick={goToRegister}
            >
                Don't have an account? Register
            </button>
        </div>
    );
};

export default UserLogin;