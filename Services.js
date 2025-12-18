import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './Services.css'; // Assuming you have a CSS file for styling
import streetdog from './streetdog.jpg';

const Services = () => {
  return (
    <div
      className="services"
      style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        borderRadius: "8px"
      }}
    >
      <img src={streetdog} alt="Street Dog" />
      <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Street Dog Welfare</h3>
      <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
        At Pet Pal, we believe in the importance of caring for all animals, especially those in need. Our street dog welfare program focuses on rescuing, rehabilitating, and rehoming street dogs.
      </p>
      <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
        We have taken an initiative to make people adopt street animals.<br />
        Street dogs are often overlooked, but they deserve love and care just like any other pet. At Pet Pal, we believe in giving them a chance at a better life.<br />
        We provide food, shelter, and medical care to street dogs in need.
      </p>
      <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
        Our team works tirelessly to rescue and rehabilitate these animals, ensuring they are healthy and happy.<br />
        We also educate the community about the importance of spaying and neutering to control the street dog population.<br />
        By spreading awareness, we aim to create a more compassionate society towards street animals.
      </p>
      <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
        We also promote responsible pet ownership and encourage our community to adopt street dogs.<br />
        Adopting a street dog not only saves a life but also brings immense joy and companionship to your home.<br />
        If you are interested in adopting a street dog or supporting our cause, please contact us. Your support can make a difference!
      </p>
      <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
        We organize regular events and campaigns to raise awareness about street dog welfare.
      </p>
      <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
        We also support street dogs and work towards their welfare.
      </p>
      <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
        By adopting a street dog, you not only give them a home but also help reduce the number of stray animals in our community.
      </p>
      <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
        Every small effort counts, and together we can make a difference in the lives of these animals.
      </p>
      <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
        Learn more about our street dog initiatives and how you can help.
      </p>
      <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
        We organize regular events and campaigns to raise awareness about street dog welfare.
      </p>
      <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
        If you are interested in adopting a street dog or supporting our cause, please contact us. Your support can make a difference!
      </p>
      <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
        Thank you for visiting Pet Pal. We look forward to serving you and your furry friends!
      </p>
      <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
        For more information, feel free to reach out to us through our contact page.
      </p>
    </div>
  );
}

export default Services;