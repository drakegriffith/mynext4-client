import React, { useContext, useEffect, useState } from "react";
import { SurveyContext } from "../../SurveyContext";
import { Check } from "tabler-icons-react";
import { UserContext } from "../../Pages/App";
import { useNavigate } from "react-router";
import "./SurveySpecifications.css"
import WarpButton from "./WarpButton";
import { API, init_api } from "../../API";
import Joyride, { STATUS } from 'react-joyride';
import { CircleX } from "tabler-icons-react";
function SurveySpecifications() {
  const [showTutorial, setShowTutorial] = useState(true);
  const [showTutorialAfter, setTutorialAfter] = useState(true);
  const surveyContext = useContext(SurveyContext);
  const { userID } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    init_api();
    const checkCollegeCompletion = async () => {
      try {
        const response = await API.get(`/check-college-survey/${userID}/`);
        console.log("COLLEGE" + response.data.collegeCompleted)
        surveyContext.setIsCollegeCompleted(response.data.collegeCompleted);
      } catch (error) {
        console.error('Error checking survey completion:', error);
      }
    };

    const checkCourseCompletion = async () => {
      try {
        const response = await API.get(`/check-course-survey/${userID}/`);
        console.log(response.data)
        surveyContext.setIsCourseCompleted(response.data.courseCompleted);
        console.log(surveyContext.isCourseCompleted)
      } catch (error) {
        console.error('Error checking survey completion:', error);
      }
    };
  
    const checkCareerCompletion = async () => {
      try {
        const response = await API.get(`/check-career-survey/${userID}/`);
        surveyContext.setIsCareerCompleted(response.data.careerCompleted);
      } catch (error) {
        console.error('Error checking survey completion:', error);
      }
    };

    checkCareerCompletion();
    checkCollegeCompletion();
    checkCourseCompletion();

  }, [userID]);
  
  useEffect(() => {
    if (surveyContext.isCareerCompleted && surveyContext.isCollegeCompleted && surveyContext.isCourseCompleted) {
      surveyContext.setSurveysCompleted(true);
    }
  }, [])

  const buttonStyles = {
    padding: "15px 20px",
    borderRadius: "5px",
    backgroundColor: "#22577A",
    color: "white",
    border: "none",
    fontSize: "16px",
    marginTop: '5px',
    cursor: "pointer",
    textDecoration: "none",
    textAlign: "center",
    display: "inline-block",
    marginBottom: "10px",
  };

  const titleStyles = {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  };
  
  function handleSurveyClick(path) {
    navigate(path);
  }

  const surveys = [
    { id: 1, name: "Courses Questions", path: `/my/surveys/courses/1/${userID}` },
    { id: 2, name: "College Questions", path: `/my/surveys/colleges/1/${userID}` },
    { id: 3, name: "Career Questions", path: `/my/surveys/careers/1/${userID}` },
  ];

 
  const handleJoyrideCallback = (data) => {
    const { status } = data;
  
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setShowTutorial(false);
    }
  };
  
  const handleJoyrideCallbackAfter = (data) => {
    const { status } = data;
  
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setShowTutorial(false);
    }
  };
  

  const tutorialStepsAfter = [
    {
      target: '.step-2',
      content: "Congratulations on completing your survey's. Your account is now accessible upon click.",
    },
  
  
    // ...
  ];
  const tutorialSteps = [
    {
      target: '.step-1',
      content: "Welcome to MyNext4. Activate your account after completing three composite survey's on courses, colleges, and careers.",
    },
  
  
    // ...
  ];

  
  return (

 

    surveyContext.surveysCompleted ? 
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 200}}>
          <Joyride
  steps={tutorialStepsAfter}
  run={showTutorialAfter}
  callback={handleJoyrideCallbackAfter}
  continuous
  scrollToFirstStep
  showProgress
  showSkipButton
/>
          <WarpButton className="step-2" />
        </div>
        :
  
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

<Joyride
  steps={tutorialSteps}
  run={showTutorial}
  callback={handleJoyrideCallback}
  continuous
  scrollToFirstStep
  showProgress
  showSkipButton
/>
      <h1 className="shiny-text step-1" style={{ marginTop: "100px", marginBottom: "10px", fontSize: '36px' }}><b>Make MyNext4 Yours</b></h1>
      <h2 style={{ marginBottom: "15px" }}>{`${(surveyContext.isCourseCompleted + surveyContext.isCollegeCompleted + surveyContext.isCareerCompleted)}/3 surveys complete`}</h2>

      <div style={{ display: "flex", flexDirection: "row" }}>
        {surveys.map((survey) => (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              width: "33%",
              height: "280px",
              backgroundColor: "#fff",
              borderRadius: "5px",
              margin: "20px",
              padding: "20px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
            key={survey.id}
          >
            {survey.id === 1 && (
              <div>
                {surveyContext.isCourseCompleted ? (
                  <Check size={64} color="green" />
                ) : (
                  <div  style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <CircleX style={{ marginBottom: 10 }} size={64} color="red" />
                    <button
                    style={buttonStyles}
                    onClick={() => handleSurveyClick(survey.path)}
                  >
                    Complete {survey.name}
                  </button>
                  </div>
                )}
              </div>
            )}

            {survey.id === 2 && (
              <div>
                {surveyContext.isCollegeCompleted ? (
                  <Check size={64} color="green" />
                ) : (
                  <div  style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <CircleX style={{ marginBottom: 10 }} size={64} color="red" />
                    <button
                    style={buttonStyles}
                    onClick={() => handleSurveyClick(survey.path)}
                  >
                    Complete {survey.name}
                  </button>
                  </div>
                )}
              </div>
            )}
  

            {survey.id === 3 && (
              <div>
                {surveyContext.isCareerCompleted ? (
                  <Check size={64} color="green" />
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <CircleX  style={{ marginBottom: 10 }} size={64} color="red" />
                    <button
                    style={buttonStyles}
                    onClick={() => handleSurveyClick(survey.path)}
                  >
                    Complete {survey.name}
                  </button>
                    </div>
                )}
          </div>
            )}
            </div>
        ))}
            </div>
            </div>
   
  )
                }
                


  export default SurveySpecifications;
