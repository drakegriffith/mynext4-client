import React from "react";
import "./LandingButton.css";
import { useNavigate } from "react-router";

const LandingButton = () => {
    const navigate = useNavigate();

    function handleSwitch() {
        navigate('/web/auth/account')
    }
  return (
    <div className="button-container">
      <button className="landing-button" onClick={(handleSwitch)}>Make your MyNext4</button>
    </div>
  );
};

export default LandingButton;
