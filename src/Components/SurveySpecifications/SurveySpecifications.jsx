import React, { useContext } from "react";
import { SurveyContext } from "../../SurveyContext";
import { Check } from "tabler-icons-react";
import { UserContext } from "../../Pages/App";
function SurveySpecifications({ handleSurveyClick }) {
  const { isCourseCompleted, isCollegeCompleted, isCareerCompleted, surveysCompleted } = useContext(SurveyContext);
  const { userID } = useContext(UserContext)
  // Define styles for the container
  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    margin: "20px",
  };

  // Define styles for the title
  const titleStyles = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const surveys = [
    { id: 1, name: "Courses Questions", href: `/CourseSurveyOne/${userID}` },
    { id: 2, name: "College Questions", href: `/CollegeSurveyOne/${userID}` },
    { id: 3, name: "Career Questions", href: `/CareerSurveyOne/${userID}` },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ marginTop: "20px", marginBottom: "10px" }}>Survey Specifications</h1>
      <h3 style={{ marginBottom: "20px" }}>{`${(isCourseCompleted + isCollegeCompleted + isCareerCompleted)}/3 surveys complete`}</h3>

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
                {isCourseCompleted ? (
                  <Check size={64} color="green" />
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Check style={{ marginBottom: 10 }} size={48} color="red" />
                    <button onClick={() => handleSurveyClick("course")}>Complete {survey.name}</button>
                  </div>
                )}
              </div>
            )}

            {survey.id === 2 && (
              <div>
                {isCollegeCompleted ? (
                  <Check size={64} color="green" />
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Check style={{ marginBottom: 10 }} size={32} color="red" />
                    <button onClick={() => handleSurveyClick("college")}>Complete {survey.name}</button>
                  </div>
                )}
              </div>
            )}
  

            {survey.id === 3 && (
              <div>
                {isCareerCompleted ? (
                  <Check size={64} color="green" />
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Check style={{ marginBottom: 10 }} size={48} color="red" />
                    <button onClick={() => handleSurveyClick("career")}>Complete {survey.name}</button>
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
