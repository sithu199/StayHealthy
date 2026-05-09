import React, { useState } from 'react';
import './FindDoctorSearch.css';
import { useNavigate } from 'react-router-dom';

const initSpeciality = [
    'Dentist', 'Gynecologist/Obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ent) Specialist', 'Homeopath', 'Ayurveda'
];

const FindDoctorSearch = () => {
    const [type, setType] = useState('Speciality');
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities, setSpecialities] = useState(initSpeciality);
    const navigate = useNavigate();

    const handleDoctorSearch = (speciality) => {
        // ဆရာဝန်ရှာဖွေပြီးနောက် ရလဒ်ပြမည့် page သို့သွားရန်
        navigate(`/finddoctor?speciality=${speciality}`);
    };

    return (
        <div className='finddoctor'>
            <center>
                <h1>Find a doctor and Consult instantly</h1>
                <div className="home-search-container">
                    <div className="doctor-search-box">
                        <input 
                            type="text" 
                            className="search-doctor-input-box" 
                            placeholder="Search doctors, clinics, hospitals, etc." 
                            value={searchDoctor}
                            onChange={(e) => setSearchDoctor(e.target.value)}
                        />
                        <div className="search-doctor-input-results">
                            {searchDoctor && specialities.filter(s => s.toLowerCase().includes(searchDoctor.toLowerCase())).map((speciality) => (
                                <div className="search-doctor-result-item" key={speciality} onClick={() => handleDoctorSearch(speciality)}>
                                    <span>{speciality}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </center>
        </div>
    );
};

export default FindDoctorSearch;

