import { API, init_api } from "../../../../API"
import { useCallback } from "react";
import { init_API_College_AI, API_College_AI } from "../../../../API_College_AI"
import { Paper, Slider, MantineProvider} from '@mantine/core';
import React, { useEffect, useState, useRef, useContext} from "react";
import { SmallCollege, MediumCollege, MediumCollegeActions, LargeCollege, Button } from "../College";
import { useParams } from "react-router";
import { UserContext } from "../../../../Pages/App";
import { Carousel } from "react-responsive-carousel";
import "../../MyComponents.css"
import MyTabButton from "../../helpers/MyTabButton";

export const MyColleges = ({  onSelectCollege, setColleges, colleges }) => {
  const [recommendedColleges, setRecommendedColleges] = useState([]);
  const [activeTab, setActiveTab] = useState("home");
  const { userID } = useContext(UserContext);

  function removeCollege(collegeObject) {
    const updatedList = colleges.filter(item => item.id !== collegeObject.id);
    setColleges(updatedList);
    handleDeleteCollegeFeedback(collegeObject);
  }

    const getRecommendedColleges = useCallback(async () => {
      init_api();
    
      const response = await API.get(`/api/college/recommendations/view/${userID}/`);
      console.log("RECOMMENDED");
      console.log(response.data);
      setRecommendedColleges(response.data);
    }, [userID]);

    useEffect(() => {
      getRecommendedColleges();
    }, [getRecommendedColleges]);
    function removeCollege(college) {
      const updatedList = colleges.filter(item => item.college_id !== college)
      console.log(updatedList)
      setColleges(updatedList);
      handleDeleteCollegeFeedback(college);
    }


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

    

   
  

    const chunkArray = (array, size) => {
      const chunks = [];
      for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
      }
      return chunks;
    };
    const collegeRecChunks = chunkArray(recommendedColleges, 8);
    const collegeColChunks = chunkArray(colleges, 8);
    
    
  
    const handleTabClick = (tab) => {
      setActiveTab(tab);
      console.log(activeTab)
    };
  
    return (
      <Paper shadow="xl" p="md" sx={{ borderRadius: '5px' ,width: "25%", backgroundColor: '#80ED99', border: '.5px solid #C7F9CC' , zIndex: 1 }}>
        <div className="my-component-header">
      <div className="my-component-header-text">
        <b>My Colleges</b>
      </div>
      <MyTabButton activeTab={activeTab} onChange={handleTabClick} />
    </div>
  
        {activeTab === 'home' && (
        
          <ul className="my-component-list">
            <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        {collegeColChunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="carousel-slide">
            <ul className="my-component-list">
              {chunk.map((name, id) => (
                <li key={chunkIndex * 8 + id} className="my-component-list-item" >
                
                  <SmallCollege onDelete={() => removeCollege(name)} college={name} onSelect={() => onSelectCollege(name)} showHeart={false}/>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Carousel>
            </ul>
        )
      }
  
  {activeTab === "recommended" && (
      <ul className="my-component-list">
           <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        {collegeRecChunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="carousel-slide">
            <ul className="my-component-list">
              {chunk.map((name, id) => (
                <li key={chunkIndex * 8 + id} className="my-component-list-item" >
                  <p> {name.college_name} </p>
                  <SmallCollege college={name} onSelect={() => onSelectCollege(name)} showHeart={false}/>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Carousel>
      </ul>
    )}
  

      </Paper>
    
    );
  };
  

  export default MyColleges;