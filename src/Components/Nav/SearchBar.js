import React, { useState, useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import { AuthContext } from "../Auth/AuthContext"; // Make sure to import this context from the correct location
import { SmallCareer } from "../MyComponents/MyCareers/Career"; // Make sure to import this component from the correct location
import { SmallCollege } from "../MyComponents/MyColleges/College"; // Make sure to import this component from the correct location
import { SmallCourse } from "../MyComponents/MyCourses/Course"; // Make sure to import this component from the correct location
import { useNavigate } from "react-router";
import { API, init_api } from "../../API";
import "./NavBar.css"

const SearchBar = () => {
    const { auth } = useContext(AuthContext)
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchType, setSearchType] = useState('global');
    const [searchVal, setSearchVal] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [prevSearchLength, setPrevSearchLength] = useState(0);
    const [filteredResults, setFilteredResults] = useState({
    careers: [],
    colleges: [],
    courses: [],
    });
    const search = async (e) => {
        var searchVal = e.target.value;
        searchVal = searchVal.charAt(0).toUpperCase() + searchVal.slice(1);
        setSearchVal(searchVal);
        if (searchVal.length < prevSearchLength) {
        setFilteredResults([]);
        } else if (searchVal.length > 1) {
        if (searchVal.length % 2 === 0) {
            init_api();
            const searchUrl = `/api/search/${searchType || 'global'}/${searchVal}/`;
            await API.get(searchUrl).then((response) => {
                setShowResults(true);
                setFilteredResults({
                careers: response.data.careers,
                colleges: response.data.colleges,
                courses: response.data.courses,
                });
                if (response.data.careers.length > 0) {
                    setSearchType("career");
                } else if (response.data.colleges.length > 0) {
                    setSearchType("college");
                } else if (response.data.courses.length > 0) {
                    setSearchType("course");
                } else {
                    setSearchType("global");
                }
            
            });
        }
        }
        setPrevSearchLength(searchVal.length);
    };


    
    const chunkArray = (array, size) => {
        const chunks = [];
        if (array) {
            for (let i = 0; i < array.length; i += size) {
            chunks.push(array.slice(i, i + size));
            }
            return chunks;
        }
    };

    const careerChunks = chunkArray(filteredResults.careers, 4);
    const collegeChunks = chunkArray(filteredResults.colleges, 4);
    const courseChunks = chunkArray(filteredResults.courses, 4);
    console.log(careerChunks)
    const renderResults = () => {
        switch (searchType) {
        case "career":
            return (
            <div>
                    {filteredResults.careers &&  <div style={{textAlign: 'center', padding: '10px', backgroundColor: '#f0f0f0', fontSize: '12px', marginTop: '5px'}}><b>{filteredResults.careers.length}</b> items rendered</div> }
            <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
        >
            {careerChunks && careerChunks.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className="carousel-slide">
                <ul className="my-component-list">
                {chunk.map((name, id) => (
                    <li key={chunkIndex * 4 + id} className="my-component-list-item" >
                    <SmallCareer career={name}  searchValue={true} showHeart={false}/>
                    </li>
                ))}
                </ul>
            </div>
            ))}
        </Carousel>
    
        </div>
        
            );
        case "college":
            return (
            <div>
                    {filteredResults.colleges &&   <div style={{textAlign: 'center', margin: 5,padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '10px', fontSize: '12px', marginTop: '5px'}}><b>{filteredResults.colleges.length}</b> items rendered</div>}
            <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
        >
            {collegeChunks && collegeChunks.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className="carousel-slide">
                <ul className="my-component-list">
                {chunk.map((name, id) => (
                    <li key={chunkIndex * 4 + id} className="my-component-list-item" >
                    <SmallCollege  searchValue={true} college={name}  showHeart={false}/>
                    </li>
                ))}
                </ul>
            </div>
            ))}
        </Carousel>
    
            </div>
            );
        case "course":
            return (
            <div>
                    { filteredResults.courses && <div style={{textAlign: 'center',padding: '10px',backgroundColor: '#f0f0f0', fontSize: '12px', marginTop: '5px'}}><b>{filteredResults.courses.length}</b> items rendered</div>}
            <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
        >
            {courseChunks && courseChunks.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className="carousel-slide">
                <ul className="my-component-list">
                {chunk.map((name, id) => (
                    <li key={chunkIndex * 4 + id} className="my-component-list-item" >
                    <SmallCourse searchValue={true} course={name} showHeart={false}/>
                    </li>
                ))}
                </ul>
            </div>
            ))}
        </Carousel>
    
            </div>
            );
        default:
            return (
            <div>
                {/* Render global components */}
            </div>
            );
        }
    };
    

    const handleSearchTypeChange = (e) => {
        setSearchType(e.target.value);
    };
    return (
        <div className="search-bar">
          <select
            value={searchType}
            onChange={handleSearchTypeChange}
            className="searchTypeSelect"
          >
            <option value="">Show All</option>
            <option value="Careers">Career Search</option>
            <option value="Courses">Course Search</option>
            <option value="Colleges">College Search</option>
          </select>
          <input
            onChange={search}
            placeholder={`Explore ${searchType ? searchType : "MyNext4"}`}
            className="searchInput"
          />
          {showResults && searchVal.length > 0 && (
            <div className="search-results" style={{ backgroundColor: "white" }}>
              {renderResults()}
            </div>
          )}
        </div>
      );
    };

export default SearchBar;