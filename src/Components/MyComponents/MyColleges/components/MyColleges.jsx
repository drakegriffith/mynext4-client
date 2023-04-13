import { API, init_api } from "../../../../API"
import { useCallback } from "react";
import { Paper, Tabs} from '@mantine/core';
import React, { useEffect, useState, useContext} from "react";
import { SmallCollege } from "../College";
import { Home2,  ThumbUp } from "tabler-icons-react"
import { UserContext } from "../../../../Pages/App";
import { Carousel } from "react-responsive-carousel";
import "../../MyComponents.css"


export const MyColleges = ({  onSelectCollege, setColleges, colleges }) => {
  const [recommendedColleges, setRecommendedColleges] = useState([]);
  const { userID, token } = useContext(UserContext);

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
    },
  };

  function removeCollege(collegeObject) {
    const updatedList = colleges.filter(item => item.id !== collegeObject.id);
    setColleges(updatedList);
    handleDeleteCollegeFeedback(collegeObject);
  }

    const getRecommendedColleges = useCallback(async () => {
      init_api();
      const response = await API.get(`/api/college/recommendations/view/${userID}/`, config);
      setRecommendedColleges(response.data);
    }, [userID]);

    useEffect(() => {
      getRecommendedColleges();
    }, [getRecommendedColleges]);

    const handleDeleteCollegeFeedback = async (college) => {
      try {
        init_api();
        API.post('/api/users/collegelist/delete/', config, {
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
    const collegeRecChunks = chunkArray(recommendedColleges, 6);
    const collegeColChunks = chunkArray(colleges, 6);
  
    
  
    return (
      <Paper shadow="xl" p="md" sx={{ borderRadius: '5px' ,width: "25%", backgroundColor: '#57CC99', border: '.5px solid #C7F9CC' , zIndex: 1 }}>
        <div className="my-component-header">
      <div className="my-component-header-text">
        <b>My Colleges</b>
      </div>
    </div>
    <Tabs default="home">
    <Tabs.List style={{margin: '10px auto 0',borderRadius: '5px',backgroundColor: '#fff', display: 'flex', justifyContent: 'center'}}>
    <Tabs.Tab value="home" className="step-1" style={{color: '#2B2D42'}} icon={<Home2 size="1.6rem" />}><b>Home</b></Tabs.Tab>
      <Tabs.Tab value="recommendations" className="step-2"  style={{color: '#2B2D42'}} icon={<ThumbUp size="1.6rem" />}><b>Recommendations</b></Tabs.Tab>
   </Tabs.List>
   <Tabs.Panel value="home" pt="xl">
        
  
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
      </Tabs.Panel>
      
      <Tabs.Panel value="recommendations" pt="xs">
 
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
                  <SmallCollege college={name} onSelect={() => onSelectCollege(name)} showHeart={false}/>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Carousel>
 
    
      </Tabs.Panel>
      </Tabs>
  

      </Paper>
    
    );
  };
  

  export default MyColleges;