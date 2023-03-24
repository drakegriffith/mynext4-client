import React, { createContext, useState } from 'react';

export const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
  const [completedSurveys, setCompletedSurveys] = useState(0);

  const completeSurvey = () => {
    setCompletedSurveys(completedSurveys + 1);
  };

  return (
    <SurveyContext.Provider value={{ completedSurveys, completeSurvey }}>
      {children}
    </SurveyContext.Provider>
  );
};
