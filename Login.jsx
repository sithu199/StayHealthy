import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; // လိုအပ်လျှင် CSS ချိတ်ရန်

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // အကယ်၍ login ဝင်ထားပြီးသားဆိုရင် Home page ကို တိုက်ရိုက်ပို့ပေးမယ်
  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/");
    }
  }, [navigate]);

  const login = async (e) => {
    e.preventDefault();

    // API Call to login user
    const res = await fetch("https://stayhealthy-backend.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const json = await res.json();

    if (json.authtoken) {
      // Login အောင်မြင်လျှင် Token နှင့် Email သိမ်းပြီး Home သို့သွားမည်
      sessionStorage.setItem("auth-token", json.authtoken);
      sessionStorage.setItem("email", email);
      navigate("/");
      window.location.reload();
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="container" style={{ marginTop: '5%' }}>
      <div className="login-grid">
        <div className="login-form">
          <form onSubmit={login}>
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="btn-group">
              <button type="submit" className="btn btn-primary">Login</button>
              <button type="reset" className="btn btn-danger">Reset</button>
            </div>
            <div className="login-text" style={{ marginTop: '10px' }}>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

