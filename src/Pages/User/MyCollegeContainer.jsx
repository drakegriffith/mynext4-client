import React, { useCallback, useContext, useState, useEffect, useRef} from "react";
import "../../Components/MyComponents/MyComponents.css"
import "../../Components/MyComponents/MyColleges/MyColleges.css"
import { AnimatePresence, motion } from 'framer-motion'
import { MediumCollegeActions, LargeCollegeActions } from "../../Components/MyComponents/MyColleges/College";
import { API, init_api } from "../../API";
import { Paper } from "@mantine/core";
import { MyColleges } from "../../Components/MyComponents/MyColleges/components/MyColleges"
import { CollegeComputer } from "../../Components/MyComponents/MyColleges/components/CollegeComputer"
import { UserContext } from "../App";
import ShowcaseTabButton from "../../Components/MyComponents/helpers/ShowcaseTabButton";
import { AuthContext } from "../../Components/Auth/AuthContext";
import Joyride, { STATUS } from 'react-joyride';
// MyCollege Template

const CollegeDataPage = ({setColleges, colleges}) => {
  const [showTutorialCards, setShowTutorialCards] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null); // Large view
  const [selectedColleges, setSelectedColleges] = useState([]); // Medium view
  const [view, setView] = useState("large");
  const [collegeLikedList, setCollegeLikedList] = useState([]);
  const largeCollegeRef = useRef(null);
  const { userID, token } = useContext(UserContext)
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
        await API.get(`/api/users/collegelist/${userID}/`, config)
          .then((response) => {
            setCollegeLikedList(response.data.liked_list);
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
    



 
  const addCollege = useCallback(
    (college, score) => {
      const collegeIndex = collegeLikedList.findIndex(
        (item) => item.college_name === college.college_name
      );

      if (collegeIndex === -1) {
        // College does not exist in the list
        init_api();
        API.post("/api/users/collegelist/add/", {
          college_name: college.college_name,
          user_id: userID,
          score: score,
        }, config).then(() => {
          setCollegeLikedList([...collegeLikedList, { ...college, score }]);
        });
      } else {
        // College exists in the list, update the score
        const updatedCollege = {
          ...collegeLikedList[collegeIndex],
          score,
        };
        init_api();

        API.post("/api/users/collegelist/add/", {
          college_name: college.college_name,
          user_id: userID,
          score: score,
        }, config).then(() => {
          const updatedCollegeLikedList = [...collegeLikedList];
          updatedCollegeLikedList[collegeIndex] = updatedCollege;
          setCollegeLikedList(updatedCollegeLikedList);
        });
      }
    },
    [collegeLikedList, userID]
  );
  

  
  const deleteCollege = (index) => {
  
    setSelectedColleges(
        selectedColleges.filter((_, i) =>  
            i !== index)
        );
  };
  
  
  
  const selectCollege = useCallback(
    (college) => {
      if (view === "large") {
        setSelectedCollege(college);
      } else {
        if (selectedColleges.length < 4) {
          if (!selectedColleges.some((c) => c.id === college.id)) {
            setSelectedColleges([...selectedColleges, college]);
          } else {
            setErrorMessage("College already in array.");
            setTimeout(() => setErrorMessage(null), 3000);
          }
        }
       
      }
    },
    [view, selectedColleges]
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
      content: 'Choose component cards to compare or inspect a single with our showcase feature.',
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

  



  const handleLarge = useCallback(

    (college) => {
      setView("large");
      setSelectedCollege(college);
    },
  
    [],
    console.log(selectedCollege)
  );

  const handleTabClick = (tab) => {
    setView(tab);

  };

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
      <MyColleges className="step-2-tut" onSelectCollege={selectCollege} setColleges= {setCollegeLikedList} colleges={collegeLikedList} />
      <Paper className="step-1-tut" withBorder shadow="xl" p="md" sx={{position: 'relative', width: "40%", top: -30, height:'82vh', margin: '0 1.5% 0 1.5%', backgroundColor: '#57CC99', border: '.5px solid #C7F9CC' ,borderRadius: '5px' , zIndex: 1}}>
        <div className="componentMiddleHeader">
            <div className="my-component-header-text step-4-tut"><b> Showcase Colleges</b> </div>
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
          <LargeCollegeActions 
          largeCollegeRef={largeCollegeRef}
          college={selectedCollege}
          onDelete={() => deleteCollege()}
          onLargeClick={() => handleLarge(selectedCollege)}
          onLike = {addCollege}
          isLiked={selectedCollege && collegeLikedList.some(
            (likedCollege) => likedCollege.college_name === selectedCollege.college_name
          )}
          />
              
            ) : ( 
             <div className="medium-component-container" >
                    {selectedColleges.map((college, index) => (
                        index < 4 &&
                        <MediumCollegeActions 
                            key={index}
                            largeCollegeRef={largeCollegeRef}
                            college={college}
                            onDelete={() => deleteCollege(index)}
                            onLargeClick={() => handleLarge(college)}
                            onLike = {addCollege}
                            isLiked={collegeLikedList.some(
                              (likedCollege) => likedCollege.college_name === college.college_name
                            )}
                            />
                    ))}
                </div>
            )}
           </Paper>
      <CollegeComputer className="step-5-tut" onSelectCollege={selectCollege}
        userID = {userID} />
      </div>

      );
};


export default CollegeDataPage;















