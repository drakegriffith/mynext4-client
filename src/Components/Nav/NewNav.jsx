import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './NavBar.css';
import { API, init_api } from '../../API';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Pages/App';
import { SmallCollege } from '../MyComponents/MyColleges/College';
import { SmallCareer } from '../MyComponents/MyCareers/Career';
import { Carousel } from 'react-responsive-carousel';
import { Home2, User, UserCircle, UserMinus } from 'tabler-icons-react';
import { menuItems } from './icons';
import { SmallCourse } from '../MyComponents/MyCourses/Course';
import AuthContext from '../../Pages/LogIn/AuthContext';
import { MenuItems } from './icons';
import { useNavigate } from 'react-router-dom';
import next4Logo from "./icon.png"
const Navbar = () => {
    const navigate = useNavigate();
    const menuItems = MenuItems();
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
  const { userID} = useContext(UserContext)

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const circleBgVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.2,
      },
    }),
  };

  const wrapperStyle = {
    width: '55px',
    height: '55px',
    marginLeft: '10px',
    padding: '5px',
    margin: '5px',
    transition: 'transform 0.2s',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    transition: 'transform 0.2s',
  };

  const containerVariants = {
    hover: {
      rotate: [0, -10, 10, -10, 10, 0],

    },
    };
 

  
  const angleIncrement = 180 / 4; // You have 5 items, so you'll have 4 spaces between them

  return (
    <div className="navbar">

<motion.div
      className="icon-wrapper"
      style={wrapperStyle}
      variants={containerVariants}
      whileHover="hover"
    >
      <motion.img
        src={next4Logo}
        style={imageStyle}
        
        whileHover="hover"
      />
    </motion.div>
 
    <div style={{ position: 'relative' }}>
      <div className={`center-menu ${menuOpen ? 'center-menu--open' : ''}`}>
        <div className="center-menu__circle" onClick={toggleMenu}></div>
        <AnimatePresence>
          {menuOpen && auth && (
            <div>
                 <motion.div
            className="center-menu__circle-bg"
            variants={circleBgVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          ></motion.div>
           {auth &&
            <div className="center-menu__items">
              {menuItems.map((item, i) => { 
                  const angle = (angleIncrement * i) * (Math.PI / 180);
                  const x = 90 * Math.cos(angle);
                  const y = 90 * Math.sin(angle);
              // get the icon for this circle
                  return (
                    
                    <motion.div
                      key={i}
                      className="center-menu__item"
                      onClick={() => navigate(item.url)}
                      custom={i}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      style={{ left: x, top: y }}
                    >
                         <img src={item.icon} style={{borderRadius: '50%', width: '50px', height: '50px'}} alt={item.label} />
          <span className="navbar-tooltip">{item.label}</span>
                    </motion.div>
                  );
                })}
            </div>
}
            </div>
           
          )}
        </AnimatePresence>
      </div>
      </div>
    
{ auth ?

<div className="icon-wrapper" style={{marginRight: '10px'}} >
    <UserCircle color='black' size={32} onClick={() => {
      localStorage.removeItem('userToken');
      window.location.reload() 
      window.location.pathname = '/';}}/>
</div>
:
    
<div className="icon-wrapper" style={{marginRight: '10px'}} >
    <UserMinus color='black' size={32} onClick={() => {
      localStorage.removeItem('userToken');
      window.location.reload() 
      window.location.pathname = '/signIn';}}/>
</div>

}
<select
  value={searchType}
  onChange={handleSearchTypeChange}
  className="searchTypeSelect"
>
  <option value="">Global Search</option>
  <option value="career">Career Search</option>
  <option value="course">Course Search</option>
  <option value="college">College Search</option>
</select>
<input
  onChange={search}
  placeholder={`Search ${searchType || 'Global'}`}
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

export default Navbar;
