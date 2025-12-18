import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Contact = () => {
  return (
    <div className="contact" style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        borderRadius: "8px"
      }}>
            <h2 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Contact Us</h2>
            <p>If you have any questions or need assistance, feel free to reach out to us.</p>
            <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">Email: <a href="mailto:sujanraghav2005@gmail.com">contact email</a></p>
            <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">Phone: <a href="tel:+919445309240">contact number</a></p>
            <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">Address: No 6,vivekhanandhar street,india main road,india cross street,chennai,tamil nadu,india</p>
            <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">We are here to help you with all your pet-related needs.</p>
            <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">Thank you for choosing Pet Pal!</p>
            <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">Follow us on social media for updates and news!</p>
            <ul class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">
                <li><a href="https://www.facebook.com/petpal">Facebook</a></li>
                <li><a href="https://www.instagram.com/petpal">Instagram</a></li>
                <li><a href="https://www.twitter.com/petpal">Twitter</a></li>
            </ul>
    </div>
    )
}

export default Contact;