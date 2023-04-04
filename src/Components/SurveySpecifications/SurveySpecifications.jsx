import React, { useContext, useEffect } from "react";
import { SurveyContext } from "../../SurveyContext";
import { Check } from "tabler-icons-react";
import { UserContext } from "../../Pages/App";
import { useNavigate } from "react-router";
import "./SurveySpecifications.css"
import WarpButton from "./WarpButton";
import { API, init_api } from "../../API";

function SurveySpecifications() {
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
    padding: "10px 20px",
    borderRadius: "5px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    fontSize: "16px",
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
    console.log("WOR")
    navigate(path);
  }

  const surveys = [
    { id: 1, name: "Courses Questions", path: `/my/surveys/courses/1/${userID}` },
    { id: 2, name: "College Questions", path: `/my/surveys/colleges/1/${userID}` },
    { id: 3, name: "Career Questions", path: `/my/surveys/careers/1/${userID}` },
  ];

  function handleDashboardClick() {
    document.addEventListener('DOMContentLoaded', function() {
      var warpButton = document.getElementById('warp-button');
  
      warpButton.addEventListener('click', function(event) {
        event.preventDefault();
  
        // Add the 'warp' class to trigger the animation
        warpButton.classList.add('warp');
  
        // Simulate resource compilation and navigation to the dashboard
        setTimeout(function() {
          window.location.href = '/dashboard'; // Replace with the URL of your dashboard
        }, 5000); // 5 seconds delay
      });
    });
  }

  
  return (
    surveyContext.surveysCompleted ? 
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 200}}>
          <WarpButton />
        </div>
        :
  
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ marginTop: "20px", marginBottom: "10px" }}>Survey Specifications</h1>
      <h3 style={{ marginBottom: "20px" }}>{`${(surveyContext.isCourseCompleted + surveyContext.isCollegeCompleted + surveyContext.isCareerCompleted)}/3 surveys complete`}</h3>

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
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Check style={{ marginBottom: 10 }} size={48} color="red" />
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
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Check style={{ marginBottom: 10 }} size={32} color="red" />
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
                    <Check style={{ marginBottom: 10 }} size={48} color="red" />
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
