import "./Navbar.css"
import React, {  useState,useEffect} from 'react';
import { Link } from 'react-router-dom';


const Navbar=()=> {
   
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [isNavScrolled, setIsNavScrolled] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsNavScrolled(true);
        } else {
          setIsNavScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = (event, id) => {
      event.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    return (
      <nav className={`navigation ${isNavScrolled ? 'scrolled' : ''}`}>
        
        <a href="/" className="brand-name">
        
        <h1 className="logo-head">DreamDuo</h1>
        </a>
        <button className="hamburger" onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }} title="Toggle Navigation">
        
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
          <ul>
          <li>
            <a href="#features" onClick={(e) => handleScroll(e, 'features')}>How it works</a>
          </li>
          <li>
            <a href="#advantages" onClick={(e) => handleScroll(e, 'advantages')}>Profiles</a>
          </li>
          <li>
            <a href="#industries" onClick={(e) => handleScroll(e, 'industries')}>Our Work</a>
          </li>
          <li>
            <a href="#applications" onClick={(e) => handleScroll(e, 'applications')}>Match making</a>
          </li>
          {/* <li>
            <a href="#casestudies" onClick={(e) => handleScroll(e, 'casestudies')}>Case Studies</a>
          </li>
          <li>
            <a href="#aboutus" onClick={(e) => handleScroll(e, 'aboutus')}>About Us</a>
          </li> */}
          
        </ul>
      
          
        </div>
        <Link to="/login"><button className="buttonnav">Login</button></Link>
      <Link to="/signup"><button className="buttonnav">Signup</button></Link>
      </nav>
    );
  }
  export default Navbar;