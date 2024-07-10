import React from 'react';
import '../styles/SignUpPage.css'; // Ensure this CSS file is created

const SignUpPage = () => {
    return (
        <div className="sign-up-page">
            <div className="sign-up-container">
                <h2>Sign Up</h2>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit" className="sign-up-button">Sign Up</button>
                </form>
                <div className="sign-in-section">
                    <a href="/login" className="sign-in-button">Sign In</a>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
