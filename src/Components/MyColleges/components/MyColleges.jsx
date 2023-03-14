import { API, init_api } from "../../../API"
import { init_API_College_AI, API_College_AI } from "../../../API_College_AI"
import { Paper, Slider, MantineProvider} from '@mantine/core';
import React, { useEffect, useState, useRef, useContext} from "react";
import { SmallCollege, MediumCollege, LargeCollege, Button } from "../College";
import { useParams } from "react-router";

export const MyColleges = ({ onSelectCollege, setColleges, colleges, removeDuplicates }) => {
    const [activeTab, setActiveTab] = useState('home');

    const userID = useParams().userID;
  
    const handleRemoveDuplicate = () => {
      const uniqueList = removeDuplicates(colleges);
      setColleges(uniqueList);
    }


    function removeCollege(college) {
      const updatedList = colleges.filter(item => item.college_id !== college)
      console.log(updatedList)
      setColleges(updatedList);
      handleDeleteCollegeFeedback(college);
    }

    const deleteCollege = (index) => {
      const college = colleges[index];

      const collegeId = college.college_id;
      removeCollege(college);
      setColleges(
        colleges.filter((_, i) => i !== index)
      );
    };

    
    const handleDeleteCollegeFeedback = async (college) => {
      

      try {
        init_api();
        API.post('/api/users/collegelist/delete/', {
          college_name: college.college_name,
          user_id: userID,

        })

        // do something with the response data
      } catch (error) {
        console.error(error);
        // handle error
      }
    }
  

    
  
    const handleFavoriteToggle = (collegeUnitId, isFavorited) => {
      const updatedUserColleges = colleges.map((collegeArr) => {
        const college = collegeArr[0];
        if (college.collegeUnitId === collegeUnitId) {
          return [{ ...college, isFavorited}];
        }
        return collegeArr;
      });
      setColleges(updatedUserColleges);
    };
  
    const favoriteColleges = colleges && colleges.filter((collegeArr) => {
      const college = collegeArr[0];
      return college.isFavorited;
    });
  
    function handleTabClick(tab) {
      setActiveTab(tab);
    }
  
    return (
      <Paper className="college-container" shadow="lg" p="md" sx={{width: "25%" ,  marginLeft: '2.5%', marginRight: "5%"}}>
        <div className="mycolleges-header">
          <div className="mycolleges-header-text"><b>My Colleges</b></div>
          <button
         className={`tab-button ${activeTab === 'home' ? 'active' : ''}`}
         onClick={() => handleTabClick('home')}
       >
         Home
       </button>
       <button
         className={`tab-button ${
           activeTab === 'favorites' ? 'active' : ''
         }`}
         onClick={() => handleTabClick('favorites')}
       >
         Favorites
       </button>
        </div>
  
        {activeTab === 'home' && (
        
          <ul className="my-college-list">
             {colleges && colleges.map((college) => (
          <SmallCollege key={college[0].collegeUnitId} onClick={() => onSelectCollege(college)} college={college} onFavoriteToggle={handleFavoriteToggle} />
             ))}
            </ul>
        )
      }
  
        {activeTab === 'favorites' && (
           <ul className="my-college-list">
          {favoriteColleges && favoriteColleges.map((collegeArr => (
            <SmallCollege key={collegeArr[0].collegeUnitId} onClick={() => onSelectCollege(collegeArr)} college={collegeArr} onFavoriteToggle={handleFavoriteToggle} /> 
          )))}
          </ul>
  
        )}
      </Paper>
    
    );
  };
  

  export default MyColleges;