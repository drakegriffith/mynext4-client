import React, { useRef, useCallback } from "react";
import { API, init_api } from "../../../API";
import { Paper, Slider, MantineProvider} from '@mantine/core';
import { UserContext } from "../../../Pages/App";
import { useState, useEffect, useContext } from "react"

import { MediumCourse ,MediumCourseActions, LargeCourseActions, LargeCourse } from "./Course";
import { Carousel } from "react-responsive-carousel";
import { MyCourses } from "./components/MyCourses"
import { AnimatePresence, motion } from 'framer-motion'
import { CourseComputer } from "./components/CourseComputer"
import ShowcaseTabButton from "../helpers/ShowcaseTabButton";
import AuthContext from "../../../Pages/LogIn/AuthContext";

const CourseDataPage = ({setCourses, courses}) => {
    const [selectedCourse, setSelectedCourse] = useState(null); // Large view
    const [selectedCourses, setSelectedCourses] = useState([]); // Medium view
    const [view, setView] = useState("large");
    const [courseLikedList, setCourseLikedList] = useState([]);
    const { userID } = useContext(UserContext)
    const largeCourseRef = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const { auth } = useContext(AuthContext);

    useEffect(() => {
      
      const getLikedList = async () => {
          
          init_api();
          await API.get(`/api/users/courselist/${userID}/`)
          .then((response) => {
              
              console.log(response.data.liked_list);
              setCourseLikedList(response.data.liked_list);
          });
      }
      
      getLikedList();
    }, []);

    
  const addCourse = useCallback(
    (course, score) => {
      const courseIndex = courseLikedList.findIndex(
        (item) => item.course_name === course.course_name
      );

      if (courseIndex === -1) {
        // College does not exist in the list
        init_api();
        API.post("/api/users/courselist/add/", {
          course_name: course.course_name,
          user_id: userID,
          score: score,
        }).then(() => {
          console.log("ADDED");
          setCourseLikedList([...courseLikedList, { ...course, score }]);
        });
      } else {
        // College exists in the list, update the score
        const updatedCourse = {
          ...courseLikedList[courseIndex],
          score,
        };
        init_api();

        API.post("/api/users/courselist/add/", {
          college_name: course.course_name,
          user_id: userID,
          score: score,
        }).then(() => {
          const updatedCourseLikedList = [...courseLikedList];
          updatedCourseLikedList[courseIndex] = updatedCourse;
          setCourseLikedList(updatedCourseLikedList);
        });
      }
    },
    [courseLikedList, userID]
  );
  
    const deleteCourse = (index) => {
     
      setSelectedCourses(
          selectedCourses.filter((_, i) =>  
              i !== index)
          );
    };
  
    
  const selectCourse = useCallback(
    (course) => {
      if (view === "large") {
        setSelectedCourse(course);
      } else {
        if (selectedCourses.length < 4) {
          if (!selectedCourses.some((c) => c.id === course.id)) {
            setSelectedCourses([...selectedCourses, course]);
          } else {
            setErrorMessage("Course already in array.");
            setTimeout(() => setErrorMessage(null), 3000);
          }
        }
       
      }
    },
    [view, selectedCourses]
  );
  
  
    function getCookie(name) {
      let cookieValue = null;
  
      if (document.cookie && document.cookie !== '') {
          const cookies = document.cookie.split(';');
          for (let i = 0; i < cookies.length; i++) {
              const cookie = cookies[i].trim();
  
              // Does this cookie string begin with the name we want?
              if (cookie.substring(0, name.length + 1) === (name + '=')) {
                  cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
  
                  break;
              }
          }
      }
  
      return cookieValue;
  }
  

    const handleTabClick = (tab) => {
      setView(tab);

    };

  const handleLarge = useCallback(
    (course) => {
      setView("large");
      setSelectedCourse(course);
    },
    []
  );
  

    return (
      auth && 
      <div className="component-overall-container">
    
  
        <MyCourses onSelectCourse={selectCourse} setCourses = {setCourseLikedList} courses = {courseLikedList}/>
        <Paper withBorder shadow="xl" p="md" sx={{position: 'relative', width: "40%", top: -10, height:'78vh', margin: '0 3% 0 3%', backgroundColor: '#80ED99', border: '.5px solid #C7F9CC' ,borderRadius: '5px' , zIndex: 1}}>
        <div className="componentMiddleHeader">
            <div className="my-component-header-text"><b> Showcase Courses</b> </div>
            <AnimatePresence>
        {errorMessage && (
          <motion.div
            className="error-message"
          
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            {errorMessage}
          </motion.div>
        )}
      </AnimatePresence>
            <ShowcaseTabButton activeTab={view} setView={setView} onChange={handleTabClick} />
                </div>
            {view === "large" ? (
          <LargeCourseActions 
   
          largeCourseRef={largeCourseRef}
          course={selectedCourse}
          onDelete={() => deleteCourse()}
          onLargeClick={() => handleLarge(selectedCourse)}
          onLike = {addCourse}
          isLiked={courseLikedList.some(
            (likedCourse) => likedCourse.course_name === selectedCourse
          )}
          />
              
            ) : (
              
                <div className="medium-component-container" >

    

                    {selectedCourses.map((course, index) => (
                        index < 4 &&
                        <MediumCourseActions 
                            key={index}
                            largeCourseRef={largeCourseRef}
                            course={course}
                            onDelete={() => deleteCourse(index)}
                            onLargeClick={() => handleLarge(course)}
                            onLike = {addCourse}
                            isLiked={courseLikedList.some(
                              (likedCourse) => likedCourse.course_name === course.course_name
                            )}
                            />
                    ))}
                </div>
            )}
           </Paper>
      <CourseComputer onSelectCourse={selectCourse}
        userID = {userID} />
      </div>

      );
};


export default CourseDataPage;













