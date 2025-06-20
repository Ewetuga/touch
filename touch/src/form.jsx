import React, { useState } from 'react'
import './App.css'

function Form() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        plan: 'basic',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <div className="form-container">
            <div className="form-header">
                <h2>Get Started Today</h2>
                <p>Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="signup-form">
                <div className="input-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                    />
                </div>

                <div className="input-group">
                    <label>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                    />
                </div>

                <div className="input-group">
                    <label>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (234) 567-8900"
                    />
                </div>

                <div className="input-group">
                    <label>Select Plan</label>
                    <select
                        name="plan"
                        value={formData.plan}
                        onChange={handleChange}
                    >
                        <option value="basic">Basic Plan</option>
                        <option value="premium">Premium Plan</option>
                        <option value="enterprise">Enterprise Plan</option>
                    </select>
                </div>

                <div className="input-group">
                    <label>Your Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your needs..."
                        rows="4"
                    ></textarea>
                </div>

                <button type="submit" className="form-button">
                    Submit Request
                </button>
            </form>
        </div>
    );
}

export default Form; 