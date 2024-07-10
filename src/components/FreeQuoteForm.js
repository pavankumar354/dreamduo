import React from 'react';
import '../styles/FreeQuoteForm.css';

const FreeQuoteForm = () => {
  return (
    <div className="free-quote-form">
      <h2>Get Free Quote</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="details">Details</label>
          <textarea id="details" name="details" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FreeQuoteForm;
