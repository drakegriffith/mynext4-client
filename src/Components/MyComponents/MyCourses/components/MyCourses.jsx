import React, { useCallback, useEffect, useState, useContext } from "react";
import { SmallCourse } from "../Course";
import { API, init_api } from "../../../../API";
import { UserContext } from "../../../../Pages/App";
import { Paper } from "@mantine/core";
import { Carousel } from "react-responsive-carousel";
import MyTabButton from "../../helpers/MyTabButton";
import "../../MyComponents.css"

export const MyCourses = ({ onSelectCourse, setCourses, courses, removeDuplicates}) => {
    const [recommendedCourses, setRecommendedCourses] = useState([]);
    const [activeTab, setActiveTab] = useState("home");
    const { userID } = useContext(UserContext)
    const [hasReceivedRecommendations, setHasReceivedRecommendations] = useState(false);


    const getRecommendations = useCallback(async () => {
      init_api();
      await API.post(`/mark-recommendations-completed/${userID}/`);
      const response = await API.get(`/api/course/recommendations/view/${userID}/`);
      setRecommendedCourses(response.data);
    }, [userID]);

    useEffect(() => {
      const checkRecommendationStatus = async () => {
        init_api();
        const response = await API.get(`/check-recommendations/${userID}/`);
        setHasReceivedRecommendations(response.data.recommendStatus);
        if (response.data.recommendStatus) {
          getRecommendations();
        }
      };
  
      checkRecommendationStatus();
    }, [userID, getRecommendations]);

  
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
    const courseRecChunks = chunkArray(recommendedCourses, 8);
    const courseCouChunks = chunkArray(courses, 8);
    console.log(courseCouChunks)

    const handleTabClick = (tab) => {
      setActiveTab(tab);
      console.log(activeTab)
    };
    return (
      <Paper shadow="xl" p="md" sx={{borderRadius: '5px' ,width: "25%", backgroundColor: '#57CC99', border: '.5px solid #C7F9CC' , zIndex: 1 }}>
      <div className="my-component-header">
    <div className="my-component-header-text">
      <b>My Courses</b>
    </div>
    <div>
    <MyTabButton activeTab={activeTab} onChange={handleTabClick} />
    </div>
  </div>

      {activeTab === 'home' && (
      

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
              
                <SmallCourse onDelete={() => removeCourse(name)} isLiked={true} course={name} onSelect={() => onSelectCourse(name)} showHeart={true}/>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Carousel>
  
      )
    }

{activeTab === "recommended" && (

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
              <li key={chunkIndex * 8 + id} className="my-component-list-item" >
                <p> {name.course_name} </p>
                <SmallCourse course={name} onSelect={() => onSelectCourse(name)} showHeart={true}/>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Carousel>

  )}
    </Paper>
  
  );
};
  