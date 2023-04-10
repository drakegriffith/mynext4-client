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
    const collegeChunks = chunkArray(collegeFilteredList, 6);

    useEffect(() => {
  
        const getList = async() => {
          if (filterVal === "10"
          || filterVal === "25"
          || filterVal === "40"
          || filterVal === "50"
        ) {
            await API.get(`api/explore/college/acceptance/${filterVal}/`)
            .then((response) => {
              setCollegeFilteredList(response.data.colleges);
            });
          } else if (filterVal === "1000"
                    || filterVal === "1200"
                    || filterVal === "1300"
                    || filterVal === "1450") {
    
         
            await API.get(`api/explore/college/sat_average/${filterVal}/`)
            .then((response) => {
              setCollegeFilteredList(response.data.colleges);
            });
          } else if (filterVal === "all_A_overall"
                    || filterVal === "all_B_overall"
                    || filterVal === "all_C_overall"
                   ) {
    
                     
                      await API.get(`api/explore/college/rank/overall/${filterVal}/`)
                      .then((response) => {

                        setCollegeFilteredList(response.data.colleges);
                      });
                    } else if (filterVal === "all_A_academic"
                    || filterVal === "all_B_academic"
                    || filterVal === "all_C_academic"
                   ) {
    
                   
                      await API.get(`api/explore/college/rank/academic/${filterVal}/`)
                      .then((response) => {
                      
                        setCollegeFilteredList(response.data.colleges);
                      }); 
                     } else if (filterVal === "all_A_diversity"
                    || filterVal === "all_B_diversity"
                    || filterVal === "all_C_diversity"
                   ) {
    
                     
                      await API.get(`api/explore/college/rank/diversity/${filterVal}/`)
                      .then((response) => {
                        setCollegeFilteredList(response.data.colleges);
                      });
                    } else if (filterVal === "all_A_athletic"
                    || filterVal === "all_B_athletic"
                    || filterVal === "all_C_athletic"
                   ) {
    
                   
                      await API.get(`api/explore/college/rank/athletics/${filterVal}/`)
                      .then((response) => {
                        setCollegeFilteredList(response.data.colleges);
                      });
                    } else if (filterVal === "all_A_student_life"
                    || filterVal === "all_B_student_life"
                    || filterVal === "all_C_student_life"
                   )  {
    
              
                      await API.get(`api/explore/college/rank/student_life/${filterVal}/`)
                      .then((response) => {
                        setCollegeFilteredList(response.data.colleges);
                      });
                    } else if (filterVal === "all_A_campus"
                    || filterVal === "all_B_campus"
                    || filterVal === "all_C_campus"
                   ) {
    
                      await API.get(`api/explore/college/rank/campus/${filterVal}/`)
                      .then((response) => {
                        setCollegeFilteredList(response.data.colleges);
                      });
                
                    } else if (filterVal === "all_A_party"
                    || filterVal === "all_B_party"
                    || filterVal === "all_C_party"
                   ) {
                    await API.get(`api/explore/college/rank/party/${filterVal}/`)
                    .then((response) => {
                      setCollegeFilteredList(response.data.colleges);
                    });

                   } else if (filterVal === "all_A_value"
                   || filterVal === "all_B_value"
                   || filterVal === "all_C_value"
                  ) {
                   await API.get(`api/explore/college/rank/value/${filterVal}/`)
                   .then((response) => {
                     setCollegeFilteredList(response.data.colleges);
                   });

                   } else if (filterVal === "all_A_student_life"
                  || filterVal === "all_B_student_life"
                  || filterVal === "all_C_student_life"
                 ) {
                  await API.get(`api/explore/college/rank/student_life/${filterVal}/`)
                  .then((response) => {
                    setCollegeFilteredList(response.data.colleges);
                  });

                } else if (filterVal === "all_A_food"
                || filterVal === "all_B_food"
                || filterVal === "all_C_food"
               ) {
                await API.get(`api/explore/college/rank/food/${filterVal}/`)
                .then((response) => {
                  setCollegeFilteredList(response.data.colleges);
                });

                };
              };
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
          
          if (searchVal.length % 2 === 0) {
            init_api();
            await API.get(`/api/search/college/${searchVal}/`)
            .then((response) => { 
              setCollegeFilteredList(response.data.colleges);
              
            });
          };
        };
        setPrevSearchLength(searchVal.length);
      }

    return (
      <Paper shadow="lg" p="md" sx={{borderRadius: '5px' ,width: "25%",backgroundColor: '#57CC99', border: '.5px solid #C7F9CC' , zIndex:1}}>
        
        <div className="component-computer-header" style={{marginBottom: 10}}>
          
        <div className="my-component-header-text"><b> See Colleges </b> </div>
          <div className="collegecomputer-filter">
            
           { view === "Filter" ? (<select id="collegecomputer-filter-select" onChange={filter}>
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
  
              <optgroup label = "Overall Ranks ">
                <option value = "all_A_overall">All A Grade</option>
                <option value = "all_B_overall">All B Grade</option>
                <option value = "all_C_overall">All C Grade</option>
    
              </optgroup>
              
              <optgroup label = "Academic Ranks ">
                <option value = "all_A_academic">All A Grade</option>
                <option value = "all_B_academic">All B Grade</option>
                <option value = "all_C_academic">All C Grade</option>
    
              </optgroup>

              <optgroup label = "Student Life Ranks ">
                <option value = "all_A_student_life">All A Grade</option>
                <option value = "all_B_student_life">All B Grade</option>
                <option value = "all_C_student_life">All C Grade</option>
    
              </optgroup>
            
              <optgroup label = "Diversity Ranks ">
                <option value = "all_A_diversity">All A Grade</option>
                <option value = "all_B_diversity">All B Grade</option>
                <option value = "all_C_diversity">All C Grade</option>
    
              </optgroup>
              
              <optgroup label = "Value Grade ">
                <option value = "all_A_value">All A Grade</option>
                <option value = "all_B_value">All B Grade</option>
                <option value = "all_C_value">All C Grade</option>
    
              </optgroup>
              <optgroup label = "Athletic Grade ">
                <option value = "all_A_athletic">All A Grade</option>
                <option value = "all_B_athletic">All B Grade</option>
                <option value = "all_C_athletic"> All C Grade </option>
    
              </optgroup>

              <optgroup label = "Food Grade ">
                <option value = "all_A_food">All A Grade</option>
                <option value = "all_B_food">All B Grade</option>
                <option value = "all_C_food"> All C Grade </option>
    
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
     
  
          {view === "Filter" && filterVal === "Search" &&
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