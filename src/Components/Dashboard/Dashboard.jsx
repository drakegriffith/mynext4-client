import React, { useState, useEffect, useContext } from 'react';
import { useSpring, animated } from 'react-spring';
import "./Dashboard.css";
import { motion } from "framer-motion";
import { BookUpload, Search, Trophy, School, Books, ChefHat, Book} from "tabler-icons-react";
import { API, init_api } from '../../API';
import { SmallCourse } from '../MyComponents/MyCourses/Course';
import { SmallCollege } from '../MyComponents/MyColleges/College';
import { SmallCareer } from '../MyComponents/MyCareers/Career';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AuthContext } from '../Auth/AuthContext';
import { UserContext } from '../../Pages/App';
import Next4Medal from "./images/next4_medallian.png"
import Next4Notebook from "./images/next4_notebook.png"
import { Tabs } from '@mantine/core';
import Joyride, { STATUS } from 'react-joyride';
import Next4Career from "./images/career.png"
import Next4College from "./images/college.png"
import Next4Course from "./images/course.png"
import { useDisclosure } from '@mantine/hooks';
import { Modal, Collapse, Paper } from '@mantine/core';
import { Icon, Book2, Backpack, Ballpen, Checklist, Check, Medal, Settings, CircleCheck } from "tabler-icons-react";
import { MediumCareerCarousel, MediumCollegeCarousel, MediumComponentCarousel, MediumCourseCarousel } from './helpers/LikedComponentCarousel';
import { useNavigate } from 'react-router';

