import { useState } from "react";
import axios from "axios";

const AdminPanel = () => {
    const [pet, setPet] = useState({
        name: "", type: "", breed: "", age: "", image_url: ""
    });

    const handleChange = (e) => {
        setPet({ ...pet, [e.target.name]: e.target.value });
    };

    const addPet = async () => {
        await axios.post("http://localhost:8080/api/pets", pet);
        alert("Pet Added Successfully ✅");
    };

    return (
        <div className="container mt-5">
            <h2>Admin – Add Pet</h2>

            <input name="name" placeholder="Name" onChange={handleChange} className="form-control mb-2" />
            <input name="type" placeholder="Type" onChange={handleChange} className="form-control mb-2" />
            <input name="breed" placeholder="Breed" onChange={handleChange} className="form-control mb-2" />
            <input name="age" placeholder="Age" onChange={handleChange} className="form-control mb-2" />
            <input name="image_url" placeholder="Image URL" onChange={handleChange} className="form-control mb-2" />

            <button onClick={addPet} className="btn btn-primary w-100">Add Pet</button>
        </div>
    );
};

export default AdminPanel;
