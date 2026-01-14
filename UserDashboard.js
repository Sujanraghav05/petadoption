import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
    const [userData, setUserData] = useState(null);
    const [adoptionStatuses, setAdoptionStatuses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const userId = localStorage.getItem("userId");
    const userToken = localStorage.getItem("userToken");

    useEffect(() => {
        if (!userId || !userToken) {
            navigate("/user/login");
            return;
        }
        
        fetchUserData();
        fetchAdoptionStatuses();
    }, [navigate, userId, userToken]);

    const fetchUserData = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/api/user/${userId}`);
            setUserData(res.data);
        } catch (err) {
            setError("Failed to load user data");
        }
    };

    const fetchAdoptionStatuses = async () => {
        try {
            // In a real app, you would have an endpoint to get user's adoptions
            // For now, we'll get all adoptions and filter by email
            const res = await axios.get("http://localhost:8080/api/adoptions");
            const userEmail = localStorage.getItem("userEmail");
            const userAdoptions = res.data.filter(adopt => 
                adopt.email === userEmail
            );
            setAdoptionStatuses(userAdoptions);
        } catch (err) {
            console.error("Failed to fetch adoption statuses:", err);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem("userToken");
        localStorage.removeItem("userId");
        localStorage.removeItem("username");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userRole");
        navigate("/");
    };

    if (loading) {
        return (
            <div className="about text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Loading your dashboard...</p>
            </div>
        );
    }

    return (
        <div className="about">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3>Welcome, {userData?.username || "User"}!</h3>
                <button className="btn btn-outline-danger" onClick={logout}>
                    Logout
                </button>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            {/* User Info Card */}
            <div className="card mb-4">
                <div className="card-header bg-primary text-white">
                    <h5 className="mb-0">Your Profile</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <p><strong>Username:</strong> {userData?.username}</p>
                            <p><strong>Email:</strong> {userData?.email}</p>
                        </div>
                        <div className="col-md-6">
                            <p><strong>Phone:</strong> {userData?.phone || "Not provided"}</p>
                            <p><strong>Address:</strong> {userData?.address || "Not provided"}</p>
                        </div>
                    </div>
                    <button 
                        className="btn btn-outline-primary mt-2"
                        onClick={() => navigate("/user/edit-profile")}
                    >
                        Edit Profile
                    </button>
                </div>
            </div>

            {/* Adoption Status Section */}
            <div className="card">
                <div className="card-header bg-success text-white">
                    <h5 className="mb-0">Your Adoption Applications</h5>
                </div>
                <div className="card-body">
                    {adoptionStatuses.length === 0 ? (
                        <div className="text-center py-4">
                            <p className="text-muted">You haven't submitted any adoption applications yet.</p>
                            <button 
                                className="btn btn-primary"
                                onClick={() => navigate("/adoption")}
                            >
                                Submit an Application
                            </button>
                        </div>
                    ) : (
                        <div className="row">
                            {adoptionStatuses.map(adoption => (
                                <div className="col-md-6 mb-3" key={adoption.id}>
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h6 className="card-title">
                                                Application #{adoption.id} - {adoption.petName}
                                            </h6>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    Pet Type: {adoption.petType}<br/>
                                                    Submitted: {new Date().toLocaleDateString()}
                                                </small>
                                            </p>
                                            
                                            {/* Status Display */}
                                            <div className={`alert ${
                                                adoption.status === "APPROVED" ? "alert-success" :
                                                adoption.status === "REJECTED" ? "alert-danger" :
                                                "alert-warning"
                                            }`}>
                                                <strong>Status:</strong> {adoption.status}
                                                
                                                {adoption.status === "APPROVED" && adoption.appointmentDate && (
                                                    <div className="mt-2">
                                                        <p className="mb-1">
                                                            <strong>Appointment Date:</strong> {adoption.appointmentDate}
                                                        </p>
                                                        <p className="mb-0">
                                                            <strong>Appointment Time:</strong> {adoption.appointmentTime}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                            
                                            <button 
                                                className="btn btn-sm btn-outline-primary w-100"
                                                onClick={() => navigate(`/status?id=${adoption.id}`)}
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-4">
                <h5>Quick Actions</h5>
                <div className="d-flex gap-2">
                    <button 
                        className="btn btn-primary"
                        onClick={() => navigate("/adoption")}
                    >
                        Submit New Application
                    </button>
                    <button 
                        className="btn btn-outline-primary"
                        onClick={() => navigate("/status")}
                    >
                        Check Status Manually
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;