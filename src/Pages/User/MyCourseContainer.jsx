import React, { useRef, useCallback } from "react";
import { API, init_api } from "../../API";
import { Paper } from '@mantine/core';
import { UserContext } from "../App";
import { useState, useEffect, useContext } from "react"
import "../../Components/MyComponents/MyComponents.css"
import "../../Components/MyComponents/MyCourses/MyCourses.css"
import { MediumCourseActions, LargeCourseActions } from "../../Components/MyComponents/MyCourses/Course";
import { MyCourses } from "../../Components/MyComponents/MyCourses/components/MyCourses"
import { AnimatePresence, motion } from 'framer-motion'
import { CourseComputer } from "../../Components/MyComponents/MyCourses/components/CourseComputer"
import ShowcaseTabButton from "../../Components/MyComponents/helpers/ShowcaseTabButton";
import { AuthContext } from "../../Components/Auth/AuthContext";
import Joyride, { STATUS } from 'react-joyride';
const CourseDataPage = ({setCourses, courses}) => {
  const [showTutorialCards, setShowTutorialCards] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null); // Large view
    const [selectedCourses, setSelectedCourses] = useState([]); // Medium view
    const [view, setView] = useState("large");
    const [courseLikedList, setCourseLikedList] = useState([]);
    const { userID, token } = useContext(UserContext)
    const largeCourseRef = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const { isAuthenticated } = useContext(AuthContext);

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
    };

    useEffect(() => {
      const getLikedList = async () => {
        init_api();
        await API.get(`/api/users/courselist/${userID}/`, config)
          .then((response) => {
            setCourseLikedList(response.data.liked_list);
          });
      }
    
      if (userID) {
        getLikedList();
      }
    }, [userID]);
    
    useEffect(() => {
      const setTutorialCardsComplete = async () => {
        try {
          await API.post(`/mark-completed-tutorial-cards/${userID}/`, config);
        } catch (error) {
          console.error('Error marking survey as completed:', error);
        }
      }
    
      if (showTutorialCards && userID) {
        setTutorialCardsComplete();
      };
    }, [showTutorialCards, userID])
    
    useEffect(() => {
      const checkTutorialCompletion = async () => {
        try {
          const response = await API.get(`/check-tutorial-complete-cards/${userID}/`, config);
          setShowTutorialCards(!response.data.tutorialStatusCards)
        } catch (error) {
          console.error('Error checking survey completion:', error);
        }
      };
    
      if (userID) {
        checkTutorialCompletion();
      }
    }, [userID]);
    

    
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
        }, config).then(() => {
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
        }, config).then(() => {
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

  const handleJoyrideCallback = (data) => {
    const { status } = data;
  
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setShowTutorialCards(false);
    }
  };

  
  

  const tutorialSteps = [
    {
      target: '.step-1-tut',
      content: 'Welcome to your personalized component page! This is where you can add, analyze, and compare cards with one another.',
    },
    {
      target: '.step-2-tut',
      content: 'View your liked component list and your newly receieved recommendations here!',
    },
    {
      target: '.step-3-tut',
      content: 'Choose component cards to compare or independantly inspect one with our showcase feature.',
    },
    {
      target: '.step-4-tut',
      content: "Click on cards and inspect their attributes in the middle area. Click the search icon on the card to view it's main page.",
    },
    {
      target: '.step-5-tut',
      content: "Search for component cards using the see feature. Filter and find the best choices for you.",
    },
    // ...
  ];

  
  
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
      isAuthenticated && 
      <div className="component-overall-container step-3-tut">
         <Joyride
        steps={tutorialSteps}
        run={showTutorialCards}
        callback={handleJoyrideCallback}
        continuous
        scrollToFirstStep
        showProgress
        showSkipButton
      />
  
        <MyCourses className="step-2-tut" onSelectCourse={selectCourse} setCourses = {setCourseLikedList} courses = {courseLikedList}/>
        <Paper  withBorder className="step-1-tut" shadow="xl" p="md" sx={{position: 'relative', width: "40%", top: -30, height:'82vh', margin: '0 1.5% 0 1.5%', backgroundColor: '#57CC99', border: '.5px solid #C7F9CC' ,borderRadius: '5px' , zIndex: 1}}>
        <div className="componentMiddleHeader">
            <div className="my-component-header-text step-4-tut"><b> Showcase Courses</b> </div>
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
          isLiked={selectedCourse && courseLikedList.some(
            (likedCourse) => likedCourse.course_name === selectedCourse.course_name
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
      <CourseComputer className="step-5-tut" onSelectCourse={selectCourse}
        userID = {userID} />
      </div>

      );
};


export default CourseDataPage;













