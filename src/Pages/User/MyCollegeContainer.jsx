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

// MyCollege Template

const CollegeDataPage = ({setColleges, colleges}) => {
  const [selectedCollege, setSelectedCollege] = useState(null); // Large view
  const [selectedColleges, setSelectedColleges] = useState([]); // Medium view
  const [view, setView] = useState("large");
  const [collegeLikedList, setCollegeLikedList] = useState([]);
  const largeCollegeRef = useRef(null);
  const { userID } = useContext(UserContext)
  const [errorMessage, setErrorMessage] = useState(null);
  const { isAuthenticated } = useContext(AuthContext);
  const getLikedList = useCallback(async () => {
    init_api();
    const response = await API.get(`/api/users/collegelist/${userID}/`);

    setCollegeLikedList(response.data.liked_list);
  }, [userID]);

  useEffect(() => {
    getLikedList();
  }, [getLikedList]);

 
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
        }).then(() => {
          console.log("ADDED");
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
        }).then(() => {
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
  



  const handleLarge = useCallback(
    (college) => {
      setView("large");
      setSelectedCollege(college);
    },
    []
  );

  const handleTabClick = (tab) => {
    setView(tab);

  };

  return (
    isAuthenticated && 
      
     
    <div className="component-overall-container">
     
      <MyColleges onSelectCollege={selectCollege} setColleges= {setCollegeLikedList} colleges={collegeLikedList} />
      <Paper withBorder shadow="xl" p="md" sx={{position: 'relative', width: "40%", top: -30, height:'82vh', margin: '0 1.5% 0 1.5%', backgroundColor: '#57CC99', border: '.5px solid #C7F9CC' ,borderRadius: '5px' , zIndex: 1}}>
        <div className="componentMiddleHeader">
            <div className="my-component-header-text"><b> Showcase Colleges</b> </div>
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
          isLiked={collegeLikedList.some(
            (likedCollege) => likedCollege.college_name === selectedCollege
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
      <CollegeComputer onSelectCollege={selectCollege}
        userID = {userID} />
      </div>

      );
};


export default CollegeDataPage;















