// src/components/GiveReviews.jsx
import React, { useState } from 'react';

const GiveReviews = () => {
    const [review, setReview] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (review.trim()) {
            setSubmitted(true); // Submit လုပ်ပြီးရင် button ကို disable လုပ်ရန်
            alert("Review submitted successfully!");
        }
    };

    return (
        <div className="review-container">
            <form onSubmit={handleSubmit}>
                <h2>Give Your Review</h2>
                <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Write your experience here..."
                    disabled={submitted}
                />
                <button type="submit" disabled={submitted || !review}>
                    {submitted ? "Submitted" : "Submit Review"}
                </button>
            </form>
        </div>
    );
};

export default GiveReviews;

