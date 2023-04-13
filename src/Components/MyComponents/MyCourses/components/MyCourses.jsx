import React, { useCallback, useEffect, useState, useContext } from "react";
import { SmallCourse } from "../Course";
import { API, init_api } from "../../../../API";
import { UserContext } from "../../../../Pages/App";
import { Paper } from "@mantine/core";
import { Home2, ThumbUp } from "tabler-icons-react"
import { Carousel } from "react-responsive-carousel";
import { Tabs } from '@mantine/core';
import "../../MyComponents.css"

export const MyCourses = ({ onSelectCourse, setCourses, courses, removeDuplicates}) => {
    const [recommendedCourses, setRecommendedCourses] = useState([]);
    const { userID, token } = useContext(UserContext)

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
    };

    const getRecommendations = useCallback(async () => {
      init_api();
      await API.post(`/mark-recommendations-completed/${userID}/`);
      const response = await API.get(`/api/course/recommendations/view/${userID}/`, config);
      setRecommendedCourses(response.data);

    }, [userID]);

    useEffect(() => {
      getRecommendations();
    },[userID, getRecommendations])

    
    function removeCourse(courseObject) {
      const updatedList = courses.filter(item => item.id !== courseObject.id);
      setCourses(updatedList);
      handleDeleteCourseFeedback(courseObject);
    }

    
    const handleDeleteCourseFeedback = async (course) => {
      
      console.log(course)
      try {
        init_api();
        API.post('/api/users/courselist/delete/', {
          course_name: course.course_name,
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
    const courseRecChunks = chunkArray(recommendedCourses, 6);

    const courseCouChunks = chunkArray(courses, 6);

    return (
      <Paper shadow="xl" p="md" sx={{borderRadius: '5px' ,width: "25%", backgroundColor: '#57CC99', border: '.5px solid #C7F9CC' , zIndex: 1 }}>
      <div className="my-component-header">
    <div className="my-component-header-text">
      <b>My Courses</b>
    </div>
    </div>
    <Tabs default="home">
    <Tabs.List style={{borderRadius: '5px',backgroundColor: '#fff',margin: '10px auto 0', display: 'flex', justifyContent: 'center'}}>
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
      {courseCouChunks.map((chunk, chunkIndex) => (
        <div key={chunkIndex} className="carousel-slide">
          <ul className="my-component-list">
            {chunk.map((name, id) => (
              <li key={chunkIndex * 8 + id} className="my-component-list-item" >
              
                <SmallCourse key={id} onDelete={() => removeCourse(name)} isLiked={true} course={name} onSelect={() => onSelectCourse(name)} showHeart={true}/>
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
      {courseRecChunks.map((chunk, chunkIndex) => (
        <div key={chunkIndex} className="carousel-slide">
          <ul className="my-component-list">
            {chunk.map((name, id) => (
              <li key={chunkIndex * 6 + id} className="my-component-list-item" >
                <SmallCourse key={id} course={name} onSelect={() => onSelectCourse(name)} showHeart={true}/>
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
  