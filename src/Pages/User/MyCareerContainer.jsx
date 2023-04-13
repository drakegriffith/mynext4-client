import React, { useCallback, useContext, useState, useEffect, useRef} from "react";
import "../../Components/MyComponents/MyComponents.css"
import "../../Components/MyComponents/MyCareers/MyCareers.css"
import { AnimatePresence, motion } from 'framer-motion'
import { MediumCareerActions, LargeCareerActions } from "../../Components/MyComponents/MyCareers/Career";
import { API, init_api } from '../../API';
import { Paper } from "@mantine/core";
import { MyCareers } from "../../Components/MyComponents/MyCareers/components/MyCareers";
import { CareerComputer } from "../../Components/MyComponents/MyCareers/components/CareerComputer"
import { UserContext } from "../App";
import ShowcaseTabButton from "../../Components/MyComponents/helpers/ShowcaseTabButton";
import { AuthContext } from "../../Components/Auth/AuthContext";
import Joyride, { STATUS } from 'react-joyride';

const CareerDataPage = ({setCareers, careers}) => {
  const [showTutorialCards, setShowTutorialCards] = useState(false);
    const [selectedCareer, setSelectedCareer] = useState(null);
    const [selectedCareers, setSelectedCareers] = useState([]);
    const [view, setView] = useState("large");
    const [careerLikedList, setCareerLikedList] = useState([]);
    const { userID, token } = useContext(UserContext)
    const { isAuthenticated } = useContext(AuthContext);
    const largeCareerRef = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
    };
    
    const removeDuplicates = (list) => {
      const uniqueList = list.filter((college, index) => {
        // Find the index of the first occurrence of the college in the array
        const firstIndex = list.findIndex((c) => c.career_name === college.career_name);
    
        // If the index of the current college is the same as the first index, keep it
        if (index === firstIndex) {
          return true;
        } else {
          // Call handleDeleteCareerFeedback for every duplicate career that was not added to the uniqueList
          return false;
        }
      });
    
      return uniqueList;
    };

    useEffect(() => {
      const getLikedList = async () => {
        init_api();
        await API.get(`/api/users/careerlist/${userID}/`, config)
          .then((response) => {
            setCareerLikedList(response.data.liked_list);
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
          const response = await API.get(`/check-tutorial-complete-cards/${userID}/`,config);
          setShowTutorialCards(!response.data.tutorialStatusCards)
        } catch (error) {
          console.error('Error checking survey completion:', error);
        }
      };
    
      if (userID) {
        checkTutorialCompletion();
      }
    }, [userID]);
    
    
  const addCareer = useCallback(
    (career, score) => {
      const careerIndex = careerLikedList.findIndex(
        (item) => item.career_name === career.career_name
      );

      if (careerIndex === -1) {
        // College does not exist in the list
        init_api();
        API.post("/api/users/careerlist/add/", {
          career_name: career.career_name,
          user_id: userID,
          score: score,
        }, config).then(() => {
          console.log("ADDED");
          setCareerLikedList([...careerLikedList, { ...career, score }]);
        });
      } else {
        // College exists in the list, update the score
        const updatedCareer = {
          ...careerLikedList[careerIndex],
          score,
        };
        init_api();

        API.post("/api/users/careerlist/add/", {
          career_name: career.career_name,
          user_id: userID,
          score: score,
        }, config).then(() => {
          const updatedCareerLikedList = [...careerLikedList];
          updatedCareerLikedList[careerIndex] = updatedCareer;
          setCareerLikedList(updatedCareerLikedList);
        });
      }
    },
    [careerLikedList, userID]
  );
  

    const deleteCareer = (index) => {
     
      setSelectedCareers(
          selectedCareers.filter((_, i) =>  
              i !== index)
          );
    };
  
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

    const selectCareer = useCallback(
        (career) => {
          if (view === "large") {
            setSelectedCareer(career);
          } else {
            if (selectedCareers.length < 4) {
              if (!selectedCareers.some((c) => c.id === career.id)) {
                setSelectedCareers([...selectedCareers, career]);
              } else {
                setErrorMessage("Career already in array.");
                setTimeout(() => setErrorMessage(null), 3000);
              }
            }
           
          }
        },
        [view, selectedCareers]
      );


      const handleTabClick = (tab) => {
        setView(tab);
  
      };


  const handleLarge = useCallback(
    (career) => {
      setView("large");
      setSelectedCareer(career);
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
        
        <MyCareers className="step-2-tut" onSelectCareer={selectCareer} removeDuplicates={removeDuplicates} setCareers={setCareerLikedList}  careers = {careerLikedList}/>
        <Paper withBorder className="step-1-tut" shadow="xl" p="md" sx={{position: 'relative', width: "40%", top: -30, height:'82vh', margin: '0 .5% 0 1.5%', backgroundColor: '#57CC99', border: '.5px solid #C7F9CC' ,borderRadius: '5px' , zIndex: 1}}>
        <div className="componentMiddleHeader" style={{marginBottom: 15}}>
            <div className="my-component-header-text step-4-tut" ><b> Showcase Careers</b> </div>
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
          <LargeCareerActions 
          largeCareerRef={largeCareerRef}
          career={selectedCareer}
          onDelete={() => deleteCareer()}
          onLargeClick={() => handleLarge(selectedCareer)}
          onLike = {addCareer}
          isLiked={selectedCareer && careerLikedList.some(
    (likedCareer) => likedCareer.career_name === selectedCareer.career_name
          )}
          />
              
          ) : (
              
            <div className="medium-component-container" >
                {selectedCareers.map((career, index) => (
                    index < 4 &&
                    <MediumCareerActions 
                        key={index}
                        largeCareerRef={largeCareerRef}
                        career={career}
                        onDelete={() => deleteCareer(index)}
                        onLargeClick={() => handleLarge(career)}
                        onLike = {addCareer}
                        isLiked={careerLikedList.some(
                          (likedCareer) => likedCareer.career_name === career.career_name
                        )}
                        />
                ))}
            </div>
        )}
        
        </Paper>
        <CareerComputer className='step-5-tut'  onSelectCareer={selectCareer}
        userID = {userID}/>
        
        </div>
        );
  };
  
  
  export default CareerDataPage;
  
  
  