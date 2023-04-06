import React, { useState, useEffect, useContext } from 'react';
import { API, init_api } from '../API';
import { AuthContext } from '../Components/Auth/AuthContext';
import { UserContext } from '../Pages/App';
import { useNavigate } from 'react-router-dom';
import styles from "./Surveys.module.css";
import { motion } from "framer-motion";
import { SurveyContext } from '../SurveyContext';

function CollegeSurveyTest({ }) {
    init_api();
    const { userID } = useContext(UserContext)
    const { isAuthenticated } = useContext(AuthContext)
    const [answer, setAnswer] = useState(null);
    const [complete, setComplete] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [submittedAnswer, setSubmittedAnswer] = useState(null);
    const surveyContext = useContext(SurveyContext);
    const navigate = useNavigate();
    const [id, setId] = useState(1);

    useEffect(() => {
        const checkSurveyCompletion = async () => {
          try {
            const response = await API.get(`/check-college-survey/${userID}/`);
            surveyContext.setIsCollegeCompleted(response.data.collegeCompleted);
    
          } catch (error) {
            console.error('Error checking survey completion:', error);
          }
        };
      
        checkSurveyCompletion();
      }, [userID]);

    const handleChange = (event) => {
        setAnswer(parseInt(event.target.value, 10));
    }

    const fetchSurveyQuestions = async () => {
       ;
        try {
            const promise = API.get(`/api/survey/college/${id}/`);
            promise.then((response) => {
                const res = response.data;
                console.log(res)
                setQuestions(res);
            });
            
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        setSubmittedAnswer(answer)
       
    }, [answer])

    const getNextQuestion = async () => {
        try {
            const response = await API.get(`/api/survey/college/${id + 1}/`);
            const data = response.data;
        } catch (error) {
            setComplete(true);
        }
        
      }
    useEffect(() => {
        getNextQuestion();
        fetchSurveyQuestions()
        },[id]);
   


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (answer === null) {
            return;
        }
        const data = {
            questionID: questions.question,
            userID: userID,
            answer: submittedAnswer,
        };
        
        try {
            await API.post('/api/CollegeSurveyOneAnswers/', data);
            setAnswer(null);
            setId((prevID) => prevID + 1);
          
            
        } catch (error) {
            console.error(error);
        }
    };

    const handleFinalSubmit = async () => {
        try {
          await API.post(`/mark-completed-college-one/${userID}/`);
          surveyContext.setIsCollegeCompleted(true);
          navigate(`/my/survey-starter/${userID}`);
        } catch (error) {
          console.error('Error marking survey as completed:', error);
        }
      };

      const handleReturnHome = () => {
        navigate('/');
      }
  

    return (
        surveyContext.isCollegeCompleted && isAuthenticated ? 
        <div>
            <h2 style={{margin: '100px auto 0 auto', textAlign: 'center'}}>This survey has already been completed.</h2>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
            <button className={styles.finalSubmit} onClick={handleReturnHome}>Return Home</button>
          </div>
            </div>
            :
       isAuthenticated && !complete ?
        <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        >
        <h1 className="animated-gradient-text" style={{fontSize: '32px', fontWeight: 800, marginBottom: 10}}>College Quiz</h1>
        <p className={styles.subtitle}>
            <i>Complete all the questions and click submit. </i>
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
        <motion.h3
    className={styles.question}
    key={questions.question}
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {questions.question}
  </motion.h3>
            <label className={styles.radioBtnContainer}>
  <input
    className={styles.radioBtn}
    type="radio"
    name="answer"
    value={0}
    checked={answer === 0}
    onChange={handleChange}
    id="no"
  />
  <label htmlFor="no" className={styles.radioBtnLabel}>No</label>
  <input
    className={styles.radioBtn}
    type="radio"
    name="answer"
    value={1}
    checked={answer === 1}
    onChange={handleChange}
    id="yes"
  />
  <label htmlFor="yes" className={styles.radioBtnLabel}>Yes</label>
</label>

            <button className={styles.button} type="submit">
            Submit
            </button>
        </form>
        </motion.div>
          
          : 
          isAuthenticated && userID ?
          <div style={{ display: 'flex', marginTop: 300, justifyContent: 'center', marginTop: 200 }}>
          <button className={styles.finalSubmit} onClick={handleFinalSubmit}>Submit</button>
        </div>
          : 
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1> Your account has been unauthorized. Refresh your browser and sign in again.</h1> </div>
        
          
    )
}

export default CollegeSurveyTest;







  
  
  
  
  
  
  
  
  
  