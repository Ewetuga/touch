import React from 'react';
import './App.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>We provide innovative financial solutions to help you manage your money better and achieve your financial goals.</p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <ul>
                        <li>📍 123 Finance Street</li>
                        <li>📞 (555) 123-4567</li>
                        <li>✉️ support@example.com</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook" className="social-icon">
                            🌐
                        </a>
                        <a href="#" aria-label="Twitter" className="social-icon">
                            🐦
                        </a>
                        <a href="#" aria-label="LinkedIn" className="social-icon">
                            💼
                        </a>
                        <a href="#" aria-label="Instagram" className="social-icon">
                            📸
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 Financial Services. All rights reserved.</p>
                <div className="footer-bottom-links">
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#terms">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
