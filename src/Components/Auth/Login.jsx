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
  init_api();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, setIsAuthenticated, token, setToken } = useContext(AuthContext);
  const { userID, setUserID, setUsername, setDateJoined } = useContext(UserContext);
  const [surveysCompleted, setSurveysCompleted] = useState(false);
  const surveyContext = useContext(SurveyContext)
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [tempUID, setTempUID] = useState("");
  

  function handleRegister() {
    navigate("/web/auth/create")
  }

  const handleNavigation = async (userId, initialSurveysCompleted, config) => {
    try {
      if (initialSurveysCompleted) {
        navigate(`/my/account/${userId}`);
      } else {
        navigate(`/my/survey-starter/${userId}`);
      }
    } catch (error) {
      console.error("Error fetching survey data:", error);
    }
  };

  const loginPressed = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('Calling getNewToken...');
    await getNewToken();
  };

  const getNewToken = async (callback) => {
    try {
      const res = await API.post("/auth/jwt/create", {
        email: email,
        password: password
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      const newToken = res.data.access;
     
      setToken(newToken); // Update token value in state
    
      await getUserData(newToken);
      setLoading(false);
    } catch (error) {
      console.error("Error during token generation:", error);
      setLoading(false); // Set loading to false when an error occurs
      if (error.response && error.response.status === 401) {
        setErrorMessage("Incorrect email or password. Please try again.");
      } else {
        setErrorMessage("An error occurred while logging in. Please try again.");
      }
    };

  };

  const getUserData = async (newToken) => {

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${newToken}`,
        'Accept': 'application/json'
      }
    };
    
    console.log("token passed as " + newToken)
    try {
      const response = await API.get("/auth/users/me/", config);
   
      setUserID(response.data.id);
      setTempUID(response.data.id)
      setUsername(response.data.username);
      setDateJoined(response.data.date_joined);
      let initialSurveysCompleted;
      await API.get(`/check_initial_surveys/${response.data.id}/`, config).then((response) => {
        setSurveysCompleted(response.data.initalSurveys);
        initialSurveysCompleted = response.data.initalSurveys;
      });
      setIsAuthenticated(true);
      setErrorMessage(""); // Clear any previous error message upon successful login
      setLoading(false);
      handleNavigation(response.data.id, initialSurveysCompleted, config);
    } catch (error) {
      console.error("Error during login:", error);
      setLoading(false);
      if (error.response && error.response.status === 400) {
        setErrorMessage("An error occurred while logging in. Please try again.");
        setLoading(false);
      }
    };
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
    <Paper elevation={5} radius={0} p="60px 180px" shadow="xl">
      <h1 className="auth-title">Sign Into MyNext4 </h1>

      <form onSubmit={loginPressed}>
        <TextInput
          label="Email address"
          size="md"
          value={email}
          style={{ width: "80%", margin: "0 auto 0 auto", textAlign: 'center' }}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <PasswordInput
          label="Password"
          mt="md"
          size="md"
          style={{ width: "80%", margin: "0 auto 0 auto", textAlign: 'center' }}
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{marginTop: 0,display: 'flex', justifyContent: 'center'}}>
                    <button className="auth-btn" type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Log In'}
                    </button>
                    </div>
        </div>
      </form>

      <h5 style={{ marginTop: 20, textAlign: 'center' }}> No account created? Make one with us <span onClick={handleRegister} style={{ fontWeight: 800, color: 'purple', marginTop: 10, cursor: 'pointer' }}><i>here</i></span></h5>
      {errorMessage && (
        <div className="error-message">
          <p>{errorMessage}</p>
        </div>
      )}
    </Paper>

  </div>
 
</div>

  );
}

export default Login;