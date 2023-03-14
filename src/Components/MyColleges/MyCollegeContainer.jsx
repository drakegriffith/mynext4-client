import React, { useState, useEffect, useRef} from "react";
import "./MyColleges.css";
import { MediumCollege, LargeCollege } from "./College";
import { API, init_api } from '../../API';

import { init_API_College_AI, API_College_AI } from "../../API_College_AI/index"
import Nav from "../Nav/Nav";
import { useLocation, useParams } from "react-router";
import { MyColleges } from "./components/MyColleges";
import { CollegeComputer } from "./components/CollegeComputer"
import { UserContext } from '../../Pages/App';
import TopNav from "../Nav/components/TopNav";
// MyCollege Template

const CollegeDataPage = ({setColleges, colleges}) => {
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedColleges, setSelectedColleges] = useState([]);
  const [view, setView] = useState("large");
  const [collegeLikedList, setCollegeLikedList] = useState([]);
  const largeCollegeRef = useRef(null);
  const userID = useParams().userID;
  const [collegeIds, setCollegeIds] = useState([]);


  useEffect(() => {
      
    const getLikedList = async () => {
        
        init_api();
        await API.get(`/api/users/collegelist/${userID}/`)
        .then((response) => {
            
            console.log(response.data.liked_list);
            setCollegeLikedList(response.data.liked_list);
        });
    }
    
    getLikedList();
  }, []);

  /*
  useEffect(() => {
    const fetchCollegeData = async () => {
      const fetchedColleges = [];
      for (let i = 0; i < collegeIds.length; i++) {
        init_API_College_AI(collegeIds[i], 'info');
        await API_College_AI.get().then((response) => {
          console.log(response.data.colleges[0])
          const college = {
            ...response.data.colleges[0],
            isFavorited: false, // add isFavorited property to college object
          };
          fetchedColleges.push([college]);
        });
      }
     
      setColleges(fetchedColleges);
     
    };
    fetchCollegeData();
  }, []);
  */

  const addCollege = (college) => {
    const careerExists = collegeLikedList.some(item => item.college_name === college.college_name);

    
    //const csrf = getCookie('csrftoken');
    //console.log(csrf);
    if (!careerExists) {
    //var headers = {'X-CSRFToken': csrf}
      init_api();
      API.post('/api/users/collegelist/add/', {
        college_name: college.college_name,
        user_id: userID,
        score: 4.5
      }).then(() => {
        setCollegeLikedList([...collegeLikedList, college]);
      })
    } else {
      console.log("College is already in the user array")
    }
    
  };

  const removeDuplicates = (list) => {
    const uniqueList = list.filter((college, index) => {
      // Find the index of the first occurrence of the college in the array
      const firstIndex = list.findIndex((c) => c.college_name === college.college_name);
  
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

  
  
  const deleteCollege = (index) => {
    console.log("Hello")
    setSelectedColleges(
        selectedColleges.filter((_, i) =>  
            i !== index)
        );
  };
  
  const selectCollege = (college) => {
    if (view === "large") {
        setSelectedCollege(college);
    } else {
        setSelectedColleges([...selectedColleges, college]);
    }
  };

  
  const handleLiked = (college) => {
    setColleges(...colleges, college)
  }

  const handleLarge = (college) => {
    setView("large");
    setSelectedCollege(college);
  };

  return (
    <div className="my-colleges-container">
         <div style={{ marginTop: 0, position: "absolute", width: "100%" }}>
   <TopNav />
 </div>
      <div class="shape-container"></div>
    <div className="collegedata">
     
      <MyColleges onSelectCollege={selectCollege}  />
      <div className="collegeMiddle" >
        <div className="collegeMiddleHeader">
            <div className="collegeMiddleHeaderText"><b> College Comparator</b> </div>
            <button className="collegeMiddle-button" onClick={() => setView(view === "large" ? "medium" : "large")}>
                {view === "large" ? "Switch to Medium" : "Switch to Large"}
                </button>
                </div>
            {view === "large" ? (
                <LargeCollege onAdd = {() => addCollege(selectedCollege)} ref={largeCollegeRef} college={selectedCollege} /> 
              
            ) : (
                <div className="mediumColleges" >
                    {selectedColleges.map((college, index) => (
                        index < 4 &&
                        <MediumCollege 
                            key={index}
                            largeCollegeRef={largeCollegeRef}
                            college={college}
                            onDelete={() => deleteCollege(index)}
                            onLargeClick={() => handleLarge(college)}
                            onAdd = {() => addCollege(college)}
                            />
                    ))}
                </div>
            )}
            </div>
      <CollegeComputer SelectCollege={selectCollege}
        userID = {userID} />
      </div>
      </div>
      );
};


export default CollegeDataPage;















