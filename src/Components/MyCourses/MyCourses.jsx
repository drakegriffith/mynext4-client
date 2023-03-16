import React, { useEffect, useState, useContext } from "react";
import "./MyCourses.css";
import { SmallCourse, MediumCourse, LargeCourse } from "./course";
import { API, init_api } from '../../API';
import Nav from "../Nav/Nav";
import { FocusCentered, Apps, Book, Book2  } from "tabler-icons-react";
import { useLocation, useParams } from "react-router";
import AuthContext from '../../Pages/LogIn/AuthContext';
import { UserContext } from '../../Pages/App'
import { Paper } from "@mantine/core";
import TopNav from "../Nav/components/TopNav";

const MyCourses = ({ user, onSelectCollege, setCareers, colleges, removeDuplicates}) => {
    //const [colleges, setColleges] = useState([]);
    const { userID, username } = user;
    const handleRemoveDuplicate = () => {
      const uniqueList = removeDuplicates(colleges);
      setCareers(uniqueList);
    }
    
    function removeCareer(career) {
      const updatedList = colleges.filter(item => item.course_id !== career)
      console.log(updatedList)
      setCareers(updatedList);
      handleDeleteCareerFeedback(career);
    }

    const deleteCollege = (index) => {
      const career = colleges[index];

      const careerId = career.career_id;
      removeCareer(career);
      setCareers(
        colleges.filter((_, i) => i !== index)
      );
    };

    const handleDeleteCareerFeedback = async (career) => {
      
      console.log(career)
      try {
        init_api();
        API.post('/api/users/courselist/delete/', {
          course_name: career.course_name,
          user_id: userID,

        })

        // do something with the response data
      } catch (error) {
        console.error(error);
        // handle error
      }
    }
    console.log(colleges)
    return (
      <Paper shadow="xl" className="mycolleges" style={{backgroundColor: 'white'}}>
      
        <div className="mycolleges-header">
          <div className="mycolleges-header-text">My<b>Courses</b></div>
          
            <Book2  size={24} />

        </div>
        <ul className="mycolleges-list">
          {colleges.map((college, index) => (
            <li
              key={index}
              className="mycolleges-list-item"
              onClick={() => onSelectCollege(college)}
            >
              
              <SmallCourse onDelete={() => deleteCollege(index)} course={college} />
            </li>
          ))}
        </ul>
      </Paper>
    );
  };
  
  const CourseComputer = ({onSelectCollege }) => {
  
    const userID = useContext(UserContext)
    const [view, setView] = useState('Filter');
    const [careerFilteredList, setCareerFilteredList] = useState([]);
    const [filterVal, setFilterVal] = useState('Search');
    const [prevSearchLength, setPrevSearchLength] = useState(0);
  
    useEffect(() => {
  
      const getList = async() => {
        if (filterVal === "1"
          || filterVal === "2"
          || filterVal === "3"
          || filterVal === "4"
          || filterVal === "5"
          || filterVal === "6"
          || filterVal === "7"
          || filterVal === "8"
        || filterVal === "9"
        || filterVal === "10") {
  
          init_api();
          await API.get(`api/explore/course/difficulty/${filterVal}/`)
          .then((response) => {
            console.log(response.data);
            
            setCareerFilteredList(response.data.courses);
          });
        } else if (filterVal === "True"
                  || filterVal === "False") {
  
          init_api();
          await API.get(`api/explore/course/is_ap/${filterVal}/`)
          .then((response) => {
            console.log(response.data);
            setCareerFilteredList(response.data.courses);
          });
        } else if (filterVal === "DTrue"
                  || filterVal === "DFalse"
            ) {
  
                    init_api();
                    await API.get(`api/explore/course/duel_enrollment/${filterVal}/`)
                    .then((response) => {
                      setCareerFilteredList(response.data.courses);
                    });
                  } else {
                    setCareerFilteredList([]);
                  }

      } 
      
      getList();
    }, [filterVal]);
  
    
    const filter = (e) => {
      setFilterVal(e.target.value);
      

      
    }
  
  
     
  
  
    
  
  
    const downClick = () =>{
      console.log("Click");
    }
  
    const changeView = () => {
      if (view == "Filter") {
        setView("Reccomendatinons");
        setCareerFilteredList([]);
      } else {
        setView("Filter");
        setFilterVal([]);
        setFilterVal("Search");
      }
    }
  
    const getRecommendations = async() => {
      
      console.log("Recs");
      
      if (careerFilteredList.length == 0) {
        init_api();
        await API.get(`/api/course/recommendations/${userID}/`)
        .then((response) => {
          console.log(response.data);
        });
      }
      
    }
  
    const search = async(e) => {
      var searchVal = e.target.value;
      
  
      if (searchVal.length < prevSearchLength) {
        setCareerFilteredList([]);
        
      } else if (searchVal.length > 1) {
        
        if (searchVal.length % 2 == 0) {
          init_api();
          await API.get(`/api/search/course/${searchVal}/`)
          .then((response) => {
            console.log(response)
            setCareerFilteredList(response.data.courses);
            console.log(response.data.courses)
            
          });
        }
      }
      setPrevSearchLength(searchVal.length);
    }
       
    return (
      <Paper className="collegecomputer" shadow="lg" style={{backgroundColor: 'white', padding: '5px'}}>
        
        <div className="collegecomputer-header" style={{textAlign: 'center'}}>
          
          <p style={{fontSize: '18px'}}> Course <b> Computer </b> </p>
          <div className="collegecomputer-filter">
            
           { view == "Filter" ? (<select id="collegecomputer-filter-select" onChange={filter}>
              <option value = "Search">Filter</option>
              <optgroup label="Difficulty">
                  <option value = "1">1</option>
                  <option value = "2">2</option>
                  <option value = "3">3</option>
                  <option value = "4">4</option>
                  <option value = "5">5</option>
                  <option value = "6">6</option>
                  <option value = "7">7</option>
                  <option value = "8">8</option>
                  <option value = "9">9</option>
                  <option value = "10">10</option>
              </optgroup>
  
              <optgroup label="AP">
                
                <option value = "True"> True</option>
                <option value = "False"> False</option>
             
              </optgroup>
  
              <optgroup label = "Duel Enrollment">
              <option value = "Duel Enrollment True"> True</option>
                <option value = "Duel Enrollment False"> False</option>
              </optgroup>
            </select>
            ) : (
              <div>
                <button
                className="collegecomputer-button"
                onClick={getRecommendations}>
                Get Recommendations
                </button>
              </div>
            ) }
            <button
            className="collegecomputer-button"
            onClick={changeView}>
            {view == "Filter" ? "Reccomendation" : "Filter"}
          </button>
          </div>
  
          
        </div>

        
       {view == "Filter" && filterVal != "Search" &&
        
       <ul className="mycolleges-list">
        
          {careerFilteredList && careerFilteredList.map((name, id) => (
            <li
              key={id}
              className="mycolleges-list-item"
              onClick={() => onSelectCollege(name)}
            >
              <SmallCourse course={name} />
            </li>
            
          ))}
       
        </ul> }
        {view != "Filter" &&
          <ul 
          className="mycolleges-list">
            <li 
            key = "Header">
              MyRecommendations
            </li>
  
            {careerFilteredList && careerFilteredList.map((name, id) => (
            <li
              key={id}
              className="mycolleges-list-item"
              onClick={() => onSelectCollege(name)}
            >
              <SmallCourse course={name} />
            </li>
            
          ))}
          </ul> }
  
          {view == "Filter" && filterVal == "Search" &&
          <ul 
          className="mycolleges-list">
            <li 
            key = "Header">
              Career Search
            </li>
            <li
            key = "SearchBar">
              <input onChange={search}/>
            </li>
  
            {careerFilteredList && careerFilteredList.map((name, id) => (
            <li
              key={id}
              className="mycolleges-list-item"
              onClick={() => onSelectCollege(name)}
            >
              <SmallCourse course={name} />
            </li>
            
          ))}
  
          </ul>
  
          }
        
  
        
        
      
        
      </Paper>
    );
  };
  
  

  const CourseDataPage = (props) => {
    const [selectedCollege, setSelectedCollege] = useState(null);
    const [selectedColleges, setSelectedColleges] = useState([]);
    const [view, setView] = useState("large");
    const [careerLikedList, setCareerLikedList] = useState([]);
    const { userID, username } = props.user;
    
    
    const removeDuplicates = (list) => {
      const uniqueList = list.filter((college, index) => {
        // Find the index of the first occurrence of the college in the array
        const firstIndex = list.findIndex((c) => c.course_name === college.course_name);
    
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
          await API.get(`/api/users/courselist/${userID}/`)
          .then((response) => {
              
              console.log(response.data.liked_list);
              setCareerLikedList(response.data.liked_list);
          });
      }
      
      getLikedList();
    }, []);
    
    const addCollege = (college) => {
      const careerExists = careerLikedList.some(item => item.course_name === college.course_name);

      
      //const csrf = getCookie('csrftoken');
      //console.log(csrf);
      if (!careerExists) {
      //var headers = {'X-CSRFToken': csrf}
        init_api();
        console.log(college.course_name)
        console.log(userID)
        API.post('/api/users/courselist/add/', {
          course_name:college.course_name,
          user_id: userID,
          score: 4.5
        }).then(() => {
          setCareerLikedList([...careerLikedList, college]);
        })
      } else {
        console.log("College is already in the user array")
      }
      
    };
  
    const deleteCollege = (index) => {
     
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
  
    const test = async() => {
      /*
      init_api();
          API.get(`/api/users/careerlist/${userID}/`)
          .then((response) => {
              setData(response.data);
              console.log(response.data)
          });
          */
         //console.log(data);
      
    }
  
    const handleClick = () => {
      if (view === "large") {
        setView("small");
      } else {
        setView("large");
      }
    };
  

    return (
      <div className="collegedata">
          <TopNav user={props.user}/>
  
          
        <MyCourses removeDuplicates={removeDuplicates} onSelectCollege={selectCollege} setCareers = {setCareerLikedList} colleges = {careerLikedList}/>
        <Paper shadow="xl" className="courseMiddle">
          <div className="collegeMiddleHeader">
              <div className="collegeMiddleHeaderText"> <b> Selected Courses</b> </div>
              <div style={{marginTop: 10}}>
              <button style={{backgroundColor: 'white', border: 'none'}}onClick={handleClick}>
                  <FocusCentered size={32} />
                  </button>
                  <button style={{backgroundColor: 'white', border: 'none'}} onClick={handleClick}>
                  <Apps size={32} />
                  </button>
                  </div>
                  </div>
              {view === "large" ? (
                  <LargeCourse  
                  onAdd = {() => addCollege(selectedCollege)} course={selectedCollege} /> 
                
              ) : (
                  <div className="mediumCourses">
                      {selectedColleges.map((college, index) => (
                          index < 4 &&
                          <MediumCourse 
                              key={index}
                              course={college}
                              onDelete={() => deleteCollege(index)}
                              onAdd = {() => addCollege(college)}
                              />
                      ))}
                  </div>
              )}
              </Paper>
        
        
        <CourseComputer onSelectCollege={selectCollege}
        userID = {userID}/>
        
        
        
  
        </div>
        );
  };
  
  
  export default CourseDataPage;
  
  
  