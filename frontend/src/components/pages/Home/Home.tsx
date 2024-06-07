import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="landing">
        <h1>Welcome to the Hamster Store "Hammy"</h1>
        <p>Your one-stop shop for everything hamster-related</p>
      </section>
    
      <div className="features-section">
        <div className="container">
          <section className="features">
            <div className="feature">
              <h2>Quality Products</h2>
              <p>We offer a wide range of products to keep your hamster happy and healthy.</p>
            </div>
            <div className="feature">
              <h2>Affordable Prices</h2>
              <p>Get the best value for your money with our competitive pricing.</p>
            </div>
            <div className="feature">
              <h2>Customer Support</h2>
              <p>Call us and ask a question!</p>
            </div>
          </section>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Hamster Store "Hammy". All rights reserved.</p>
          <p>Follow us on:
            <a href="#"> Facebook</a> |
            <a href="#"> Twitter</a> |
            <a href="#"> Instagram</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
