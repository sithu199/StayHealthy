// src/components/DoctorCard.jsx
import React, { useState } from 'react';
import AppointmentForm from './AppointmentForm';
import './DoctorCard.css';

const DoctorCard = ({ name, speciality, experience, ratings }) => {
    const [showForm, setShowForm] = useState(false);
    const [appointments, setAppointments] = useState([]);

    const handleBooking = (newAppointment) => {
        setAppointments([...appointments, newAppointment]);
        setShowForm(false);
        alert(`Appointment booked successfully with Dr. ${name}`);
    };

    const handleCancel = (index) => {
        const updatedAppointments = appointments.filter((_, i) => i !== index);
        setAppointments(updatedAppointments);
        alert("Appointment Cancelled Successfully");
    };

    return (
        <div className="doctor-card">
            <div className="doctor-info">
                <h3>{name}</h3>
                <p><strong>Speciality:</strong> {speciality}</p>
                <p><strong>Experience:</strong> {experience} years</p>
                <p><strong>Ratings:</strong> {ratings} ⭐</p>
            </div>

            {appointments.length > 0 ? (
                <div className="appointment-details">
                    <h4>Booked Appointment:</h4>
                    {appointments.map((appointment, index) => (
                        <div key={index} className="booked-card">
                            <p>Patient: {appointment.name}</p>
                            <p>Date: {appointment.date} | Time: {appointment.time}</p>
                            <button 
                                className="btn btn-danger" 
                                onClick={() => handleCancel(index)}
                            >
                                Cancel Appointment
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <button className="btn btn-primary" onClick={() => setShowForm(true)}>
                    Book Appointment
                </button>
            )}

            {showForm && (
                <div className="modal">
                    <AppointmentForm doctorName={name} onSubmit={handleBooking} />
                    <button onClick={() => setShowForm(false)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default DoctorCard;
