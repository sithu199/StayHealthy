// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const isLoggedIn = sessionStorage.getItem("auth-token");

    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("email");
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link resolve to="/">StayHealthy</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/appointments">Appointments</Link></li>
                {isLoggedIn ? (
                    <>
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;

