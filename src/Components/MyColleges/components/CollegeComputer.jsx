import React from "react";
import { API, init_api } from "../../../API"
import { Paper, Slider, MantineProvider} from '@mantine/core';
import { UserContext } from '../../../Pages/App';
import { useState, useEffect, useContext } from "react"
import { init_API_College_AI, API_College_AI } from "../../../API_College_AI"
import { SmallCollege } from "../College";

export const CollegeComputer = ({  onSelectCollege }) => {
    const userID = useContext(UserContext)
    const [view, setView] = useState('Filter');
    const [careerFilteredList, setCareerFilteredList] = useState([]);
    const [filterVal, setFilterVal] = useState('Search');
    const [prevSearchLength, setPrevSearchLength] = useState(0);
  

    useEffect(() => {
  
        const getList = async() => {
          if (filterVal === "10"
          || filterVal === "25"
          || filterVal === "40"
          || filterVal === "50"
        ) {
    
            init_api();
            await API.get(`api/explore/college/acceptance/${filterVal}/`)
            .then((response) => {
              console.log(response.data);
              
              setCareerFilteredList(response.data.colleges);
            });
          } else if (filterVal === "1000"
                    || filterVal === "1200"
                    || filterVal === "1300"
                    || filterVal === "1450") {
    
            init_api();
            await API.get(`api/explore/college/sat_average/${filterVal}/`)
            .then((response) => {
              setCareerFilteredList(response.data.careers);
            });
          } else if (filterVal === "hard_10"
                    || filterVal === "hard_25"
                    || filterVal === "hard_50"
                   ) {
    
                      init_api();
                      await API.get(`api/explore/college/rank/hardest/${filterVal}/`)
                      .then((response) => {
                        setCareerFilteredList(response.data.careers);
                      });
                    } else if (filterVal === "value_10"
                    || filterVal === "value_25"
                    || filterVal === "value_50"
                   ) {
    
                      init_api();
                      await API.get(`api/explore/college/rank/value/${filterVal}/`)
                      .then((response) => {
                        setCareerFilteredList(response.data.careers);
                      }); 
                     } else if (filterVal === "life_10"
                    || filterVal === "life_25"
                    || filterVal === "life_50"
                   ) {
    
                      init_api();
                      await API.get(`api/explore/college/rank/student_life/${filterVal}/`)
                      .then((response) => {
                        setCareerFilteredList(response.data.careers);
                      });
                    } else if (filterVal === "greek_10"
                    || filterVal === "greek_25"
                    || filterVal === "greek_50"
                   ) {
    
                      init_api();
                      await API.get(`api/explore/college/rank/greek_life/${filterVal}/`)
                      .then((response) => {
                        setCareerFilteredList(response.data.careers);
                      });
                    } else if (filterVal === "best_10"
                    || filterVal === "best_25"
                    || filterVal === "best_50"
                   ) {
    
                      init_api();
                      await API.get(`api/explore/college/rank/best/${filterVal}/`)
                      .then((response) => {
                        setCareerFilteredList(response.data.careers);
                      });
                    } else if (filterVal === "athletic_10"
                    || filterVal === "athletic_25"
                    || filterVal === "athletic_50"
                   ) {
    
                      init_api();
                      await API.get(`api/explore/college/rank/athletics/${filterVal}/`)
                      .then((response) => {
                        setCareerFilteredList(response.data.careers);
                      });
                    } else if (filterVal === "campus_10"
                    || filterVal === "campus_25"
                    || filterVal === "campus_50"
                   ) {
    
                      init_api();
                      await API.get(`api/explore/college/rank/campus/${filterVal}/`)
                      .then((response) => {
                        setCareerFilteredList(response.data.careers);
                      });
                
                    } else if (filterVal === "prof_10"
                    || filterVal === "prof_25"
                    || filterVal === "prof_50"
                   ) {
    
                      init_api();
                      await API.get(`api/explore/college/rank/professors/${filterVal}/`)
                      .then((response) => {
                        setCareerFilteredList(response.data.careers);
                      });
                    } else if (filterVal === "food_10"
                    || filterVal === "food_25"
                    || filterVal === "food_50"
                   ) {
    
                      init_api();
                      await API.get(`api/explore/college/rank/food/${filterVal}/`)
                      .then((response) => {
                        setCareerFilteredList(response.data.careers);
                      });
                    }
                    else if (filterVal === "academics_10"
                    || filterVal === "academics_25"
                    || filterVal === "academics_50"
                   ) {
    
                      init_api();
                      await API.get(`api/explore/college/rank/academics/${filterVal}/`)
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

      
      const getRecommendations = async() => {
      /*
        console.log("Recs");
        
        if (careerFilteredList.length == 0) {
          init_api();
          await API.get(`/api/college/recommendations/${userID}/`)
          .then((response) => {
            console.log(response.data);
          });
        }
        */
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

    
    
      const search = async(e) => {
        var searchVal = e.target.value;
        searchVal = searchVal.charAt(0).toUpperCase() + searchVal.slice(1);
    
        if (searchVal.length < prevSearchLength) {
          setCareerFilteredList([]);
          
        } else if (searchVal.length > 1) {
          
          if (searchVal.length % 2 == 0) {
            init_api();
            await API.get(`/api/search/college/${searchVal}/`)
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
              <optgroup label="Acceptance Rates (<)">
                  <option value = "10">10</option>
                  <option value = "25">25</option>
                  <option value = "40">40</option>
                  <option value = "50">50</option>
            
              </optgroup>
  
              <optgroup label="SAT Averages (>)">
                
                <option value = "1000"> 1000</option>
                <option value = "1200"> 1200</option>
                <option value = "1300"> 1300</option>
                <option value = "1450"> 1450</option>
              </optgroup>
  
              <optgroup label = "Hardest Ranks ">
                <option value = "hard_10">Top 10</option>
                <option value = "hard_25">Top 25</option>
                <option value = "hard_50">Top 50</option>
    
              </optgroup>
              
              <optgroup label = "Value Ranks ">
                <option value = "value_10">Top 10</option>
                <option value = "value_25">Top 25</option>
                <option value = "value_50">Top 50</option>
    
              </optgroup>
              
              <optgroup label = "Student life Ranks ">
                <option value = "life_10">Top 10</option>
                <option value = "life_25">Top 25</option>
                <option value = "life_50">Top 50</option>
    
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
              <SmallCollege  college={name} />
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
  
            {careerFilteredList &&  careerFilteredList.map((name, id) => (
            <li
              key={id}
              className="mycolleges-list-item"
              onClick={() => onSelectCollege(name)}
            >
              <SmallCollege college={name} />
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
              <SmallCollege college={name} />
            </li>
            
          ))}
  
          </ul>
  
          }
        
  
        
        
      
        
      </div>
    );
  };