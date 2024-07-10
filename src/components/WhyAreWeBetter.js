import React from 'react';
import '../styles/WhyAreWeBetter.css'; // Ensure this CSS file is created for styling

const WhyAreWeBetter = () => {
  const benefits = [
    {
      icon: '🎁', // You can replace this with the actual image URL
      title: 'Exclusive Deals',
      description: 'Best deals made only for you tailored to your preferences.',
    },
    {
      icon: '💡', // You can replace this with the actual image URL
      title: 'Expert Insights',
      description: 'Our wedding experts know how to craft the best for you.',
    },
    {
      icon: '🧘‍♀️', // You can replace this with the actual image URL
      title: 'Stress-free Experience',
      description: 'From venue recce to last second of your wedding, we’ll be with you.',
    },
  ];

  return (
    <section className="why-are-we-better">
      <h2>Why are we better?</h2>
      <p>Because we bring our years of experience in planning your wedding.</p>
      <div className="benefits">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <div className="icon">{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyAreWeBetter;
