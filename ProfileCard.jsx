// src/components/ProfileCard.jsx
import React, { useEffect, useState } from 'react';

const ProfileCard = () => {
    const [userDetails, setUserDetails] = useState({
        name: sessionStorage.getItem("name") || "",
        phone: sessionStorage.getItem("phone") || "",
        email: sessionStorage.getItem("email") || "",
    });

    const [editMode, setEditMode] = useState(false);

    const handleSave = () => {
        setEditMode(false);
        // လိုအပ်လျှင် ဒီမှာ API နဲ့ Update လုပ်နိုင်သည်
        alert("Profile Updated!");
    };

    return (
        <div className="profile-card">
            <h2>User Profile</h2>
            {editMode ? (
                <div className="edit-form">
                    <input type="text" value={userDetails.name} onChange={(e) => setUserDetails({...userDetails, name: e.target.value})} />
                    <input type="tel" value={userDetails.phone} onChange={(e) => setUserDetails({...userDetails, phone: e.target.value})} />
                    <button onClick={handleSave}>Save Changes</button>
                </div>
            ) : (
                <div className="display-info">
                    <p><strong>Name:</strong> {userDetails.name}</p>
                    <p><strong>Phone:</strong> {userDetails.phone}</p>
                    <p><strong>Email:</strong> {userDetails.email}</p>
                    <button onClick={() => setEditMode(true)}>Edit Profile</button>
                </div>
            )}
        </div>
    );
};

export default ProfileCard;

