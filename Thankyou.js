import { useParams } from "react-router-dom";

const ThankYou = () => {
    const { id } = useParams();

    return (
        <div className="about">
            <h3>Application Submitted 🎉</h3>
            <p>Your adoption request is now in our system.</p>
            <p><b>Application ID:</b> {id}</p>
            <p>Status: <b>PENDING</b></p>
            <p>Use this ID to track your adoption status.</p>
        </div>
    );
};

export default ThankYou;

