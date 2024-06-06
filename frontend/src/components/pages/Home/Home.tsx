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
              <h2>User Forum</h2>
              <p>Ask other users of the site for their advice.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
