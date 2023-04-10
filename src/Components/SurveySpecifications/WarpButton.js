import React, { useContext, useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../../Pages/App';
import Sparkles from '../Sparkles/Sparkles';
import { API, init_api } from '../../API';
import "./SurveySpecifications.css"
function WarpButton() {
    init_api();
    const navigate = useNavigate();
    const [buttonText, setButtonText] = useState('Activate your MyNext4');
    const { userID } = useContext(UserContext)

    const activateRecommendationCourse = useCallback(async () => {
      try {
        await API.get(`/api/course/recommendations/${userID}/`);
      } catch (error) {
        console.error(error);
      }
    }, [userID]);
    
    const activateRecommendationCollege = useCallback(async () => {
      try {
        await API.get(`/api/college/recommendations/${userID}/`);
      } catch (error) {
        console.error(error);
      }
    }, [userID]);
    
    const activateRecommendationCareer = useCallback(async () => {
      try {
        await API.get(`/api/career/recommendations/${userID}/`);
      } catch (error) {
        console.error(error);
      }
    }, [userID]);
    

    

    useEffect(() => {
      const warpButton = document.getElementById("warp-button");
    
      const handleClick = async (event) => {
        event.preventDefault();
        setButtonText('Writing recommendations...');
        await activateRecommendationCareer();
        await activateRecommendationCollege();
        await activateRecommendationCourse();
        setTimeout(() => {
          navigate(`/my/account/${userID}`) // Replace with the URL of your dashboard
         }, 5000); // 5 seconds delay
        // Do something after activating the recommendations
      };
    
      warpButton.addEventListener("click", handleClick);
    
      return () => {
        warpButton.removeEventListener("click", handleClick);
      };
    }, [activateRecommendationCareer, activateRecommendationCollege, activateRecommendationCourse, navigate, userID]);
  
    return (
      <button
      className="btnGlow"
        id="warp-button"
      >
       <Sparkles>{buttonText}</Sparkles>
      </button>

    );
  }

  export default WarpButton;
  