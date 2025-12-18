import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import your carousel images (make sure these files exist in your project)
import carou1 from './carou-1.jpg';
import carou2 from './carou-2.jpg';
import carou3 from './carou-3.jpg';

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to Pet Pal!</h2>
      <p>Your one-stop solution for pet adoption and care services.</p>
      <p>Explore our services, learn about us, or get in touch!</p>
      
      {/* Bootstrap Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button 
            type="button" 
            data-bs-target="#carouselExampleIndicators" 
            data-bs-slide-to="0" 
            className="active" 
            aria-current="true" 
            aria-label="Slide 1"
          ></button>
          <button 
            type="button" 
            data-bs-target="#carouselExampleIndicators" 
            data-bs-slide-to="1" 
            aria-label="Slide 2"
          ></button>
          <button 
            type="button" 
            data-bs-target="#carouselExampleIndicators" 
            data-bs-slide-to="2" 
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carou1} className="d-block w-100" alt="Pet care service"/>
          </div>
          <div className="carousel-item">
            <img src={carou2} className="d-block w-100" alt="Happy pets"/>
          </div>
          <div className="carousel-item">
            <img src={carou3} className="d-block w-100" alt="Pet adoption"/>
          </div>
        </div>
        <button 
          className="carousel-control-prev" 
          type="button" 
          data-bs-target="#carouselExampleIndicators" 
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button 
          className="carousel-control-next" 
          type="button" 
          data-bs-target="#carouselExampleIndicators" 
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;