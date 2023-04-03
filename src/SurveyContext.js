import React, { useState, useContext, useEffect, createContext } from "react";

export const SurveyContext = createContext({});

export const SurveyProvider = ({ children }) => {
  const [surveysCompleted, setSurveysCompleted] = useState(false);
  const [isCourseCompleted, setIsCourseCompleted] = useState(false);
  const [isCollegeCompleted, setIsCollegeCompleted] = useState(false);
  const [isCareerCompleted, setIsCareerCompleted] = useState(false);

  useEffect(() => {
    if (isCourseCompleted && isCollegeCompleted && isCareerCompleted) {
      setSurveysCompleted(true);
    }
  }, [isCourseCompleted, isCollegeCompleted, isCareerCompleted]);

  return (
    <SurveyContext.Provider
      value={{
        surveysCompleted,
        isCourseCompleted,
        setIsCourseCompleted,
        isCollegeCompleted,
        setIsCollegeCompleted,
        isCareerCompleted,
        setIsCareerCompleted,
        surveysCompleted,
        setSurveysCompleted,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
};
