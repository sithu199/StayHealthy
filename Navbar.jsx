import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"; // Navbar ဒီဇိုင်းအတွက် CSS

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    // Session ထဲမှာ token ရှိမရှိ စစ်ဆေးပြီး UI ကို update လုပ်ပေးမယ်
    useEffect(() => {
        const token = sessionStorage.getItem("auth-token");
        const storedEmail = sessionStorage.getItem("email");
        
        if (token) {
            setIsLoggedIn(true);
            // Email ထဲက နာမည်ကို ယူသုံးခြင်း (ဥပမာ- user@gmail.com ဆိုရင် user လို့ပြမယ်)
            setUsername(storedEmail ? storedEmail.split('@')[0] : "User");
        }
    }, []);

    // Logout လုပ်ဆောင်ချက်
    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("phone");
        setIsLoggedIn(false);
        navigate("/login");
        window.location.reload(); // Page ကို refresh လုပ်ပြီး state ပြောင်းမယ်
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">StayHealthy</Link>
                
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/appointments">Appointments</Link>
                        </li>
                    </ul>

                    <div className="d-flex">
                        {isLoggedIn ? (
                            <>
                                <span className="navbar-text me-3 text-white">
                                    Welcome, {username}
                                </span>
                                <button className="btn btn-outline-light" onClick={handleLogout}>
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/signup" className="btn btn-outline-light me-2">Sign Up</Link>
                                <Link to="/login" className="btn btn-light text-primary">Login</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
