
import React, { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../Components/Landing/Landing";
import Dashboard from "../Components/Dashboard/Dashboard";
import Colleges from "./Explore/Colleges/Colleges"
import MyCourses from "./User/MyCourseContainer"
import Login from "../Components/Auth/Login"
import Careers from "./Explore/Careers/Careers";
import MyCareers from "./User/MyCareerContainer"
import MyColleges from "./User/MyCollegeContainer"
import CourseSurveyTest from "../Surveys/CourseSurveyTest"
import CollegeSurveyTest from "../Surveys/CollegeSurveyTest";
import Courses from "./Explore/Courses/Courses";
import CareerSurveyTest from "../Surveys/CareerSurveyTest"
import Register from "../Components/Auth/Register"
import { AuthProvider } from "../Components/Auth/AuthContext";
import { SurveyProvider } from "../Surveys/SurveyContext";
import AccountActivation from "../AccountActivation"
import SurveySpecifications from "../Components/SurveySpecifications/SurveySpecifications"
import Next4Nav from "../Components/Nav/Next4Nav"
import InitialAnimation from "../InitialAnimation"
import "../global.css"
/*
Testing push request
*/
export const UserContext = createContext(null);

function App() {
  const [userID, setUserID] = useState(null);
  const [username, setUsername] = useState('');
  const [dateJoined, setDateJoined] = useState('');

  const [showAnimation, setShowAnimation] = useState(true);

  const handleAnimationEnd = () => {
    setShowAnimation(false);
  };


 
  
    return (
      
      <UserContext.Provider value={{userID, setUserID, username, setUsername, dateJoined, setDateJoined }}>
      <AuthProvider>
        <SurveyProvider>
        {showAnimation && <InitialAnimation onAnimationEnd={handleAnimationEnd} />}
    

  
  <Next4Nav userID={userID} />
  
        <React.Fragment>
          <Routes>
          <Route path="/activate/:uid/:token" element={<AccountActivation />} />
            <Route path="/" element={<Landing />} />
         
            <Route path="/my/courses/:uid" element={<MyCourses />} />       
  
  
            <Route path='/my/account/:uid' element={<Dashboard/>} />
            <Route path="/my/careers/:uid" element={<MyCareers  />} />
            <Route path="/my/colleges/:uid" element={<MyColleges  />} />
           
            <Route path='/my/surveys/careers/1/:uid' element={<CareerSurveyTest  />} />
            <Route path='/my/surveys/courses/1/:uid' element={<CourseSurveyTest   />} />
            <Route path='/my/surveys/colleges/1/:uid' element={<CollegeSurveyTest  />} />
  
            <Route path="web/auth/create" element={<Register />} />
         
            <Route path = "web/auth/account" element={<Login />} />
            <Route path = "/explore/careers/:id" element = {<Careers />} />
            <Route path="/explore/colleges/:id" element={<Colleges />} />
            <Route path = "/explore/courses/:id" element = {<Courses />} />
            <Route path='/my/survey-starter/:uid' element={<SurveySpecifications  />} />
          </Routes>
        </React.Fragment>
    
      </SurveyProvider>
      
      </AuthProvider>
      </UserContext.Provider>


    );
  }


export default App;
