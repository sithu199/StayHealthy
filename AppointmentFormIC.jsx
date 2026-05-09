// src/components/AppointmentFormIC.jsx
import React, { useState } from 'react';

const AppointmentFormIC = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, phoneNumber });
        setName('');
        setPhoneNumber('');
    };

    return (
        <form onSubmit={handleFormSubmit} className="appointment-form">
            <h3>Book Appointment</h3>
            <div className="form-group">
                <label htmlFor="name">Patient Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn-primary">Book Now</button>
        </form>
    );
};

export default AppointmentFormIC;

