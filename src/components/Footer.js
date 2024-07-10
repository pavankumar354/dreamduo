import React from 'react';
import '../styles/Footer.css';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h1 className="footer-logo">Dream Duo</h1>
        <p>
          Leading the way in global matchmaking services, Matrimony provides a secure and
          reliable platform to find life partners with ease.
        </p>
      </div>
      <div className="footer-content">
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <ul>
            <li>Email: info@matrimony.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Matrimony St, City, Country</li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className='social-icons'>
              <a href="https://www.facebook.com/profile.php?id=61554736760102&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare className='about-us-2-social-fb about-us-2-social' />
              </a>
              <a href="https://x.com/Neuzenai23?t=GAb-GXaCmbOkKAlUWV3jCg&s=08" target="_blank" rel="noopener noreferrer">
                <FaSquareXTwitter className='about-us-2-social-x about-us-2-social' />
              </a>
              <a href="https://www.instagram.com/neuzenai?igsh=NXB3dDY2OWVzemIw" target="_blank" rel="noopener noreferrer">
                <FaInstagramSquare className='about-us-2-social-insta about-us-2-social' />
              </a>
              <a href="https://www.linkedin.com/company/neuzenai/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='about-us-2-social-linkedin about-us-2-social' />
              </a>
            </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Matrimony. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
