import React, { useState, useEffect, useContext } from 'react';
import { API } from '../API';
import { init_api } from '../API';
import { AuthContext } from '../Components/Auth/AuthContext';
import { UserContext } from '../Pages/App';
import { SurveyContext } from '../SurveyContext';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import styles from "./Surveys.module.css";

function CourseSurveyTest({}) {
    init_api()
    const { isAuthenticated } = useContext(AuthContext)
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

    const fetchSurveyQuestions = async () => {
       ;
        try {
            const promise = API.get(`/api/survey/course/${id}/`);
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
            const response = await API.get(`/api/survey/course/${id + 1}/`);
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
        console.log(data.questionID)
       
        try {
            await API.post('/api/CourseSurveyOneAnswers/', data);
            setAnswer(null);
            setId((prevID) => prevID + 1);
          
            
        } catch (error) {
            console.error(error);
        }
    };

    const handleFinalSubmit = async () => {
        try {
            await API.post(`/mark-completed-course-one/${userID}/`);
            surveyContext.setIsCourseCompleted(true);
            navigate(`/my/survey-starter/${userID}`);
          } catch (error) {
            console.error('Error marking survey as completed:', error);
          }
          surveyContext.setIsCourseCompleted(true);
          navigate(`/my/survey-starter/${userID}`);
        };
       
    


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
             <h1 className={styles.title}>Course Quiz</h1>
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
                 isAuthenticated ?
                 <div style={{ display: 'flex', justifyContent: 'center', marginTop: 200 }}>
                 <button className={styles.finalSubmit} onClick={handleFinalSubmit}>Submit</button>
               </div>
                 : 
                 <div> You are not an authenticated user. </div>
               
         
          
    )
}

export default CourseSurveyTest;



