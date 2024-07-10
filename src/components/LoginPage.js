import React from 'react';
import '../styles/LoginPage.css';

const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Sign In</h2>
                <form>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="google.com" className="forgot-password">Forgot your password?</a>
                    <button type="submit" className="login-button" href="/login">Sign In</button>
                </form>
                <div className="sign-up-section">
                    <a href="/signup" className="sign-up-button">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
