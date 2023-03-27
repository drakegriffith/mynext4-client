import React, { useEffect, useState } from "react";
import { API, init_api } from "../../../../API"
import { Paper } from '@mantine/core';
import { Carousel } from "react-responsive-carousel";
import { SmallCareer, MediumCareer, LargeCareer } from "../Career";
import { Search } from "tabler-icons-react";
import "../MyCareers.css"

export const CareerComputer = ({ onSelectCareer }) => {
    const [view, setView] = useState('Filter');
    const [careerFilteredList, setCareerFilteredList] = useState([]);
    const [filterVal, setFilterVal] = useState('Search');
    const [prevSearchLength, setPrevSearchLength] = useState(0);
  
    const chunkArray = (array, size) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += size) {
          chunks.push(array.slice(i, i + size));
        }
        return chunks;
      };
      const careerChunks = chunkArray(careerFilteredList, 8);

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
        <Paper shadow="lg" p="md" sx={{backgroundColor: '#80ED99', border: '.5px solid #C7F9CC' ,borderRadius: '5px' ,width: "25%", zIndex:1}}>
        
        <div className="component-computer-header" style={{marginBottom: 20}}>
          
          <div className="componentMiddleHeaderText"><b> See Careers </b> </div>
            <div className="componentcomputer-filter">
            
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
               
        </div>
            ) }
            </div>
            </div>
        
       {view == "Filter" && filterVal != "Search" &&
        
        <div>
        <div style={{padding: '3px', textAlign: 'center', backgroundColor: '#f0f0f0', borderRadius: '10px', fontSize: '12px', marginTop: '5px',textAlign: 'center', color: 'white', fontWeight: 500, color: 'black'}}><b>{careerFilteredList.length} </b>items rendered</div>
        <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        {careerChunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="carousel-slide">
            <ul className="my-component-list">
              {chunk.map((name, id) => (
                <li key={chunkIndex * 8 + id} className="my-component-list-item">
                  <SmallCareer career={name} onSelect={() => onSelectCareer(name)} showHeart={false}/>
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
  
            <div style={{textAlign: 'center',padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '10px', fontSize: '12px', marginTop: '5px'}}><b>{careerFilteredList.length}</b> items rendered</div>
          <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        {careerChunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="carousel-slide">
            <ul className="my-component-list">
              {chunk.map((name, id) => (
                <li key={chunkIndex * 8 + id} className="my-component-list-item" >
                  <SmallCareer career={name} onSelect={() => onSelectCareer(name)} showHeart={false}/>
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