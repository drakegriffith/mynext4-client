import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { API } from '../API';
import { init_api } from '../API';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from "react-router";
import AuthContext from "../Pages/LogIn/AuthContext";
import { UserContext } from '../Pages/App';
import { Lock, User } from 'tabler-icons-react';
import { CircleCheck } from 'tabler-icons-react';
import { SurveyContext } from '../SurveyContext';
function CareerSurveyTest({ idSurvey, username,showFullSurvey}) {
    const { auth } = useContext(AuthContext)
    const [answer, setAnswer] = useState(null);
    const [complete, setComplete] = useState(false);
   
    const [questions, setQuestions] = useState([]);
    const [submittedAnswer, setSubmittedAnswer] = useState(null);
    const userID = useParams().userID
    const [id, setId] = useState(1);
    
    const { completedSurveys, completeSurvey } = useContext(SurveyContext);

  // Check if the current survey has been completed
    const isCompleted = completedSurveys[idSurvey];
    
  
        
    const checkCareerCompletion = async (userID) => {
        const promise = API.get(`/check-career-survey/${userID}/`)
            promise.then((response) => {
                const res = response.data;
                console.log(res)
                if (res.careerCompleted) {
                   setComplete(true)
                }
            });
           
          
        }
       
    
    useEffect(() => {
        checkCareerCompletion(userID);
        
    }, [userID])
    
   
    
    const handleChange = (event) => {
        setAnswer(parseInt(event.target.value, 10));
    }

    const fetchSurveyQuestions = async () => {
       ;
        try {
            const promise = API.get(`/api/survey/${id}/`);
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
            const response = await API.get(`/api/survey/${id + 1}/`);
            const data = response.data;
        } catch (error) {
            setComplete(true)
            
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
            user_id: username,
        };
        
        try {
            await API.post(`/api/CareerSurveyOneAnswers/${userID}`, data);
            setAnswer(null);
            setId((prevID) => prevID + 1);
          
            
        } catch (error) {
            console.error(error);
        }
    };

    function handleTestTake() {
        window.location.href = `/CareerSurveyOne/${userID}/`;

    }

    const handleFinalSubmit = () => {
          API.post(`/mark-completed-career-one/${userID}/`)
          .then(response => {
            console.log(response.data);
            // If the POST request was successful, you can update the state or show a success message here
          })
          .catch(error => {
            console.log(error);
            // If the POST request failed, you can show an error message here
          });
          completeSurvey(id);
      
      };
  

    return (
        showFullSurvey ?
        isCompleted ? 
        <div style={{textAlign: 'center', marginTop:'5%'}}>
            <CircleCheck size={32} color="green"/>
         
          
            </div>
            :
        !complete ?
          <div style={{textAlign: 'center', marginTop: '5%'}}>
            <h1>Career Quiz</h1>
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
      
        : (
        <button onClick={handleFinalSubmit}> Submit </button>
         ) :
        <div style={{width: '90%', height: '80px', margin: '5px', backgroundColor: 'white', borderRadius: '3px'}}>
            <h3> Career Survey Test</h3>
            {isCompleted ? 
                <p> Complete </p>
            : 
                <div>
                <p> Uncomplete </p>
                <button onClick={handleTestTake} > Take the Test</button>
                </div>
        }
        </div>
      
    )
}

export default CareerSurveyTest;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  

  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  