const Dashboard = () => {
  const [showTutorial, setShowTutorial] = useState(false);
  const [showCourses, setShowCourses] = useState(true);
const [showColleges, setShowColleges] = useState(false);
const [showCareers, setShowCareers] = useState(false);
const { userID, username } = useContext(UserContext)
const { isAuthenticated } = useContext(AuthContext);

  const [answer, setAnswer] = useState(null);
  const [careerLikedList, setCareerLikedList] = useState([]);
  const [collegeLikedList, setCollegeLikedList] = useState([]);
  const [courseLikedList, setCourseLikedList] = useState([]);
  const [activeUser, setActiveUser] = useState([]);
  const navigate = useNavigate();
  
  const tutorialSteps = [
    {
      target: '.step-1',
      content: 'View your liked courses here.',
    },
    {
      target: '.step-2',
      content: 'Same goes for colleges.',
    },
    {
      target: '.step-3',
      content: '...and careers.',
    },
    {
      target: '.step-4',
      content: "Inspect your personal information here, click to turn on and off.",
    },
    {
      target: '.step-5',
      content: "Take and view your completed survey's here.",
    },
    {
      target: '.step-6',
      content: "See your Next4 awards and achievments here.",
    },
    {
      target: '.step-7',
      content: 'See settings and customize information here.',
    },
    // ...
  ];

  useEffect(() => {
    init_api();
    const setTutorialComplete = async () => {
      try {
        await API.post(`/mark-completed-tutorial/${userID}/`);
      } catch (error) {
        console.error('Error marking survey as completed:', error);
      }
    }
  if (showTutorial === true) {
      setTutorialComplete();
  };
  }, [showTutorial])

  useEffect(() => { 
    init_api();
    const checkTutorialCompletion = async () => {
      try {
        const response = await API.get(`/check-tutorial-complete/${userID}/`);
        console.log(response.data)
        setShowTutorial(!response.data.tutorialStatus)
      } catch (error) {
        console.error('Error checking survey completion:', error);
      }
    };
    checkTutorialCompletion();
  }, [])
 

  const handleJoyrideCallback = (data) => {
    const { status } = data;
  
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setShowTutorial(false);
    }
  };
  

  
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
    navigate(`/my/courses/${userID}`)
  };

  const handleCollegeClick = () => {
    navigate(`/my/colleges/${userID}`)
  };

  const handleCareerClick = () => {
    navigate(`/my/careers/${userID}`)
  };

  const topDashboardStyle = {
    position: 'absolute',
    top: '-25px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontWeight: 500,
    backgroundColor: '#2B2D42',
    color: 'white',
    height: '50px',
    lineHeight: '50px',
    fontSize: '22px',
    padding: '0px 40px',
    borderRadius: '20px',
    textAlign: 'center',
    zIndex: 1,
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
    const [opened, { toggle }] = useDisclosure(true);
  return (
    
    isAuthenticated && userID ?
    



    <div className="dashboard-container" >
    

<Joyride
  steps={tutorialSteps}
  run={showTutorial}
  callback={handleJoyrideCallback}
  continuous
  scrollToFirstStep
  showProgress
  showSkipButton
/>
    <div className="personal-container" >
    <Paper onClick={toggle} shadow='lg' sx={{
          backgroundColor: '#57CC99',

            marginTop: '0px',
            top: 0,
            width: opened ? '100%' : '100%', // Change width based on opened state
            height: opened ? 'inherit' : '150px', // Change height based on opened state
            flexDirection: 'column',
            alignItems: 'center'
        }}>
               <div style={{  position: 'absolute', translate: 'translate(-50%, -50%)', top: 30, left: 50, width: '80px', cursor: 'pointer', height: '80px'}}>
             <div className="step-4" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', width: '100%', height: '100%', margin: '5px', backgroundColor: '#38A3A5'}}>
                    <Book2 color='white' size={48} />
                </div>
                
                </div>
                
              { opened ? '' : <h3 className="animated-gradient-text" style={{fontSize: '24px', position: 'absolute', left: 52.5, top: 165 }}> MyPanel</h3>}


            <Collapse  in={opened}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div>
     
        
    </div>
    
    <motion.div className="step-5" 
    animate={{ y: [-20, 0], opacity: [0, 1] }}
    whileHover={{ scale: 1.1 }}
    style={{
      position: 'relative', 
      backgroundColor: '#22577A', 
      zIndex: 3, 
      borderRadius: '50%', 
      cursor: 'pointer', 
      margin: '160px auto 5px auto', 
      width: '60px', 
      height: '60px', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center'
    }}
>
  <motion.img
    style={{
      position: 'absolute',
      width: '100%',
      borderRadius: '50%',
      height: 'auto',
      top: 0,
      left: 0
    }}
    src={Next4Medal}
    animate={{ rotate: 360 }}
    transition={{ duration: 2 }}
  />
</motion.div>

<h5 style={{marginTop:5, fontSize: '16px', color: 'white'}}> MyMedals</h5>

<motion.div className="step-6"
    animate={{ y: [-20, 0], opacity: [0, 1] }}
    whileHover={{ scale: 1.1 }}
    style={{
      position: 'relative', 
      backgroundColor: '#57CC99', 
      cursor: 'pointer', 
      borderRadius: '50%', 
      margin: '5px', 
      marginTop: '10px', 
      width: '60px', 
      height: '60px', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center'
    }}
>
  <motion.img
    style={{
      position: 'absolute',
      width: '100%',
      borderRadius: '50%',
      height: 'auto',
      top: 0,
      left: 0
    }}
    src={Next4Notebook}
    animate={{ rotate: -360 }}
    transition={{ duration: 2 }}
  />
</motion.div>
<h5 style={{marginTop:5, fontSize: '16px', color: 'white'}}> MySurveys</h5>

                <Paper className="step-7"  shadow="xl" style={{ cursor: 'pointer', position: 'absolute', left: 95, bottom: 20,margin: '5px', marginTop: '10px', width: '40px', height: '40px', display: 'flex', borderRadius: '5px', justifyContent: 'center', alignItems: 'center'}}>
                    <Settings size={32} />
                </Paper>
            </div>
</Collapse>

        </Paper>
            
      </div>

    <Paper p="md" shadow="lg" className="dashboard-main-area" style={{marginTop: 10}}>
    <div className="shiny-text" style={topDashboardStyle}>{username}</div>
  <div>
  <Tabs defaultValue="courses">
    <Tabs.List style={{margin: '45px auto 0', display: 'flex', justifyContent: 'center'}}>
      <Tabs.Tab value="courses" className="step-1" tabStyle={{ backgroundColor: '#2B2D42', color: 'white' }} style={{ color: 'white' }} icon={<Book size="1.6rem" />}><b>Courses</b></Tabs.Tab>
      <Tabs.Tab value="colleges" className="step-2" tabStyle={{ backgroundColor: '#2B2D42', color: 'white' }} style={{color: 'white'}} icon={<School size="1.6rem" />}><b>Colleges</b></Tabs.Tab>
      <Tabs.Tab value="careers" className="step-3" tabStyle={{ backgroundColor: '#2B2D42', color: 'white' }} style={{color: 'white'}} icon={<ChefHat size="1.6rem" />}><b>Careers</b></Tabs.Tab>

    </Tabs.List>



  <Tabs.Panel value="courses" pt="xs">
  <div className="dashboard-component-container" style={{ position: 'relative' }}>
    <div className="" style={{textAlign: 'left', marginLeft: '70px', fontWeight: 700, fontSize: '24px', color: 'white', marginBottom: 0}}><b>{courseLikedList.length}</b> Total Cards</div>
  <div style={{marginTop: 15}}>
    <MediumCourseCarousel items={courseLikedList} />
    </div>
<div className="search-icon-container" style={{ position: 'absolute', borderRadius: '50%', bottom: '50px', left: '50%', transform: 'translateX(-50%)', width: '75px', height: '75px' }}>
  <div onClick={handleCourseClick} style={{ textAlign: 'center', cursor: 'pointer', border: '1px solid black',  width: '100%',borderRadius: '50%', height: '100%' }}>
    <img src={Next4Course} style={{ position: 'absolute', width: '100%', height: 'auto', top: 0, left: 0, bottom: 0, right: 0, border: '1px solid gray', borderRadius: '50%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }} />
  </div>
  <h5 style={{textAlign: 'center', fontSize: '16px', marginTop: 10, color: 'white'}}> MyCourses </h5>
</div>
</div>
  </Tabs.Panel>

  <Tabs.Panel value="colleges" pt="xs">
  <div className="dashboard-component-container" style={{ position: 'relative' }}>
  <div style={{textAlign: 'left', marginLeft: '70px', fontWeight: 700, fontSize: '24px', color: 'white', marginBottom: 0}}><b>{collegeLikedList.length}</b> Total Cards</div>
  <div style={{marginTop: 15}}>
    <MediumCollegeCarousel items={collegeLikedList} />
    </div>
<div className="search-icon-container" style={{ position: 'absolute', borderRadius: '50%', bottom: '50px', left: '50%', transform: 'translateX(-50%)', width: '75px', height: '75px' }}>
  <div onClick={handleCollegeClick} style={{ textAlign: 'center', cursor: 'pointer', border: '1px solid black',  width: '100%',borderRadius: '50%', height: '100%' }}>
    <img src={Next4College} style={{ position: 'absolute', width: '100%', height: 'auto', top: 0, left: 0, bottom: 0, right: 0, border: '1px solid gray', borderRadius: '50%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }} />
  </div>
  <h5 style={{textAlign: 'center', fontSize: '16px', marginTop: 10, color: 'white'}}> MyColleges </h5>
</div>
</div>
 </Tabs.Panel>

 <Tabs.Panel value="careers" pt="xs">
  <div className="dashboard-component-container" style={{ position: 'relative' }}>
  <div style={{textAlign: 'left', marginLeft: '70px', fontWeight: 700, fontSize: '24px', color: '#FFF', marginBottom: 0}}><b>{careerLikedList.length}</b> Total Cards</div>
  <div style={{marginTop: 15}}>
    <MediumCareerCarousel items={careerLikedList} />
    </div>
<div className="search-icon-container" style={{ position: 'absolute', borderRadius: '50%', bottom: '50px', left: '50%', transform: 'translateX(-50%)', width: '75px', height: '75px' }}>
  <div onClick={handleCareerClick} style={{ textAlign: 'center', cursor: 'pointer', border: '1px solid black',  width: '100%',borderRadius: '50%', height: '100%' }}>
    <img src={Next4Career} style={{ position: 'absolute', width: '100%', height: 'auto', top: 0, left: 0, bottom: 0, right: 0, border: '1px solid gray', borderRadius: '50%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }} />
  </div>
  <h5 style={{textAlign: 'center', fontSize: '16px', marginTop: 10, color: 'white'}}> MyCareers </h5>
</div>
</div>
  
</Tabs.Panel>


    </Tabs>

</div>
</Paper>
    <div className="dashboard-right">

        <div className='dashboard-miss-container'>
      <div className="dashboard-missions">
      <h6 className="animated-gradient-text h4Tag" style={{textAlign: 'center', fontWeight: 800, fontSize: '40px', marginLeft: 0, marginTop: 0, marginBottom: 0, fomtFamily: 'Phudu'}}> Challenge </h6>
      </div>

      </div>
 
      </div>


    </div>
 
 : 
 <div style={{textAlign: 'center', marginTop: 500, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
 <h1> Your account has been unauthorized. Refresh your browser and sign in again.</h1> </div>


  )
}

export default Dashboard;









