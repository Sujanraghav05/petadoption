import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './About.css'; // Assuming you have a CSS file for styling
// Import an image for the street dog section
const About = () => {
  return (
    <div className="about" style={{boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", padding: "20px", borderRadius: "8px"}}>
      {/* <div className="about">
        <h2>About Us</h2>
        <p>At Pet Pal, we are dedicated to providing the best care and services for your pets. Our team of experienced professionals is passionate about animal welfare and committed to helping you find the perfect pet.</p>
        <p>We offer a range of services including pet adoption, grooming, training, and veterinary care. Our goal is to ensure that every pet finds a loving home and receives the care they deserve.</p>
        <p>Join us in our mission to make the world a better place for pets and their owners!</p>
      </div> */}
      <div className=" dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
        <div>
          <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
            {/* <svg className="h-6 w-6 stroke-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              <path d="M16.24 7.76a6 6 0 1 0-8.48 8.48l1.42-1.42a4 4 0 1 1 5.66 5.66l1.42-1.42a6 6 0 0 0 0-8.48z" />
              <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
            </svg> */}
          </span>
        </div>
        <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight">About Us</h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
          At Pet Pal, we are dedicated to providing the best care and services for your pets. Our team of experienced professionals is passionate about animal welfare and committed to helping you find the perfect pet.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
          We offer a range of services including pet adoption, grooming, training, and veterinary care. Our goal is to ensure that every pet finds a loving home and receives the care they deserve.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
          Join us in our mission to make the world a better place for pets and their owners!
        </p>
      </div>
    </div>
  );       
};

export default About;