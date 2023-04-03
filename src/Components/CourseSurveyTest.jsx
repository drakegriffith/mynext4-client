import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { API } from '../API';
import { init_api } from '../API';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from "react-router";
import { AuthContext } from './Auth/AuthContext';
import { UserContext } from '../Pages/App';
import { Lock, User } from 'tabler-icons-react';
import { CircleCheck } from 'tabler-icons-react';
import { SurveyContext } from '../SurveyContext';
import { useNavigate } from 'react-router-dom';


function CourseSurveyTest({}) {
    init_api()
    const { auth } = useContext(AuthContext)
    const { userID, setUserID } = useContext(UserContext);
    const navigate = useNavigate();

    const [answer, setAnswer] = useState(null);
    const [complete, setComplete] = useState(false);
    const [preCompleted, setPreCompleted] = useState(false);
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

    console.log(complete)
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

    const handleFinalSubmit = () => {
          API.post(`/mark-completed-course-one/${userID}/`)
          .then(response => {
            console.log(response.data);
            // If the POST request was successful, you can update the state or show a success message here
          })
          .catch(error => {
            console.log(error);
            // If the POST request failed, you can show an error message here
          });
          navigate(`/Dashboard/${userID}`);
      };
  

    return (
            auth && !complete ?
              <div style={{textAlign: 'center', marginTop: '5%'}}>
                <h1>Course Quiz</h1>
                <p style={{color: 'gray', fontSize: '16px'}}><i>Complete all the questions and click submit. </i></p>
                <form onSubmit={handleSubmit} style={{marginTop: '15px' ,width: '35vw', margin: '0 auto 0 auto'}}>
                  <h3 style={{marginBottom: 25}}>{questions.question}</h3>
                  <label style={{display: 'flex', justifyContent: 'center'}} >
                  <input 
                  type="radio"
                  name="answer"
                  value={0}
                  checked={answer === 0}
                  onChange={handleChange}
                  />
                  No
                  <input
                  type="radio"
                  name="answer"
                  value={1}
                  checked={answer === 1}
                  onChange={handleChange}
                  />
                  Yes
                  </label>
                  <button style={{marginTop: 10, padding: '10px 10px'}}type="submit">Submit</button>
                  </form>
                </div>
          
            : 
            auth ?
            <div style={{marginTop: 200}}> 
            <button onClick={handleFinalSubmit}> Submit </button>
            </div>
            :
            <div> You are not an authenticated user. </div>
    
          
    )
}

export default CourseSurveyTest;



