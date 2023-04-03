import { API, init_api } from './API';
import React, { useContext, useEffect, useState } from 'react';
import CareerSurveyTest from './Components/CareerSurveyTest';
import CollegeSurveyTest from './Components/CollegeSurveyTest';
import CourseSurveyTest from './Components/CourseSurveyTest';
import { AuthContext } from './Components/Auth/AuthContext';
import { UserContext } from './Pages/App';
import { SurveyProvider } from './SurveyContext';


const SeeSurveys = () => {
  const {userID} = useContext(UserContext)
  return (
    <SurveyProvider>
      <CareerSurveyTest idSurvey="1" userID={userID} />
      <CollegeSurveyTest idSurvey="2" userID={userID} />
      <CourseSurveyTest idSurvey="3" userID={userID} />
    </SurveyProvider>
  );
};

export default SeeSurveys;