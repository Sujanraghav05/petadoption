import axios from "axios";
import { useState } from "react";

const Status = () => {
    const [id, setId] = useState("");
    const [data, setData] = useState(null);

    const checkStatus = async () => {
        const res = await axios.get(
            `http://localhost:8080/api/adoptions/${id}`
        );
        setData(res.data);
    };

    return (
        <div className="about">
            <h3>Track Adoption Status</h3>

            <input
                className="form-control"
                placeholder="Enter Application ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />

            <button className="btn btn-primary mt-3" onClick={checkStatus}>
                Check Status
            </button>

            {data && (
                <div className="mt-4">
                    <p><b>Name:</b> {data.name}</p>
                    <p><b>Pet:</b> {data.petType}</p>

                    {data.status === "PENDING" && (
                        <div className="alert alert-warning">
                            ⏳ Under review
                        </div>
                    )}

                    {data.status === "APPROVED" && (
                        <div className="alert alert-success">
                            🎉 <b>Approved!</b>

                            {data.appointmentDate && data.appointmentTime ? (
                                <>
                                    <p className="mt-2">
                                        <b>Appointment Date:</b> {data.appointmentDate}
                                    </p>
                                    <p>
                                        <b>Appointment Time:</b> {data.appointmentTime}
                                    </p>
                                    <p>
                                        Please visit the adoption center at the scheduled time.
                                    </p>
                                </>
                            ) : (
                                <p className="mt-2">Appointment not scheduled yet.</p>
                            )}
                        </div>
                    )}

                    {data.status === "REJECTED" && (
                        <div className="alert alert-danger">
                            ❌ Rejected
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Status;
