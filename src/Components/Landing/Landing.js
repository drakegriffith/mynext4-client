import React from "react";
import LandingButton from "./LandingButton";
import InstagramLoop from "./InstagramLoop";

const Landing = () => {
    return (
        <div className="landing-container">
            <InstagramLoop />
            <h3 style={{ 
                textAlign: 'center', 
                backgroundColor: 'white', 
                borderRadius: '15px', 
                padding: '20px', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // Optional shadow for effect
            }}>
                The MyNext4 team has decided to move on from our LLC; The sign-in, course, college, and career search features are all unusable as of September 13, 2024.
            </h3>
    
            {/* <LandingButton /> */}
        </div>
}

export default Landing;
