import "../Styles/App.css";
import React, { useEffect, useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../Components/Landing/Landing";

import Privacy from "../Components/Privacy/Privacy";
import Dashboard from "../Components/Dashboard/Dashboard"

import About from "../Components/About/About";
import MyCourses from "../Components/MyCourses/MyCourses"
import { Provider } from "react-redux";
import store from "../redux/store";
import Test from "./Test";
import CollegeCard from "../Components/CollegeCard"
import Login from "./LogIn/Login";
import Careers from "./Careers/Careers";
import MyColleges from "../Components/MyColleges/MyCollegeContainer"
import CourseSurveyTest from "../Components/CourseSurveyTest";
import CollegeSurveyTest from "../Components/CollegeSurveyTest";
import ExploreColleges from "./ExploreColleges/ExploreColleges";
import Courses from "./Courses/Courses";
import Demo from "../Components/Demo/Demo";
import ExploreCourses from "./ExploreCourses/ExploreCourses";
import ExploreCareers from "./ExploreCareers/ExploreCareers";
import CareerSurveyTest from "../Components/CareerSurveyTest";
import CareerDataPage from "../Components/MyCareers/MyCareers";
import AuthContext from "./LogIn/AuthContext";
import TopNav from "../Components/Nav/components/TopNav";
import { SurveyContext, SurveyProvider } from "../SurveyContext";
/*
Testing push request
*/
export const UserContext = createContext(null);

function App() {
  const [auth, setAuth] = useState(false);
  const [userID, setUserID] = useState(null);
  
    return (
   
      <UserContext.Provider value={userID}>
      <AuthContext.Provider value= {{auth, setAuth }}>
       
      <Provider store={store}>
      <TopNav userID={userID} />
        <React.Fragment>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/About" element={<About />} />
            <Route path="/MyCourses" element={<MyCourses />} />
            
            <Route path="/Colleges/:id" element={<CollegeCard />} />
  
            <Route path="/Privacy" element={<Privacy />} />
            <Route path={`/Dashboard`} element={<Dashboard/>} />
            <Route path="/MyCareers" element={<CareerDataPage  />} />
            <Route path="/MyColleges" element={<MyColleges  />} />
            <Route path='/Demo' element={<Demo /> } />
            <Route path='/CareerSurveyOne/:userID' element={<CareerSurveyTest  />} />
            <Route path='/CourseSurveyOne/:userID' element={<CourseSurveyTest   />} />
            <Route path='/CollegeSurveyOne/:userID' element={<CollegeSurveyTest  />} />
  
      
            <Route path="/test" element={<Test />} />
            <Route path = "/SignIn" element={<Login setUserID={setUserID} />} />
            <Route path = "/Careers/:id" element = {<Careers />} />
            <Route path = "/ExploreColleges" element = {<ExploreColleges />} />
            <Route path = "/Courses/:id" element = {<Courses />} />
            <Route path = "/ExploreCourses" element = {<ExploreCourses />} />
            <Route path = "/ExploreCareers" element = {<ExploreCareers />} />
            <Route path = "/MyColleges/Colleges/:id" element = {<CollegeCard />} />
          </Routes>
        </React.Fragment>
      </Provider>
      
      </AuthContext.Provider>
      </UserContext.Provider>


    );
  }


export default App;
