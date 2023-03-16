import React, { useEffect, useState, useContext } from "react";
import "./MyCareers.css";
import { SmallCareer, MediumCareer, LargeCareer } from "./career";
import { API, init_api } from '../../API';
import Nav from "../Nav/Nav";
import { useLocation, useParams } from "react-router";
import AuthContext from '../../Pages/LogIn/AuthContext';
import { UserContext } from '../../Pages/App'

const MyCareers = ({ user, onSelectCollege, setCareers, colleges, removeDuplicates}) => {
    //const [colleges, setColleges] = useState([]);
    const { userID, username } = user;
    const handleRemoveDuplicate = () => {
      const uniqueList = removeDuplicates(colleges);
      setCareers(uniqueList);
    }
    
    function removeCareer(career) {
      const updatedList = colleges.filter(item => item.career_id !== career)
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
        API.post('/api/users/careerlist/delete/', {
          career_name: career.career_name,
          user_id: userID,

        })

        // do something with the response data
      } catch (error) {
        console.error(error);
        // handle error
      }
    }
  
    return (
      <div className="mycolleges">
        <button onClick={handleRemoveDuplicate} > Handler </button>
        <div className="mycolleges-header">
          <div className="mycolleges-header-text">My Colleges</div>
          <div className="mycolleges-header-filter">
            <i className="fa fa-filter" />
          </div>
        </div>
        <ul className="mycolleges-list">
          {colleges.map((college, index) => (
            <li
              key={index}
              className="mycolleges-list-item"
              onClick={() => onSelectCollege(college)}
            >
              <SmallCareer onDelete={() => deleteCollege(index)} career={college} />
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  const CareerComputer = ({onSelectCollege }) => {
  
    const userID = useContext(UserContext)
    const [view, setView] = useState('Filter');
    const [careerFilteredList, setCareerFilteredList] = useState([]);
    const [filterVal, setFilterVal] = useState('Search');
    const [prevSearchLength, setPrevSearchLength] = useState(0);
  
    useEffect(() => {
  
      const getList = async() => {
        if (filterVal === "Business" 
        || filterVal === "Agriculture"
        || filterVal === "Engineering"
        || filterVal === "Health"
        || filterVal === "Manufacturing"
        || filterVal === "Human Resources") {
  
          init_api();
          await API.get(`api/explore/career/industry/${filterVal}/`)
          .then((response) => {
            console.log(response.data);
            
            setCareerFilteredList(response.data.careers);
          });
        } else if (filterVal === "50000"
                  || filterVal === "75000"
                  || filterVal === "100000"
                  || filterVal === "125000") {
  
          init_api();
          await API.get(`api/explore/career/salary/${filterVal}/`)
          .then((response) => {
            setCareerFilteredList(response.data.careers);
          });
        } else if (filterVal === "HighSchool"
                  || filterVal === "Bachelors"
                  || filterVal === "Masters"
                  || filterVal === "Doctorate") {
  
                    init_api();
                    await API.get(`api/explore/career/education/${filterVal}/`)
                    .then((response) => {
                      setCareerFilteredList(response.data.careers);
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
        await API.get(`/api/career/recommendations/${userID}/`)
        .then((response) => {
          console.log(response.data);
        });
      }
      
    }

   

  
    const search = async(e) => {
      var searchVal = e.target.value;
      searchVal = searchVal.charAt(0).toUpperCase() + searchVal.slice(1);
  
      if (searchVal.length < prevSearchLength) {
        setCareerFilteredList([]);
        
      } else if (searchVal.length > 1) {
        
        if (searchVal.length % 2 == 0) {
          init_api();
          await API.get(`/api/search/career/${searchVal}/`)
          .then((response) => {
            
            setCareerFilteredList(response.data.careers);
            console.log(response.data.careers)
            
          });
        }
      }
      setPrevSearchLength(searchVal.length);
    }
  
    
    return (
      <div className="collegecomputer">
        
        <div className="collegecomputer-header">
          
          College Computer
          <div className="collegecomputer-filter">
            
           { view == "Filter" ? (<select id="collegecomputer-filter-select" onChange={filter}>
              <option value = "Search">Filter</option>
              <optgroup label="Industries">
                  <option value = "Business">Business</option>
                  <option value = "Agriculture">Agriculture</option>
                  <option value = "Engineering">Engineering</option>
                  <option value = "Health">Health</option>
                  <option value = "Manufacturing">Manufacturing</option>
                  <option value = "Human Resources">Human Resources</option>
              </optgroup>
  
              <optgroup label="Salary">
                
                <option value = "50000"> 50,000</option>
                <option value = "75000"> 75,000</option>
                <option value = "100000"> 100,000</option>
                <option value = "125000"> 125,000</option>
              </optgroup>
  
              <optgroup label = "Education">
                <option value = "HighSchool">High School Diploma</option>
                <option value = "Bachelors">Bachelor's Degree</option>
                <option value = "Masters">Masters Degree</option>
                <option value = "Doctorate">Doctorate Degree</option>
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
        
          {careerFilteredList.map((name, id) => (
            <li
              key={id}
              className="mycolleges-list-item"
              onClick={() => onSelectCollege(name)}
            >
              <SmallCareer  career={name} />
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
  
            {careerFilteredList.map((name, id) => (
            <li
              key={id}
              className="mycolleges-list-item"
              onClick={() => onSelectCollege(name)}
            >
              <SmallCareer career={name} />
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
  
            {careerFilteredList.map((name, id) => (
            <li
              key={id}
              className="mycolleges-list-item"
              onClick={() => onSelectCollege(name)}
            >
              <SmallCareer career={name} />
            </li>
            
          ))}
  
          </ul>
  
          }
        
  
        
        
      
        
      </div>
    );
  };
  
  

  const CareerDataPage = (props) => {
    const [selectedCollege, setSelectedCollege] = useState(null);
    const [selectedColleges, setSelectedColleges] = useState([]);
    const [view, setView] = useState("large");
    const [careerLikedList, setCareerLikedList] = useState([]);
    const { userID, username } = props.user;
    
    
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
    
    const addCollege = (college) => {
      const careerExists = careerLikedList.some(item => item.career_name === college.career_name);

      
      //const csrf = getCookie('csrftoken');
      //console.log(csrf);
      if (!careerExists) {
      //var headers = {'X-CSRFToken': csrf}
        init_api();
        API.post('/api/users/careerlist/add/', {
          career_name: college.career_name,
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
  
    // const test = async() => {
  
    //   init_api();
    //       API.get(`/api/users/careerlist/${userID}/`)
    //       .then((response) => {
    //           setData(response.data);
    //           console.log(response.data)
    //       });
          
    //      console.log(data);
      
    // }
  
  
    return (
      <div className="collegedata">
          <Nav />
  
          
        <MyCareers removeDuplicates={removeDuplicates} user={props.user} onSelectCollege={selectCollege} setCareers = {setCareerLikedList} colleges = {careerLikedList}/>
        <div className="collegeMiddle">
          <div className="collegeMiddleHeader">
              <div className="collegeMiddleHeaderText"> Selected Colleges </div>
              <button onClick={() => setView(view === "large" ? "medium" : "large")}>
                  {view === "large" ? "Switch to Medium" : "Switch to Large"}
                  </button>
                  </div>
              {view === "large" ? (
                  <LargeCareer   
                  onAdd = {() => addCollege(selectedCollege)} career={selectedCollege} /> 
                
              ) : (
                  <div className="mediumColleges">
                      {selectedColleges.map((college, index) => (
                          index < 4 &&
                          <MediumCareer 
                              key={index}
                              career={college}
                              onDelete={() => deleteCollege(index)}
                              onAdd = {() => addCollege(college)}
                              />
                      ))}
                  </div>
              )}
              </div>
        
        
        <CareerComputer onSelectCollege={selectCollege}
        userID = {userID}/>
        
        
        
  
        </div>
        );
  };
  
  
  export default CareerDataPage;
  
  
  