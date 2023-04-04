import React, { useState, useEffect, useContext } from 'react';
import { useSpring, animated } from 'react-spring';
import "./Dashboard.css";
import { motion } from "framer-motion";
import { BookUpload, Search, Trophy, School, Books, ChefHat, Book} from "tabler-icons-react";
import AssignedSurveys from '../../AssignedSurveys';
import { API, init_api } from '../../API';
import { useLocation, useParams } from "react-router";
import Careers from '../../Pages/Careers/Careers';
import { SmallCourse } from '../MyComponents/MyCourses/Course';
import { SmallCollege } from '../MyComponents/MyColleges/College';
import { SmallCareer } from '../MyComponents/MyCareers/Career';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AuthContext } from '../Auth/AuthContext';
import { UserContext } from '../../Pages/App';
import PersonalSide from './PersonalSide';
import { Paper, Tabs } from '@mantine/core';
import { SurveyContext } from '../../SurveyContext';



function Dashboard({  }) {
  const [showCourses, setShowCourses] = useState(true);
const [showColleges, setShowColleges] = useState(false);
const [showCareers, setShowCareers] = useState(false);
const { userID } = useContext(UserContext)
const { isAuthenticated } = useContext(AuthContext);

  const [answer, setAnswer] = useState(null);
  const [careerLikedList, setCareerLikedList] = useState([]);
  const [collegeLikedList, setCollegeLikedList] = useState([]);
  const [courseLikedList, setCourseLikedList] = useState([]);
  const [activeUser, setActiveUser] = useState([]);


  const MyCarousel = ({ items }) => {
    const chunks = [];
    const size = 8;
  
    // Split the items array into chunks of size 8
    for (let i = 0; i < items.length; i += size) {
      chunks.push(items.slice(i, i + size));
    }
  
    return (
      <Carousel>
        {chunks.map((chunk, index) => (
          <div key={index}>
            {chunk.map((item, itemIndex) => (
              <div key={itemIndex}>
                <div> { items == courseLikedList ? 
                <SmallCourse course={item} />
                : items == collegeLikedList ?
                <SmallCollege college={item} />
                : <SmallCareer career={item} />
                }
              </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    );
  };

  useEffect(() => {
      
    const getLikedCourses = async () => {
        
        init_api();
        await API.get(`/api/users/courselist/${userID}/`)
        .then((response) => {
            
            console.log(response.data.liked_list);
            setCourseLikedList(response.data.liked_list);
        });
    }
    
    getLikedCourses();

    const getLikedColleges = async () => {
        
      init_api();
      await API.get(`/api/users/collegelist/${userID}/`)
      .then((response) => {
          
          console.log(response.data.liked_list);
          setCollegeLikedList(response.data.liked_list);
      });
  }
  
    getLikedColleges();
  
    const getLikedCareers = async () => {
            
      init_api();
      await API.get(`/api/users/careerlist/${userID}/`)
      .then((response) => {
          
          console.log(response.data.liked_list);
          setCareerLikedList(response.data.liked_list);
      });
    }
  
    getLikedCareers();
 
  }, []);

 
  const handleCourseClick = () => {
    window.location.href = '/mycourses';
  };

  const handleCollegeClick = () => {
    window.location.href = '/mycolleges';
  };

  const handleCareerClick = () => {
    window.location.href = '/mycareer';
  };


  
  const [courseIndex, setCourseIndex] = useState(0);
  const [collegeIndex, setCollegeIndex] = useState(0);
  const [careerIndex, setCareerIndex] = useState(0);
  const handleClick = () => {
    // Code to run on click
  };

  const itemsPerContainer = 8;

  // Function to get a slice of the array based on the current index and number of items to display
  const getItems = (list, index) => {
    const startIndex = index % list.length;
    const endIndex = startIndex + itemsPerContainer;
    return list.slice(startIndex, endIndex);
  };

  const courseComplete = activeUser.course_survey
    const collegeComplete = activeUser.college_survey
    const careerComplete = activeUser.career_survey

    console.log(activeUser)
  return (
    isAuthenticated ?

<div className="ovr-container">

    <div className="dashboard-container" >
    <div className="personal-container" >
        <PersonalSide  name={activeUser.username} email={activeUser.email} courseComplete={courseComplete} 
        collegeComplete={collegeComplete} careerComplete={careerComplete} />
      </div>

    <Paper shadow="lg" className="dashboard-main-area" style={{marginTop: 10}}>
  
  <div>
  <Tabs defaultValue="courses">
    <Tabs.List>
      <Tabs.Tab value="courses" icon={<Book size="1.3rem" />}>Course Cards</Tabs.Tab>
      <Tabs.Tab value="colleges" icon={<School size="1.3rem" />}>College Cards</Tabs.Tab>
      <Tabs.Tab value="careers" icon={<ChefHat size="1.3rem" />}>Career Cards</Tabs.Tab>

    </Tabs.List>



  <Tabs.Panel value="courses" pt="xs">
      <div className="dashboard-courses">
      <div style={{textAlign: 'left', marginLeft: '3px', fontWeight: 700, fontSize: '16px', marginBottom: 0}}><i>MyCourses</i></div>
      <hr />
      
    <MyCarousel items={courseLikedList} />
  

  <div style={{padding: '25px', backgroundColor: 'white', marginTop: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto',marginLeft: 'auto', marginRight: 'auto', borderRadius: '4px', width: '20px', height: '20px'}}>
   <div onClick={handleCourseClick} style={{ textAlign: 'center',  cursor: 'pointer'}}> <Search size={32} /></div>
  </div>
  </div>
  </Tabs.Panel>

  <Tabs.Panel value="colleges" pt="xs">
      <div className="dashboard-colleges"> 
      <div style={{textAlign: 'left', marginLeft: '3px', fontWeight: 700, fontSize: '16px', marginBottom: 0}}><i>MyColleges</i></div>
      <hr />
{/*
      <WaterFallContainer items={collegeLikedList.map((college) => (
   <SmallCollege key={college.id} college={college} />
 ))} />
      */}
 
       <div onClick={handleCollegeClick} style={{ textAlign: 'center', cursor: 'pointer'}}> <Search size={32} /></div>

 </div>
 </Tabs.Panel>

 <Tabs.Panel value="careers" pt="xs">
      <div className="dashboard-careers">
      <div style={{textAlign: 'left', marginLeft: '3px', fontWeight: 700, fontSize: '16px', marginBottom: 0}}><i></i></div>
      <hr />
      {/*<WaterFallContainer items={careerLikedList.map((career) => (
  <SmallCareer key={career.id} career={career} />
      ))} /> */}
<div style={{padding: '25px', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto',marginLeft: 'auto', marginRight: 'auto', borderRadius: '4px', width: '20px', height: '20px'}}>
      <div onClick={handleCareerClick} style={{textAlign: 'center',  cursor: 'pointer'}}> <Search size={32} /></div>
    </div>
    </div>
    </Tabs.Panel>

    </Tabs>

</div>
</Paper>
    <div className="dashboard-right">

        <div className='dashboard-miss-container'>
      <div className="dashboard-missions">
      <h6 className="animated-gradient-text h4Tag" style={{textAlign: 'center', fontWeight: 800, fontSize: '48px', marginLeft: 0, marginTop: 0, marginBottom: 0, fomtFamily: 'Phudu'}}> / </h6>
      </div>

      </div>
 
      </div>

    </div>
  


 
 </div>

 : 

 <h4 style={{textAlign: 'center', marginTop: 30}}> You are not an active user. Please log in again.</h4>

  )
}

export default Dashboard;









