import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
} from "@mantine/core";
import "./Auth.css";
import React, { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import { init_api, API } from "../../API";
import { AuthContext } from "./AuthContext";
import { UserContext } from "../../Pages/App";
import { SurveyContext } from "../../Surveys/SurveyContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, setIsAuthenticated, token, setToken } = useContext(AuthContext);
  const { userID, setUserID, setUsername, setDateJoined } = useContext(UserContext);
  const [surveysCompleted, setSurveysCompleted] = useState(false);
  const surveyContext = useContext(SurveyContext)
  const [errorMessage, setErrorMessage] = useState("");

  function handleRegister() {
    navigate("/web/auth/create")
  }

  const loginPressed = async () => {
    try {
      init_api();
      const res = await API.post("/auth/jwt/create", {
        email: email,
        password: password
      });
  
      const token = res.data.access;
      init_api(token);
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${res.data.access}`,
          'Accept': 'application/json'
        }
      };
  
      await API.get("/auth/users/me/", config).then(async (response) => {
        setUserID(response.data.id);
        setUsername(response.data.username);
        setDateJoined(response.data.date_joined);
  
        await API.get(`/check_initial_surveys/${response.data.id}/`).then((response) => {
          setSurveysCompleted(response.data.initalSurveys);
        });
      });
  
      setToken(token);
      setIsAuthenticated(true);
      setErrorMessage(""); // Clear any previous error message upon successful login
    } catch (error) {
      console.error("Error during login:", error);
      if (error.response && error.response.status === 400) {
        setErrorMessage("Invalid email or password.");
      } else {
        setErrorMessage("An error occurred while logging in. Please try again.");
      }
    }
  };
  

  useEffect(() => {
    init_api();
    const checkCollegeCompletion = async () => {
      try {
        const response = await API.get(`/check-college-survey/${userID}/`);
        surveyContext.setIsCollegeCompleted(response.data.collegeCompleted);
      } catch (error) {
        console.error('Error checking survey completion:', error);
      }
    };

    const checkCourseCompletion = async () => {
      try {
        const response = await API.get(`/check-course-survey/${userID}/`);
        surveyContext.setIsCourseCompleted(response.data.courseCompleted);
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

    if (userID) {
      checkCareerCompletion();
      checkCollegeCompletion();
      checkCourseCompletion();
    }

  }, [userID]);
  
  useEffect(() => {
    if (surveyContext.isCareerCompleted && surveyContext.isCollegeCompleted && surveyContext.isCourseCompleted) {
      surveyContext.setSurveysCompleted(true);
    }
  }, [userID])

  return (
    <div className="login-container">
      <div style={{ margin: 0 }}>
        <Paper  elevation={5} radius={0} p="60px 180px" shadow="xl">
        <h1 className="auth-title">Sign Into MyNext4 </h1>

          <TextInput
            label="Email address"
            size="md"
            value={email}
            style={{ width: "80%", margin: "0 auto 0 auto", textAlign: 'center' }}
            onChange={(event) => {
              setEmail(event.currentTarget.value);
            }}
          />
          <PasswordInput
            label="Password"
            mt="md"
            size="md"
            style={{ width: "80%", margin: "0 auto 0 auto" , textAlign: 'center' }}
            value={password}
            onChange={(event) => {
              setPassword(event.currentTarget.value);
            }}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              style={{ width: "250px", backgroundColor: '#57CC99', margin: "30px auto 0 auto" }}
              mt="xl"
              mb="xl"
              className="auth-btn"
              
              size="lg"
              onClick={loginPressed}
            >
              Log In
            </Button>
          </div>
          <h5 style={{marginTop: 20,textAlign: 'center'}}> No account created? Make one with us <span onClick={handleRegister} style={{fontWeight: 800, color:'purple', marginTop: 10, cursor: 'pointer'}}><i>here</i></span></h5>
          {errorMessage && (
        <div className="error-message">
          <p>{errorMessage}</p>
        </div>)}
        </Paper>
        
      </div>
      <div className="root-login">
        {isAuthenticated && surveysCompleted && <Navigate to={`/my/account/${userID}`} />}
        {isAuthenticated && !surveysCompleted && <Navigate to={`/my/survey-starter/${userID}`} />}
      </div>
    </div>
  );
}

export default Login;