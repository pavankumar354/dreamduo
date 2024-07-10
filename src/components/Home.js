import React from 'react';
import "../styles/Home.css";
import HowItWorks from "./HowItWorks.js";
import FeaturedProfiles from "./FeaturedProfiles.js"; // Make sure to create this CSS file in your project
import WhyAreWeBetter from "./WhyAreWeBetter.js";
import Testimonials from "./Testimonials.js";

function HomePage() {
    return (
        <div>
        <div className="homepage" >
        
            <div className="header">
            <h1 className="title">The World's No.1 Matrimonial Service</h1>
                <div className="search-box">
                    <div className="search-field">
                        <label className="im">I'm looking for a</label>
                        <select>
                            <option>Woman</option>
                            <option>Man</option>
                        </select>
                    </div>
                    <div className="search-field">
                        <label>Age</label>
                        <input type="number" defaultValue="22" min="18" />
                        <span>to</span>
                        <input type="number" defaultValue="27" min="18" />
                    </div>
                    <div className="search-field">
                        <label>Religion</label>
                        <select>
                            <option>Select</option>
                            <option>Hindu</option>
                            <option>Muslim</option>
                            <option>Christian</option>
                        </select>
                    </div>
                    <div className="search-field">
                        <label>Caste</label>
                        <select>
                            <option>Kamma</option>
                            <option>Reddy</option>
                            <option>Velma's</option>
                            <option>Tenugu</option>
                        </select>
                    </div>
                    <div className="search-field">
                        <label>Region</label>
                        <select>
                            <option>India</option>
                            <option>USA</option>
                            <option>Canada</option>
                           
                        </select>
                    </div>
                    <div className="search-field">
                        <label>Mother Tongue</label>
                        <select>
                            <option>Select</option>
                            <option>Hindi</option>
                            <option>English</option>
                            <option>Telugu</option>
                            <option>Others</option>
                        </select>
                    </div>
                    <button className="search-button">Let's Begin</button>
                </div>
            </div>
        </div>
        <HowItWorks/>
        <FeaturedProfiles/>
        <WhyAreWeBetter/>
        <Testimonials/>
        </div>
    );
}

export default HomePage;
