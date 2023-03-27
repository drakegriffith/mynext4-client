import React, { useEffect, useState } from "react";
import { API, init_api } from "../../../../API"
import { Paper } from '@mantine/core';
import { SmallCollege } from "../College";
import { Carousel } from "react-responsive-carousel";
import { Search } from "tabler-icons-react";

export const CollegeComputer = ({  onSelectCollege }) => {
    const [view, setView] = useState('Filter');
    const [collegeFilteredList, setCollegeFilteredList] = useState([]);
    const [filterVal, setFilterVal] = useState('Search');
    const [prevSearchLength, setPrevSearchLength] = useState(0);

    const chunkArray = (array, size) => {
      const chunks = [];
      for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
      }
      return chunks;
    };
    const collegeChunks = chunkArray(collegeFilteredList, 8);

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
              
              setCollegeFilteredList(response.data.colleges);
            });
          } else if (filterVal === "1000"
                    || filterVal === "1200"
                    || filterVal === "1300"
                    || filterVal === "1450") {
    
            init_api();
            await API.get(`api/explore/college/sat_average/${filterVal}/`)
            .then((response) => {
              console.log(response.data.colleges)
              setCollegeFilteredList(response.data.colleges);
            });
          } else if (filterVal === "all_A_hard"
                    || filterVal === "all_B_hard"
                    || filterVal === "all_C_hard"
                   ) {
    
                      init_api();
                      await API.get(`api/explore/college/rank/hardest/${filterVal}/`)
                      .then((response) => {

                        setCollegeFilteredList(response.data.careers);
                      });
                    } else if (filterVal === "value_10"
                    || filterVal === "value_25"
                    || filterVal === "value_50"
                   ) {
    
                      init_api();
                      await API.get(`api/explore/college/rank/value/${filterVal}/`)
                      .then((response) => {
                      
                        setCollegeFilteredList(response.data.careers);
                      }); 
                     } else if (filterVal === "life_10"
                    || filterVal === "life_25"
                    || filterVal === "life_50"
                   ) {
    
                      init_api();
                      await API.get(`api/explore/college/rank/student_life/${filterVal}/`)
                      .then((response) => {
                        setCollegeFilteredList(response.data.careers);
                      });
                    } else if (filterVal === "greek_10"
                    || filterVal === "greek_25"
                    || filterVal === "greek_50"
                   ) {
    
                      init_api();
                      await API.get(`api/explore/college/rank/greek_life/${filterVal}/`)
                      .then((response) => {
                        setCollegeFilteredList(response.data.careers);
                      });
                    } else if (filterVal === "best_10"
                    || filterVal === "best_25"
                    || filterVal === "best_50"
                   ) {
    
                      init_api();
                      await API.get(`api/explore/college/rank/best/${filterVal}/`)
                      .then((response) => {
                        setCollegeFilteredList(response.data.careers);
                      });
                    } else if (filterVal === "athletic_10"
                    || filterVal === "athletic_25"
                    || filterVal === "athletic_50"
                   ) {
    
                      init_api();
                      await API.get(`api/explore/college/rank/athletics/${filterVal}/`)
                      .then((response) => {
                        setCollegeFilteredList(response.data.careers);
                      });
                    } else if (filterVal === "campus_10"
                    || filterVal === "campus_25"
                    || filterVal === "campus_50"
                   ) {
    
                      init_api();
                      await API.get(`api/explore/college/rank/campus/${filterVal}/`)
                      .then((response) => {
                        setCollegeFilteredList(response.data.careers);
                      });
                
                    } else if (filterVal === "prof_10"
                    || filterVal === "prof_25"
                    || filterVal === "prof_50"
                   ) {
    
                      init_api();
                      await API.get(`api/explore/college/rank/professors/${filterVal}/`)
                      .then((response) => {
                        setCollegeFilteredList(response.data.careers);
                      });
                    } else if (filterVal === "food_10"
                    || filterVal === "food_25"
                    || filterVal === "food_50"
                   ) {
    
                      init_api();
                      await API.get(`api/explore/college/rank/food/${filterVal}/`)
                      .then((response) => {
                        setCollegeFilteredList(response.data.careers);
                      });
                    }
                    else if (filterVal === "all_A_academic"
                    || filterVal === "all_B_academic"
                    || filterVal === "all_C_academic"
                   ) {
    
                      init_api();
                      await API.get(`api/explore/college/rank/academics/${filterVal}/`)
                      .then((response) => {
                        setCollegeFilteredList(response.data.careers);
                      });
                
                    } else {
                      setCollegeFilteredList([]);
                    }
        }
        
        getList();
      }, [filterVal]);

      const filter = (e) => {
        setFilterVal(e.target.value);
      }

      
    
      const search = async(e) => {
        var searchVal = e.target.value;
        searchVal = searchVal.charAt(0).toUpperCase() + searchVal.slice(1);
    
        if (searchVal.length < prevSearchLength) {
          setCollegeFilteredList([]);
          
        } else if (searchVal.length > 1) {
          
          if (searchVal.length % 2 == 0) {
            init_api();
            await API.get(`/api/search/college/${searchVal}/`)
            .then((response) => {
              
              setCollegeFilteredList(response.data.colleges);
              console.log(response.data.colleges)
              
            });
          }
        }
        setPrevSearchLength(searchVal.length);
      }

    return (
      <Paper shadow="lg" p="md" sx={{borderRadius: '5px' ,width: "25%",backgroundColor: '#80ED99', border: '.5px solid #C7F9CC' , zIndex:1}}>
        
        <div className="component-computer-header" style={{marginBottom: 10}}>
          
        <div className="my-component-header-text"><b> See Colleges </b> </div>
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
                <option value = "all_A_academic">Top 10</option>
                <option value = "all_B_academic">Top 25</option>
                <option value = "all_C_academic">Top 50</option>
    
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
              <optgroup label = "Academic Ranks ">
                <option value = "all_A_academic">Top 10</option>
                <option value = "all_B_academic">Top 25</option>
                <option value = "all_C_academic">Top 50</option>
    
              </optgroup>
            </select>
            ) : (
              <div>
              
              </div>
            ) }
           
          </div>
  
          
        </div>
        
       {view == "Filter" && filterVal != "Search" &&
        
      <div>
        <div style={{textAlign: 'center', color: 'white', fontWeight: 500}}><b>{collegeFilteredList.length} </b>items rendered</div>
        <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        {collegeChunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="carousel-slide">
            <ul className="my-component-list">
              {chunk.map((name, id) => (
                <li key={chunkIndex * 8 + id} className="my-component-list-item">
                  <SmallCollege college={name} onSelect={() => onSelectCollege(name)} showHeart={false}/>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Carousel>
      </div>
      }
     
  
          {view == "Filter" && filterVal == "Search" &&
          <div className="search-career-container" >
          <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          
             <div className="icon-wrapper"><Search size={32} /></div>
      <div className="career-tooltip">Search MyNext4</div>
  
          
              <input onChange={search}/>
         
            </div>
  
  
            <div style={{textAlign: 'center',padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '10px', fontSize: '12px', marginTop: '5px'}}><b>{collegeFilteredList.length}</b> items rendered</div>
          <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        {collegeChunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="carousel-slide">
            <ul className="my-component-list">
              {chunk.map((name, id) => (
                <li key={chunkIndex * 8 + id} className="my-component-list-item" >
                  <SmallCollege college={name} onSelect={() => onSelectCollege(name)} showHeart={false}/>
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