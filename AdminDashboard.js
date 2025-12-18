import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const [applications, setApplications] = useState([]);
    const [schedule, setSchedule] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("adminToken");
        if (!token) {
            navigate("/admin/login");
            return;
        }
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await axios.get("http://localhost:8080/api/adoptions");
        setApplications(res.data);
    };

    const reject = async (id) => {
        await axios.put(
            `http://localhost:8080/api/adoptions/${id}/status?status=REJECTED`
        );
        fetchData();
    };

    const approveAndSchedule = async (id) => {
        const { date, time } = schedule[id] || {};
        if (!date || !time) {
            alert("Please select date and time");
            return;
        }

        await axios.put(
            `http://localhost:8080/api/adoptions/${id}/schedule?date=${date}&time=${time}`
        );
        fetchData();
    };

    const logout = () => {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
    };

    return (
        <div className="about">
            <div className="d-flex justify-content-between">
                <h3>Admin – Adoption Requests</h3>
                <button className="btn btn-danger btn-sm" onClick={logout}>
                    Logout
                </button>
            </div>

            <table className="table table-bordered mt-4">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Pet</th>
                        <th>Status</th>
                        <th>Appointment</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {applications.map((app) => (
                        <tr key={app.id}>
                            <td>{app.id}</td>
                            <td>{app.name}</td>
                            <td>{app.petType}</td>
                            <td>{app.status}</td>

                            <td>
                                <input
                                    type="date"
                                    className="form-control mb-1"
                                    onChange={(e) =>
                                        setSchedule({
                                            ...schedule,
                                            [app.id]: {
                                                ...schedule[app.id],
                                                date: e.target.value,
                                            },
                                        })
                                    }
                                />
                                <input
                                    type="time"
                                    className="form-control"
                                    onChange={(e) =>
                                        setSchedule({
                                            ...schedule,
                                            [app.id]: {
                                                ...schedule[app.id],
                                                time: e.target.value,
                                            },
                                        })
                                    }
                                />
                            </td>

                            <td>
                                <button
                                    className="btn btn-success btn-sm me-2"
                                    onClick={() => approveAndSchedule(app.id)}
                                    disabled={app.status === "APPROVED"}
                                >
                                    Approve
                                </button>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => reject(app.id)}
                                    disabled={app.status === "REJECTED"}
                                >
                                    Reject
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
