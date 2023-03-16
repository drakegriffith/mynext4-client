import { API, init_api } from './API';
import React, { useContext, useEffect, useState } from 'react';
import CareerSurveyTest from './Components/CareerSurveyTest';
import CollegeSurveyTest from './Components/CollegeSurveyTest';
import CourseSurveyTest from './Components/CourseSurveyTest';
import AuthContext from './Pages/LogIn/AuthContext';
import { UserContext } from './Pages/App';
import { SurveyProvider } from './SurveyContext';


const SeeSurveys = () => {
  const {username, userID} = useContext(UserContext)
  return (
    <SurveyProvider>
      <CareerSurveyTest idSurvey="1" userID={userID} username={username}  />
      <CollegeSurveyTest idSurvey="2" userID={userID} username={username}/>
      <CourseSurveyTest idSurvey="3" userID={userID} username={username}/>
    </SurveyProvider>
  );
};

export default SeeSurveys;