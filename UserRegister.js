import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
    const [form, setForm] = useState({ 
        username: "", 
        password: "", 
        email: "",
        confirmPassword: "",
        phone: "",
        address: ""
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match");
            return false;
        }
        if (form.password.length < 6) {
            setError("Password must be at least 6 characters long");
            return false;
        }
        if (!form.email.includes("@")) {
            setError("Please enter a valid email address");
            return false;
        }
        return true;
    };

    const submit = async () => {
        setError("");
        setSuccess("");
        
        if (!validateForm()) return;
        
        setLoading(true);
        
        try {
            // Remove confirmPassword before sending to backend
            const { confirmPassword, ...userData } = form;
            
            await axios.post("http://localhost:8080/api/user/register", userData);
            
            setSuccess("Registration successful! You can now login.");
            
            // Auto-fill login form after successful registration
            localStorage.setItem("registeredUsername", form.username);
            localStorage.setItem("registeredEmail", form.email);
            
            // Redirect to login after 2 seconds
            setTimeout(() => {
                navigate("/user/login");
            }, 2000);
            
        } catch (err) {
            setError(err.response?.data?.message || "Registration failed");
        } finally {
            setLoading(false);
        }
    };

    const goToLogin = () => {
        navigate("/user/login");
    };

    return (
        <div className="about">
            <h3>User Registration</h3>
            <p className="text-muted mb-4">Create an account to track your adoption applications</p>

            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}

            <div className="mb-3">
                <label className="form-label">Username *</label>
                <input
                    className="form-control"
                    name="username"
                    placeholder="Choose a username"
                    value={form.username}
                    onChange={handleChange}
                    disabled={loading}
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Email *</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    disabled={loading}
                    required
                />
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label className="form-label">Password *</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Minimum 6 characters"
                        value={form.password}
                        onChange={handleChange}
                        disabled={loading}
                        required
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label className="form-label">Confirm Password *</label>
                    <input
                        type="password"
                        className="form-control"
                        name="confirmPassword"
                        placeholder="Re-enter your password"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        disabled={loading}
                        required
                    />
                </div>
            </div>

            <div className="mb-3">
                <label className="form-label">Phone Number (Optional)</label>
                <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    placeholder="Your phone number"
                    value={form.phone}
                    onChange={handleChange}
                    disabled={loading}
                />
            </div>

            <div className="mb-4">
                <label className="form-label">Address (Optional)</label>
                <textarea
                    className="form-control"
                    name="address"
                    placeholder="Your address"
                    value={form.address}
                    onChange={handleChange}
                    disabled={loading}
                    rows="2"
                />
            </div>

            <button 
                className="btn btn-primary w-100 mb-3" 
                onClick={submit}
                disabled={loading}
            >
                {loading ? "Registering..." : "Register"}
            </button>

            <button 
                className="btn btn-outline-secondary w-100"
                onClick={goToLogin}
            >
                Already have an account? Login
            </button>
        </div>
    );
};

export default UserRegister;