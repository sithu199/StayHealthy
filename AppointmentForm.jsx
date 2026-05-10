// src/components/AppointmentForm.jsx
import React, { useState } from 'react';

const AppointmentForm = ({ doctorName, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // မိဘ component ဆီသို့ data များ ပေးပို့ခြင်း
        onSubmit({ name, phoneNumber, date, time });
        // Form ကို reset ချခြင်း
        setName('');
        setPhoneNumber('');
        setDate('');
        setTime('');
    };

    return (
        <form onSubmit={handleFormSubmit} className="appointment-form">
            <h3>Book Appointment with Dr. {doctorName}</h3>
            <div className="form-group">
                <label>Patient Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter patient name"
                />
            </div>
            <div className="form-group">
                <label>Phone Number:</label>
                <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    placeholder="Enter phone number"
                />
            </div>
            <div className="form-group">
                <label>Date of Appointment:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Time Slot:</label>
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Book Now</button>
        </form>
    );
};

export default AppointmentForm;
