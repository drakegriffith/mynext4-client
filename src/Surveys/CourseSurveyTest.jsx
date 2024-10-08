import React, { useState, useEffect, useContext, useCallback } from 'react';
import { API } from '../API';
import { init_api } from '../API';
import { AuthContext } from '../Components/Auth/AuthContext';
import { UserContext } from '../Pages/App';
import { SurveyContext } from './SurveyContext';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import styles from "./Surveys.module.css";
import { config } from 'react-spring';

function CourseSurveyTest() {
    init_api()
    const { isAuthenticated, token } = useContext(AuthContext)
    const { userID } = useContext(UserContext);
    const navigate = useNavigate();
    const surveyContext = useContext(SurveyContext)
    const [answer, setAnswer] = useState(null);
    const [complete, setComplete] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [submittedAnswer, setSubmittedAnswer] = useState(null);
    const [id, setId] = useState(1);

    const handleChange = (event) => {
        setAnswer(parseInt(event.target.value, 10));
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
    };

    const fetchSurveyQuestions = useCallback(async () => {
        try {
            const promise = API.get(`/survey/course/${id}/`, config);
            promise.then((response) => {
                const res = response.data;
                setQuestions(res);
            }); 
        } catch (error) {
            console.error(error);
        }
    },[id]);


    useEffect(() => {
        setSubmittedAnswer(answer)
    }, [answer])

    const getNextQuestion = useCallback(async () => {
        try {
            await API.get(`/survey/course/${id + 1}/`, config);  
        } catch (error) {
            setComplete(true);
        };
      },[id]);

      useEffect(() => {
        getNextQuestion();
        fetchSurveyQuestions();
      }, [id, getNextQuestion, fetchSurveyQuestions]);
      

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
        console.log(data.questionID)
       
        try {
            await API.post('/CourseSurveyOneAnswers/', data, config);
            setAnswer(null);
            setId((prevID) => prevID + 1);
          
            
        } catch (error) {
            console.error(error);
        }
    };

    const handleFinalSubmit = async () => {
        try {
            await API.post(`/mark-completed-course-one/${userID}/`, config);
            surveyContext.setIsCourseCompleted(true);
            navigate(`/my/survey-starter/${userID}`);
          } catch (error) {
            console.error('Error marking survey as completed:', error);
          }
          surveyContext.setIsCourseCompleted(true);
          navigate(`/my/survey-starter/${userID}`);
        };


      useEffect(() => {
          const checkSurveyCompletion = async () => {
            try {
              const response = await API.get(`/check-course-survey/${userID}/`, config);
              surveyContext.setIsCourseCompleted(response.data.careerCompleted);
      
            } catch (error) {
              console.error('Error checking survey completion:', error);
            }
          };
        
          checkSurveyCompletion();
        }, [userID, surveyContext]);
       
    


      const handleReturnHome = () => {
        navigate('/');
      }
  

    return (
        surveyContext.isCourseCompleted && isAuthenticated ? 
        <div>
            <h4 style={{margin: '100px auto 0 auto', textAlign: 'center'}}>This survey has already been completed.</h4>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 200 }}>
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
             <h1 className="animated-gradient-text" style={{fontSize: '32px', fontWeight: 800, marginBottom: 10}}>Course Quiz</h1>
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
       <label htmlFor="no" className={styles.radioBtnLabel}>False</label>
       <input
         className={styles.radioBtn}
         type="radio"
         name="answer"
         value={1}
         checked={answer === 1}
         onChange={handleChange}
         id="yes"
       />
       <label htmlFor="yes" className={styles.radioBtnLabel}>True</label>
     </label>
     
                 <button className={styles.button} type="submit">
                 Next
                 </button>
             </form>
             </motion.div>
               
               : 
               isAuthenticated && userID ?
               <div style={{ display: 'flex', marginTop: 300, justifyContent: 'center' }}>
               <button className={styles.finalSubmit} onClick={handleFinalSubmit}>Submit</button>
             </div>
               : 
               <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
               <h1> Your account has been unauthorized. Refresh your browser and sign in again.</h1> </div>
             
       
               
         
          
    )
}

export default CourseSurveyTest;



