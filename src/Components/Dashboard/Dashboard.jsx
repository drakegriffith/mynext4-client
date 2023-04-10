import React, { useState, useEffect, useContext } from 'react';
import { useSpring, animated } from 'react-spring';
import "./Dashboard.css";
import { motion } from "framer-motion";
import { School, ChefHat, Book, Settings} from "tabler-icons-react";
import { API, init_api } from '../../API';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AuthContext } from '../Auth/AuthContext';
import { UserContext } from '../../Pages/App';
import Next4Medal from "./images/next4_medallian.png"
import Next4Notebook from "./images/next4_notebook.png"
import { Tabs } from '@mantine/core';
import Joyride, { STATUS } from 'react-joyride';
import Next4Career from "./images/career_icon.png"
import Next4Course from "./images/course_icon_up.png"
import { useDisclosure } from '@mantine/hooks';
import { Modal, Collapse, Paper,Button } from '@mantine/core';
import { MediumCareerCarousel, MediumCollegeCarousel, MediumCourseCarousel } from './helpers/LikedComponentCarousel';
import { useNavigate } from 'react-router';
import Sparkles from '../Sparkles/Sparkles';
import Next4MissionControl from "./images/mission_control.png"
import Next4College from "./images/college_icon.png"

const Dashboard = () => {
  const [showTutorial, setShowTutorial] = useState(false);
const { userID, username, setUserID, setUsername } = useContext(UserContext)
const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [careerLikedList, setCareerLikedList] = useState([]);
  const [collegeLikedList, setCollegeLikedList] = useState([]);
  const [courseLikedList, setCourseLikedList] = useState([]);
  const navigate = useNavigate();
  
  const tutorialSteps = [
    {
      target: '.step-1-tut',
      content: "Congratulation on completing the starter tutorial! It's time to do more with MyNext4. See your selected courses here.",
    },
    {
      target: '.step-2-tut',
      content: 'Same goes for colleges.',
    },
    {
      target: '.step-3-tut',
      content: '...and careers. All of your personalized information is put on this page.',
    },
    {
      target: '.step-4-tut',
      content: "Inspect your personal information here, click to turn on and off.",
    },
    {
      target: '.step-5-tut',
      content: "Complete more MyNext4 surveys here. Completing surveys help us write recommendations with higher correlation to you. ",
    },
    {
      target: '.step-6-tut',
      content: "See your awards and achievments here.",
    },
    {
      target: '.step-7-tut',
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
  if (showTutorial && userID) {
      setTutorialComplete();
  };
  }, [userID, showTutorial])

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
    if (userID) {
      checkTutorialCompletion();
    }
  }, [userID])
 

  const handleJoyrideCallback = (data) => {
    const { status } = data;
  
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setShowTutorial(false);
    }
  };
  


  useEffect(() => {
    if (!userID) return;
    const fetchData = async () => {
      init_api();
  
      try {
        const [courseResponse, collegeResponse, careerResponse] = await Promise.all([
          API.get(`/api/users/courselist/${userID}/`),
          API.get(`/api/users/collegelist/${userID}/`),
          API.get(`/api/users/careerlist/${userID}/`),
        ]);
  
        setCourseLikedList(courseResponse.data.liked_list);
        setCollegeLikedList(collegeResponse.data.liked_list);
        setCareerLikedList(careerResponse.data.liked_list);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  fetchData();
   
  }, [userID]);


  function handleSignOut() {
    // Clear user-related state variables
    setUserID(null);
    setUsername(null);
    setIsAuthenticated(false);
    window.location.href = "/web/auth/account";

    // Clear authentication token

  }
  
    // Optionally, clear other user-specific
  
 
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


  // Function to get a slice of the array based on the current index and number of items to display

    const [opened, { toggle }] = useDisclosure(true);
    const [openedAward, { open: openAward, close: closeAward }] = useDisclosure(false);
    const [openedSurvey, { open: openSurvey, close: closeSurvey }] = useDisclosure(false);
    const [openedSetting, { open: openSetting, close: closeSetting }] = useDisclosure(false);
    
    const DashboardMissions = () => {
      const [openedMission, { open: openMission, close: closeMission }] = useDisclosure(false);
      const initialScale = 1;
      const hoverScale = 1.05;
    
      const animationVariants = {
        initial: { scale: initialScale },
        hover: { scale: hoverScale },
      };
    
      return (
        <div>
        <Modal opened={openedMission} onClose={closeMission} title="???">
          Coming soon...
          </Modal>
        <motion.div
          className="dashboard-missions"
          initial="initial"
          whileHover="hover"
          animate="initial"
          onClick={openMission}
          style={{cursor: 'pointer'}}
          variants={animationVariants}
        >
             <h6 className="animated-gradient-text h4Tag" style={{textAlign: 'center', fontWeight: 800, fontSize: '40px', marginLeft: 0, marginTop: 0, marginBottom: 0, fomtFamily: 'Phudu'}}> Challenge </h6>
        </motion.div>
        </div>
      );
    };
  return (
    
    isAuthenticated && userID ?
    



    <div className="dashboard-container" >
    
    <Modal opened={openedAward} onClose={closeAward} title="Completed Quests">
  Coming soon...
</Modal>
<Modal opened={openedSurvey} onClose={closeSurvey} title="Assigned Surveys">
  All complete!
</Modal>
<Modal opened={openedSetting} onClose={closeSetting} title="Settings">
  <h4 style={{textAlign: 'center', marginBottom: 5}}> User {username}. Active session ID {userID}</h4>
  <p style={{textAlign: 'center'}}>MyNext4 LLC ⓒ. Established March 30, 2022. All copyrights reserved. Make your mark with MyNext4.</p>
  <Button
              style={{ width: "150px", height: '50px', backgroundColor: 'red', margin: "30px auto 0 auto" }}
              mt="xl"
              mb="xl"
              className="auth-btn"
              onClick={handleSignOut}
              size="lg"
         
            >
              Log Out
            </Button>
</Modal>
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
    <Paper  shadow='lg' sx={{
          backgroundColor: '#57CC99',

            marginTop: '0px',
            top: 0,
            width: opened ? '100%' : '100%', // Change width based on opened state
            height: opened ? 'inherit' : '150px', // Change height based on opened state
            flexDirection: 'column',
            alignItems: 'center'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '80px' }}>
               <div style={{ width: '80px', cursor: 'pointer', height: '80px', marginTop: 30}}>
                <Sparkles>
             <div className="step-4-tut" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', width: '100%', height: '100%', margin: '5px', backgroundColor: '#38A3A5'}}>
                    <img src={Next4MissionControl} onClick={toggle}  style={{maxWidth: '100%', maxHeight: '100%', borderRadius: '50%', objectFit: 'contain', height: '78px'}}  />
                </div>
                </Sparkles>
                
                </div>
                </div>
                
           


            <Collapse  in={opened}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          
    
    <motion.div className="step-5-tut" 
    animate={{ y: [-20, 0], opacity: [0, 1] }}
    whileHover={{ scale: 1.1 }}
    onClick={openAward}
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

<motion.div className="step-6-tut"
    animate={{ y: [-20, 0], opacity: [0, 1] }}
    whileHover={{ scale: 1.1 }}
    onClick={openSurvey}
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
<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '90px' }}>
  <Paper onClick={openSetting} className="step-7-tut" shadow="xl" style={{ marginTop: 10,padding: '13px', cursor: 'pointer', display: 'flex', justifyContent: 'center' }}>
    <Settings size={36} />
  </Paper>
</div>

            </div>
</Collapse>

        </Paper>
            
      </div>

    <Paper p="md" shadow="lg" className="dashboard-main-area" style={{marginTop: 10}}>
    <div className="shiny-text" style={topDashboardStyle}>{username}</div>
  <div style={{marginTop: 10}}> 
  <Tabs defaultValue="courses">
    <Tabs.List style={{margin: '45px auto 0', display: 'flex', justifyContent: 'center'}}>
      <Tabs.Tab value="courses" className="step-1 step-1-tut"  style={{ color: 'white' }} icon={<Book size="1.6rem" />}><b>Courses</b></Tabs.Tab>
      <Tabs.Tab value="colleges" className="step-2 step-2-tut"  style={{color: 'white'}} icon={<School size="1.6rem" />}><b>Colleges</b></Tabs.Tab>
      <Tabs.Tab value="careers" className="step-3 step-3-tut" style={{color: 'white'}} icon={<ChefHat size="1.6rem" />}><b>Careers</b></Tabs.Tab>

    </Tabs.List>



  <Tabs.Panel value="courses" pt="xs">
  <div className="dashboard-component-container" style={{ position: 'relative' }}>
    <div className="" style={{textAlign: 'left', marginLeft: '70px', fontWeight: 700, fontSize: '24px', color: 'white', marginBottom: 0}}><b>{courseLikedList.length}</b> Total Cards</div>
  <div style={{marginTop: 5}}>
    <MediumCourseCarousel items={courseLikedList} />
    </div>

<div className="search-icon-container" style={{ position: 'absolute', borderRadius: '50%', bottom: '60px', left: '48%', transform: 'translateX(-50%)', width: '75px', height: '75px' }}>

  <div onClick={handleCourseClick} style={{ textAlign: 'center', cursor: 'pointer',  width: '100%',borderRadius: '50%', height: '100%' }}>
   
    <img src={Next4Course} style={{ position: 'absolute', width: '100%', height: 'auto', top: 0, left: 5, bottom: 0, right: 0, border: '1px solid gray', borderRadius: '50%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }} />
    
  </div>
  

  <h5 style={{textAlign: 'center', fontSize: '16px', marginTop: 10, color: 'white'}}> <Sparkles> MyCourses</Sparkles> </h5>

</div>


</div>
  </Tabs.Panel>

  <Tabs.Panel value="colleges" pt="xs">
  <div className="dashboard-component-container" style={{ position: 'relative' }}>
  <div style={{textAlign: 'left', marginLeft: '70px', fontWeight: 700, fontSize: '24px', color: 'white', marginBottom: 0}}><b>{collegeLikedList.length}</b> Total Cards</div>
  <div style={{marginTop: 5}}>
    <MediumCollegeCarousel items={collegeLikedList} />
    </div>
<div className="search-icon-container" style={{ position: 'absolute', borderRadius: '50%', bottom: '60px', left: '48%', transform: 'translateX(-50%)', width: '75px', height: '75px' }}>
  <div onClick={handleCollegeClick} style={{ textAlign: 'center', cursor: 'pointer',  width: '100%',borderRadius: '50%', height: '100%' }}>
    <img src={Next4College} style={{ position: 'absolute', width: '100%', height: 'auto', top: 0, left: 5, bottom: 0, right: 0, border: '1px solid gray', borderRadius: '50%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }} />
  </div>
  <h5 style={{textAlign: 'center', fontSize: '16px', marginTop: 10, color: 'white'}}> <Sparkles>MyColleges</Sparkles> </h5>
</div>
</div>
 </Tabs.Panel>

 <Tabs.Panel value="careers" pt="xs">
  <div className="dashboard-component-container" style={{ position: 'relative' }}>
  <div style={{textAlign: 'left', marginLeft: '70px', fontWeight: 700, fontSize: '24px', color: '#FFF', marginBottom: 0}}><b>{careerLikedList.length}</b> Total Cards</div>
  <div style={{marginTop: 5}}>
    <MediumCareerCarousel items={careerLikedList} />
    </div>
<div className="search-icon-container" style={{ position: 'absolute', borderRadius: '50%', bottom: '60px', left: '48%', transform: 'translateX(-50%)', width: '75px', height: '75px' }}>
  <div onClick={handleCareerClick} style={{ textAlign: 'center', cursor: 'pointer',  width: '100%',borderRadius: '50%', height: '100%' }}>
    <img src={Next4Career} style={{ position: 'absolute', width: '100%', height: 'auto', top: 0, left: 5, bottom: 0, right: 0, border: '1px solid gray', borderRadius: '50%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }} />
  </div>
  <h5 style={{textAlign: 'center', fontSize: '16px', marginTop: 10, color: 'white'}}> <Sparkles>MyCareers</Sparkles> </h5>
</div>
</div>
  
</Tabs.Panel>


    </Tabs>

</div>
</Paper>


    </div>
 
 : 
 <div style={{textAlign: 'center', marginTop: 500, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
 <h1> Your account has been unauthorized. Refresh your browser and sign in again.</h1> </div>


  )
}

export default Dashboard;









