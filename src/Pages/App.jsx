import "../Styles/App.css";
import React, { useEffect, useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../Components/Landing/Landing";
import Dashboard from "../Components/Dashboard/Dashboard"
import Colleges from "./Colleges/Colleges";
import About from "../Components/About/About";
import MyCourses from "../Components/MyComponents/MyCourses/MyCourseContainer"
import { Provider } from "react-redux";
import store from "../redux/store";
import Test from "./Test";
import CollegeCard from "../Components/CollegeCard"
import Login from "../Components/Auth/Login"
import Careers from "./Careers/Careers";
import MyCareers from "../Components/MyComponents/MyCareers/MyCareerContainer";
import MyColleges from "../Components/MyComponents/MyColleges/MyCollegeContainer"
import CourseSurveyTest from "../Components/CourseSurveyTest";
import CollegeSurveyTest from "../Components/CollegeSurveyTest";
import ExploreColleges from "./ExploreColleges/ExploreColleges";
import Courses from "./Courses/Courses";
import Demo from "../Components/Demo/Demo";
import CareerSurveyTest from "../Components/CareerSurveyTest";
import Register from "../Components/Auth/Register";
import { AuthProvider } from "../Components/Auth/AuthContext";
import Navbar from "../Components/Nav/Next4Nav";
import { SurveyProvider } from "../SurveyContext";
import AccountActivation from "../AccountActivation";
import SurveySpecifications from "../Components/SurveySpecifications/SurveySpecifications";
import Next4Nav from "../Components/Nav/Next4Nav";
/*
Testing push request
*/
export const UserContext = createContext(null);

function App() {
  const [userID, setUserID] = useState(null);

 
  
    return (
      
      <UserContext.Provider value={{userID, setUserID }}>
      <AuthProvider>
        <SurveyProvider>
       
      <Provider store={store}>

  
  <Next4Nav userID={userID} />
        <React.Fragment>
          <Routes>
          <Route path="/activate/:uid/:token" element={<AccountActivation />} />
            <Route path="/" element={<Landing />} />
            <Route path="/About" element={<About />} />
            <Route path="/MyCourses/:userID" element={<MyCourses />} />
            
            <Route path="/Colleges/:id" element={<Colleges />} />
  
  
            <Route path='/next4/home/' element={<Dashboard/>} />
            <Route path="/MyCareers/:userID" element={<MyCareers  />} />
            <Route path="/MyColleges/:userID" element={<MyColleges  />} />
            <Route path='/Demo' element={<Demo /> } />
            <Route path='/CareerSurveyOne/:userID' element={<CareerSurveyTest  />} />
            <Route path='/CourseSurveyOne/:userID' element={<CourseSurveyTest   />} />
            <Route path='/CollegeSurveyOne/:userID' element={<CollegeSurveyTest  />} />
  
            <Route path="web/auth/create" element={<Register />} />
            <Route path="/test" element={<Test />} />
            <Route path = "web/auth/account" element={<Login />} />
            <Route path = "/Careers/:id" element = {<Careers />} />

            <Route path = "/Courses/:id" element = {<Courses />} />
            <Route path = "/MyColleges/Colleges/:id" element = {<CollegeCard />} />
            <Route path='/next4/survey-starter/:uid' element={<SurveySpecifications  />} />
          </Routes>
        </React.Fragment>
    
  
      </Provider>
      </SurveyProvider>
      
      </AuthProvider>
      </UserContext.Provider>


    );
  }


export default App;
