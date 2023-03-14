import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { API } from '../API';
import { init_api } from '../API';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from "react-router";
import AuthContext from "../Pages/LogIn/AuthContext";
import { UserContext } from '../Pages/App';
import { Lock } from 'tabler-icons-react';


function CollegeSurveyTest() {
    init_api()
    const { auth } = useContext(AuthContext)
    const [answer, setAnswer] = useState(null);
    const [complete, setComplete] = useState(false);
    const [preCompleted, setPreCompleted] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [submittedAnswer, setSubmittedAnswer] = useState(null);
    const userID = useContext(UserContext)
    const [id, setId] = useState(1);
  
    const checkCareerCompletion = async (userID) => {
        const promise = API.get(`/check-college-survey/${userID}/`)
            promise.then((response) => {
                const res = response.data;
                console.log(res)
                if (res.collegeCompleted) {
                   setPreCompleted(true)
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
            answer: submittedAnswer
        };
        
        try {
            await API.post('/api/CollegeSurveyOneAnswers/', data);
            setAnswer(null);
            setId((prevID) => prevID + 1);
          
            
        } catch (error) {
            console.error(error);
        }
    };

    const handleFinalSubmit = () => {
          API.post(`/mark-completed-college-one/${userID}/`)
          .then(response => {
            console.log(response.data);
            // If the POST request was successful, you can update the state or show a success message here
          })
          .catch(error => {
            console.log(error);
            // If the POST request failed, you can show an error message here
          });
      };
  

    return (
            preCompleted ? 
            <div style={{textAlign: 'center', marginTop:'5%'}}>
                <h3 style={{marginBottom: 10}}> You have already completed this quiz. </h3>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Lock size={32} />
                <a style={{marginTop: 10}}href="/dashboard"> Redirect to the dashboard here. </a>
                </div>
                </div>
                :
            auth  && !complete ?
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
            :
            !auth ? 
            <div>
                <p> Restricted Content</p>
                </div>
            :
            <button onClick={handleFinalSubmit}> Submit </button>
             
          
    
          
    )
}

export default CollegeSurveyTest;




  
  
  
  
  
  
  
  
  
  