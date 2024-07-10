import React from 'react';
import '../styles/HowItWorks.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Font Awesome is included

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>Find your Special Someone</h2>
      <div className="steps">
        <div className="step">
          <div className="icon bg-cyan">
            <i className="fas fa-user-plus"></i>
          </div>
          <h3>Sign Up</h3>
          <p>Register for free & put up your Matrimony Profile.</p>
        </div>
        <div className="step">
          <div className="icon bg-cyan">
            <i className="fas fa-search"></i>
          </div>
          <h3>Connect</h3>
          <p>Select & Connect with Matches you like.</p>
        </div>
        <div className="step">
          <div className="icon bg-cyan">
            <i className="fas fa-comments"></i>
          </div>
          <h3>Interact</h3>
          <p>Become a Premium Member & Start a Conversation.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
