import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../../Pages/App';

function WarpButton() {
    const navigate = useNavigate();
    const [isWarping, setIsWarping] = useState(false);
    const { userID } = useContext(UserContext)
  
    useEffect(() => {
      const warpButton = document.getElementById('warp-button');
  
      const handleClick = (event) => {
        event.preventDefault();
        setIsWarping(true);
  
        setTimeout(() => {
         navigate(`/my/account/${userID}`) // Replace with the URL of your dashboard
        }, 5000); // 5 seconds delay
      };
  
      warpButton.addEventListener('click', handleClick);
  
      return () => {
        warpButton.removeEventListener('click', handleClick);
      };
    }, []);
  
    return (
      <button
        className={`btn-glow ${isWarping ? 'warp' : ''}`}
        id="warp-button"
      >
        Unlock your Next4
      </button>
    );
  }

  export default WarpButton;
  