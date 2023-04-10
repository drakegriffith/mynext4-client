
import React from "react";
import { API, init_api } from "../../../../API";
import { Paper } from '@mantine/core';
import { useState, useEffect } from "react"
import { SmallCourse } from "../Course";
import { Carousel } from "react-responsive-carousel";
import { Search } from "tabler-icons-react";


export const CourseComputer = ({onSelectCourse }) => {
    const [view, setView] = useState('Filter');
    const [courseFilteredList, setCourseFilteredList] = useState([]);
    const [filterVal, setFilterVal] = useState('Search');
    const [prevSearchLength, setPrevSearchLength] = useState(0);
    
    const getNumberOfColleges = () => {
      if (window.innerWidth >= 1000) {
        return 6;
      }
      if (window.innerWidth <= 999) {
        return 4; // Number of colleges to display for large screens
      } else if (window.innerWidth >= 768) {
        return 1; // Number of colleges to display for medium screens
      } else {
        return 4; // Number of colleges to display for small screens
      }
    };
  
    // Now you can use getNumberOfColleges inside useState
    const [numberOfColleges, setNumberOfColleges] = useState(getNumberOfColleges());
  
    useEffect(() => {
      const handleResize = () => {
        setNumberOfColleges(getNumberOfColleges());
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    // Your existing code
    const chunkArray = (array, size) => {
      const chunks = [];
      for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
      }
      return chunks;
    };
    const courseChunks = chunkArray(courseFilteredList, numberOfColleges);
  

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
            
            setCourseFilteredList(response.data.courses);
          });
        } else if (filterVal === "True"
                  || filterVal === "False") {
  
          init_api();
          await API.get(`api/explore/course/is_ap/${filterVal}/`)
          .then((response) => {
            console.log(response.data);
            setCourseFilteredList(response.data.courses);
          });
        } else if (filterVal === "DTrue"
                  || filterVal === "DFalse"
            ) {
  
                    init_api();
                    await API.get(`api/explore/course/duel_enrollment/${filterVal}/`)
                    .then((response) => {
                      setCourseFilteredList(response.data.courses);
                    });
                  } else {
                    setCourseFilteredList([]);
                  }

      } 
      
      getList();
    }, [filterVal]);
  
    
    const filter = (e) => {
      setFilterVal(e.target.value);
    }
  


    const search = async(e) => {
      var searchVal = e.target.value;
      
  
      if (searchVal.length < prevSearchLength) {
        setCourseFilteredList([]);
        
      } else if (searchVal.length > 1) {
        
        if (searchVal.length % 2 === 0) {
          init_api();
          await API.get(`/api/search/course/${searchVal}/`)
          .then((response) => {
            console.log(response)
            setCourseFilteredList(response.data.courses);
            console.log(response.data.courses)
            
          });
        }
      }
      setPrevSearchLength(searchVal.length);
    }
       
    return (
        <Paper shadow="lg" p="md" sx={{border: '.5px solid #C7F9CC' ,borderRadius: '5px' ,width: "25%",  backgroundColor: '#57CC99', zIndex:1}}>
        
        <div className="component-computer-header" style={{marginBottom: 8}}>
          
        <div className="componentMiddleHeaderText"><b> See Courses </b> </div>
          <div className="componentcomputer-filter">
            
           { view === "Filter" ? (<select id="collegecomputer-filter-select" onChange={filter}>
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
             
              </div>
            ) }
       
          </div>
  
          
        </div>

        
       {view === "Filter" && filterVal !== "Search" &&
        
          
        <div>
        <div style={{height: '10px', marginTop:13.5, textAlign: 'center', color: 'white', fontWeight: 500}}><b>{courseFilteredList.length} </b>items rendered</div>
        <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        {courseChunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="carousel-slide">
            <ul className="my-component-list">
              {chunk.map((name, id) => (
                <li key={chunkIndex * 8 + id} className="my-component-list-item">
                  <SmallCourse course={name} onSelect={() => onSelectCourse(name)} showHeart={false}/>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Carousel>
      </div>
      }
       {view === "Filter" && filterVal === "Search" &&
          <div className="search-career-container" >
          <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          
             <div className="icon-wrapper"><Search size={32} /></div>
      <div className="career-tooltip">Search MyNext4</div>
  
          
              <input onChange={search}/>
         
            </div>
  
            <div style={{textAlign: 'center',padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '10px', fontSize: '12px', marginTop: '5px'}}><b>{courseFilteredList.length}</b> items rendered</div>
          <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        {courseChunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="carousel-slide">
            <ul className="my-component-list">
              {chunk.map((name, id) => (
                <li key={chunkIndex * 8 + id} className="my-component-list-item" >
                  <SmallCourse course={name} onSelect={() => onSelectCourse(name)} showHeart={false}/>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Carousel>
  
      </div>
  
          }
        
      </Paper>
    );
  };
  
  