import axios from "axios";
import { useState } from "react";

const AdminRegister = () => {
    const [form, setForm] = useState({ username: "", password: "" });

    const submit = async () => {
        await axios.post("http://localhost:8080/api/admin/register", form);
        alert("Admin registered successfully");
    };

    return (
        <div className="about">
            <h3>Admin Registration</h3>

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

            <button className="btn btn-primary" onClick={submit}>
                Register
            </button>
        </div>
    );
};

export default AdminRegister;
