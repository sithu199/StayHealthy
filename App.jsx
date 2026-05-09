import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Landing_Page from './components/Landing_Page';
import Sign_Up from './components/Sign_Up';
import Login from './components/Login';
import InstantConsultation from './components/InstantConsultation';
import Notification from './components/Notification'; // Notification component

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          {/* Notification ကို နေရာတိုင်းမှာ မြင်ရအောင် ဒီမှာ ထည့်ထားပါမယ် */}
          <Notification>
              <Routes>
                <Route path="/" element={<Landing_Page />}/>
                <Route path="/signup" element={<Sign_Up />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/instant-consultation" element={<InstantConsultation />}/>
              </Routes>
          </Notification>
        </BrowserRouter>
    </div>
  );
}

export default App;

