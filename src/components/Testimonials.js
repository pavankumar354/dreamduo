import React from 'react';
import '../styles/Testimonials.css';
import couple1 from "../images/couple1.jpg" ;
import couple2 from "../images/couple2.jpg" ;
import couple3 from "../images/couple3.jpg" ;
import couple4 from "../images/couple4.jpg" ;

const testimonials = [
  {
    image: couple1, // Replace with actual image URL
    name: 'Surabhi & Saumyadeep',
    location: 'Bengaluru, Karnataka',
    rating: 5,
    testimonial: 'We had an intercultural wedding & our planner included elements from both Bengali and South Indian culture.',
  },
  {
    image: couple2, // Replace with actual image URL
    name: 'Ankita & Bharat',
    location: 'Bengaluru, Karnataka',
    rating: 5,
    testimonial: 'Radhika, our wedding planner made not only our wedding day, but all the functions - big and small worry-free.',
  },
  {
    image: couple3, // Replace with actual image URL
    name: 'Vaishali & Amrit',
    location: 'Bengaluru, Karnataka',
    rating: 5,
    testimonial: 'I always dreamt of a traditional wedding and working with Ankita made it happen so smoothly. She took care of everything - from start to end.',
  },
  {
    image: couple4, // Replace with actual image URL
    name: 'Krithika & Tyler',
    location: 'Bengaluru, Karnataka',
    rating: 5,
    testimonial: 'It was Tyler’s first time experiencing an Indian wedding, and our planner made it so stress-free that we enjoyed a lot.',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Our work speaks for us</h2>
      <p className="testp">People love the way we planned their weddings. We made it perfect.</p>
      <a href="#view-all" className="view-all">View all</a>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={`${testimonial.name}`} />
            <div className="testimonial-content">
              <h3>{testimonial.name}</h3>
              <p className="location">{testimonial.location}</p>
              <div className="rating">
                {Array(testimonial.rating).fill('⭐')}
              </div>
              <p className="testimonial">{testimonial.testimonial}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
