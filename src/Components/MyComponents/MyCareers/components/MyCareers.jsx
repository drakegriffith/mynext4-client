import React, { useCallback, useEffect, useState, useContext } from "react";
import { SmallCareer, MediumCareer, LargeCareer} from "../Career";
import { API, init_api } from '../../../../API';
import Nav from "../../../Nav/Nav";
import { Home2, Bookmarks } from "tabler-icons-react"
import { useLocation, useParams } from "react-router";
import AuthContext from '../../../../Pages/LogIn/AuthContext';
import { UserContext } from "../../../../Pages/App";
import { Paper } from "@mantine/core";
import { Carousel } from "react-responsive-carousel";
import MyTabButton from "../../helpers/MyTabButton";


export const MyCareers = ({  onSelectCareer, setCareers, careers, removeDuplicates}) => {
  const [recommendedCareers, setRecommendedCareers] = useState([]);
  const [activeTab, setActiveTab] = useState("home");
  const { userID } = useContext(UserContext);
   
    const getRecommendedCareers = useCallback(async () => {
      init_api();
    
      const response = await API.get(`/api/career/recommendations/view/${userID}/`);
      console.log("RECOMMENDED");
      console.log(response.data);
      setRecommendedCareers(response.data);
    }, [userID]);

    useEffect(() => {
      getRecommendedCareers();
    }, [getRecommendedCareers]);


    function removeCareer(careerObject) {
      const updatedList = careers.filter(item => item.id !== careerObject.id);
      console.log("UPDATED LIST")
    
      setCareers(updatedList);
      handleDeleteCareerFeedback(careerObject);
    }


    const handleDeleteCareerFeedback = async (career) => {
      

      try {
        init_api();
        API.post('/api/users/careerlist/delete/', {
          career_name: career.career_name,
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
    const careerRecChunks = chunkArray(recommendedCareers, 8);
    const careerColChunks = chunkArray(careers, 8);
    
    const handleTabClick = (tab) => {
      setActiveTab(tab);
      console.log(activeTab)
    };

  
    return (
      <Paper shadow="xl" p="md" sx={{border: '.5px solid #8D99AE' ,borderRadius: '5px' ,width: "25%", backgroundColor: '#8D99AE ', zIndex: 1 }}>
      
      <div className="my-component-header">
      <div className="my-component-header-text">
        <span style={{fontWeight: 900, color: 'white'}}>My</span>Careers
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
        {careerColChunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="carousel-slide">
            <ul className="my-component-list">
              {chunk.map((name, id) => (
                <li key={chunkIndex * 8 + id} className="my-component-list-item" >
                
                  <SmallCareer onDelete={() => removeCareer(name)} career={name} onSelect={() => onSelectCareer(name)} isLiked={true} showHeart={true}/>
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
        {careerRecChunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="carousel-slide">
            <ul className="my-component-list">
              {chunk.map((name, id) => (
                <li key={chunkIndex * 8 + id} className="my-component-list-item" >
                  <p> {name.career_name} </p>
                  <SmallCareer career={name} onSelect={() => onSelectCareer(name)} showHeart={true}/>
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
  
  
  