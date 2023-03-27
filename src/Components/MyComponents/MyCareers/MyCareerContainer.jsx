import React, { useCallback, useContext, useState, useEffect, useRef} from "react";
import "./MyCareers.css";
import "../MyComponents.css"
import { AnimatePresence, motion } from 'framer-motion'
import { MediumCareerActions, LargeCareerActions } from "./Career";
import { API, init_api } from '../../../API';
import { Paper } from "@mantine/core";


import { useLocation, useParams } from "react-router";
import { MyCareers } from "./components/MyCareers";
import { CareerComputer } from "./components/CareerComputer";
import { UserContext } from "../../../Pages/App";
import TopNav from "../../Nav/components/TopNav";
import ShowcaseTabButton from "../helpers/ShowcaseTabButton";
import AuthContext from "../../../Pages/LogIn/AuthContext";

const CareerDataPage = ({setCareers, careers}) => {
    const [selectedCareer, setSelectedCareer] = useState(null);
    const [selectedCareers, setSelectedCareers] = useState([]);
    const [view, setView] = useState("large");
    const [careerLikedList, setCareerLikedList] = useState([]);
    const { userID } = useContext(UserContext)
    const { auth } = useContext(AuthContext);
    const largeCareerRef = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);
    
    const removeDuplicates = (list) => {
      const uniqueList = list.filter((college, index) => {
        // Find the index of the first occurrence of the college in the array
        const firstIndex = list.findIndex((c) => c.career_name === college.career_name);
    
        // If the index of the current college is the same as the first index, keep it
        if (index === firstIndex) {
          return true;
        } else {
          // Call handleDeleteCareerFeedback for every duplicate career that was not added to the uniqueList
          const careerToRemove = list[firstIndex];
        
          return false;
        }
      });
    
      return uniqueList;
    };

  


    useEffect(() => {
      
      const getLikedList = async () => {
          
          init_api();
          await API.get(`/api/users/careerlist/${userID}/`)
          .then((response) => {
              
              console.log(response.data.liked_list);
              setCareerLikedList(response.data.liked_list);
          });
      }
      
      getLikedList();
    }, []);
    
    
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
        }).then(() => {
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
        }).then(() => {
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
  
 

    return (
      auth &&
      <div className="component-overall-container">
    
          
        <MyCareers onSelectCareer={selectCareer} removeDuplicates={removeDuplicates} setCareers={setCareerLikedList}  careers = {careerLikedList}/>
        <Paper withBorder shadow="xl" p="md" sx={{position: 'relative', width: "40%", top: -10, height:'78vh', margin: '0 3% 0 3%', backgroundColor: '#80ED99', border: '.5px solid #C7F9CC' ,borderRadius: '5px' , zIndex: 1}}>
        <div className="componentMiddleHeader" style={{marginBottom: 15}}>
            <div className="my-component-header-text" ><b> Showcase Careers</b> </div>
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
          isLiked={careerLikedList.some(
    (likedCareer) => likedCareer.career_name === selectedCareer
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
        <CareerComputer onSelectCareer={selectCareer}
        userID = {userID}/>
        
        </div>
        );
  };
  
  
  export default CareerDataPage;
  
  
  