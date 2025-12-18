import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Adoption = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors }, 
        reset 
    } = useForm();
    
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessages, setAlertMessages] = useState([]);
    const [alertType, setAlertType] = useState('success');
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(
                "http://localhost:8080/api/adoptions",
                data
            );

            setAlertMessages([
                "Application submitted successfully!",
                `Your Application ID: ${response.data.id}`
            ]);
            setAlertType("success");
            setShowAlert(true);

            setTimeout(() => {
                navigate(`/thankyou/${response.data.id}`);
            }, 2000);

            reset();
        } catch (error) {
            setAlertMessages(["Something went wrong. Please try again."]);
            setAlertType("danger");
            setShowAlert(true);
        }
    };

    return (
        <div className="container my-5">
            <form onSubmit={handleSubmit(onSubmit)} className="adoption-form p-4 border rounded shadow-sm ">
                <fieldset className="border p-3 mb-4">
                    <legend className="w-auto px-3 fw-bold" style={{ color: "#1967b6" }}>
                        Pet Adoption Application
                    </legend>

                    {/* Name Field */}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name*</label>
                        <input
                            id="name"
                            type="text"
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                            {...register("name", { 
                                required: "Name is required",
                                minLength: {
                                    value: 2,
                                    message: "Name must be at least 2 characters"
                                }
                            })}
                            placeholder="Enter your full name"
                        />
                        {errors.name && (
                            <div className="invalid-feedback">
                                {errors.name.message}
                            </div>
                        )}
                    </div>

                    {/* Email Field */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address*</label>
                        <input
                            id="email"
                            type="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            {...register("email", { 
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })}
                            placeholder="example@email.com"
                        />
                        {errors.email && (
                            <div className="invalid-feedback">
                                {errors.email.message}
                            </div>
                        )}
                    </div>

                    {/* Phone Field */}
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone Number*</label>
                        <input
                            id="phone"
                            type="tel"
                            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                            {...register("phone", { 
                                required: "Phone number is required",
                                pattern: {
                                    value: /^\d{10}$/,
                                    message: "Please enter a valid 10-digit phone number"
                                }
                            })}
                            placeholder="1234567890"
                        />
                        {errors.phone && (
                            <div className="invalid-feedback">
                                {errors.phone.message}
                            </div>
                        )}
                    </div>

                    {/* Pet Type Field */}
                    <div className="mb-3">
                        <label htmlFor="petType" className="form-label">Pet Type*</label>
                        <select
                            id="petType"
                            className={`form-select ${errors.petType ? 'is-invalid' : ''}`}
                            {...register("petType", { 
                                required: "Please select a pet type" 
                            })}
                        >
                            <option value="">Select a pet type...</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="rabbit">Rabbit</option>
                            <option value="bird">Bird</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.petType && (
                            <div className="invalid-feedback">
                                {errors.petType.message}
                            </div>
                        )}
                    </div>

                    {/* Pet Name Field */}
                    <div className="mb-3">
                        <label htmlFor="petName" className="form-label">Preferred Pet Name (if known)</label>
                        <input
                            id="petName"
                            type="text"
                            className="form-control"
                            {...register("petName")}
                            placeholder="Optional"
                        />
                    </div>

                    {/* Message Field */}
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Additional Information</label>
                        <textarea
                            id="message"
                            className="form-control"
                            rows={4}
                            {...register("message")}
                            placeholder="Tell us about your experience with pets or any special requests..."
                        />
                    </div>

                    {/* Terms Agreement */}
                    <div className="mb-4 form-check">
                        <input
                            id="terms"
                            type="checkbox"
                            className={`form-check-input ${errors.terms ? 'is-invalid' : ''}`}
                            {...register("terms", { 
                                required: "You must agree to the terms and conditions" 
                            })}
                        />
                        <label htmlFor="terms" className="form-check-label">
                            I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer">terms and conditions</a> of adoption
                        </label>
                        {errors.terms && (
                            <div className="invalid-feedback d-block">
                                {errors.terms.message}
                            </div>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="d-grid">
                        <button 
                            type="submit" 
                            className="btn btn-primary btn-lg"
                        >
                            Submit Application
                        </button>
                    </div>
                                        {/* Alert Notification */}
                    {showAlert && (
                        <div className={`alert alert-${alertType} alert-dismissible fade show mb-4`} role="alert">
                            {alertMessages.map((msg, index) => (
                                <div key={index}>{msg}</div>
                            ))}
                            <button 
                              type="button" 
                              className="btn-close small-close-btn"
                              onClick={() => setShowAlert(false)} 
                              aria-label="Close"
                            />
                        </div>
                    )}
                </fieldset>
                
                {/* Help Text */}
                <div className="mt-4 text-center">
                    <p className="text-muted">
                        Need help with your application? <br />
                        <a href="/contact" className="text-decoration-none">
                            Contact our adoption team
                        </a> or visit our center for assistance.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Adoption;