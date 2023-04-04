import React, { useState, useContext, useEffect } from "react"
import { useDisclosure } from '@mantine/hooks';
import { Modal, Collapse, Paper } from '@mantine/core';
import { Icon, Book2, Backpack, Ballpen, Checklist, Check, Medal, Settings, CircleCheck } from "tabler-icons-react";
import SeeSurveys from "../../SeeSurveys";
import { init_api, API } from "../../API";
import { SurveyContext } from "../../SurveyContext";
import { UserContext } from "../../Pages/App";
import { useNavigate } from 'react-router-dom';

const artTypes = [
    {
        name: 'Book',
        icon: 'Book2',

    },
    {
        name: 'Backpack',
        icon: 'Backpack',
    },
    {
        name: 'Ballpen',
        icon: 'Ballpen',
    },
]


const ArtAvatar = () => {
    const [artIcon, setArtIcon] = useState('Book');
    const [opened, { open, close }] = useDisclosure(false);

    function handleSwitch() {
        switch (artIcon) {
            case 'Book':
                setArtIcon('Book');
            case 'Backpack':
                setArtIcon('Backpack')
            case 'Ballpen':
                setArtIcon('Ballpen')
        }
    }

    return (
        <>
            <Modal opened={opened} onClose={close} title="Switch Pics" centered>

            </Modal>

            <div style={{  position: 'absolute', translate: 'translate(-50%, -50%)', top: 25, left: 30, width: '80px', height: '80px'}}>
                {artIcon == 'Book' &&
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', width: '100%', height: '100%', margin: '5px', backgroundColor: 'blue'}}>
                    <Book2 color='white' size={48} />
                </div>
                } 
                {artIcon == 'Backpack' &&
                <div style={{borderRadius: '50%', width: '100%', height: '100%', margin: '5px', backgroundColor: 'green'}}>
                    <Backpack color='white' size={48} />
                
                </div>
                }
                {artIcon == 'Ballpen' &&
                <div style={{borderRadius: '50%', width: '100%', height: '100%', margin: '5px', backgroundColor: 'red'}}>
                    <Ballpen color='white' size={48} />
                
                </div>
                }
            </div>
                </>
    )
}

function PersonalSide({ courseComplete, collegeComplete, careerComplete}) {
    const navigate = useNavigate();

    const [opened, { toggle }] = useDisclosure(false);
    const [activeUser, setActiveUser] = useState([])
    
    const { userID, setUserID } = useContext(UserContext) 
    const surveys = [
      { id: 1, name: 'Courses Questions', href: `/CourseSurveyOne/${userID}` },
      { id: 2, name: 'College Questions', href: `/CollegeSurveyOne/${userID}` },
      { id: 3, name: 'Career Questions', href: `/CareerSurveyOne/${userID}`},
    ];

    
    function courseSurveyClick() {
        navigate(`/CourseSurveyOne/${userID}`);
    }
    function collegeSurveyClick() {
        navigate(`/CollegeSurveyOne/${userID}`);
    }
    function careerSurveyClick() {
        navigate(`/CareerSurveyOne/${userID}`);
    }

    return (

        <Paper onClick={toggle} shadow='lg' sx={{
            position: 'absolute',
            marginTop: '0px',
            top: 0,
            width: opened ? '150px' : '150px', // Change width based on opened state
            height: opened ? '80vh' : '150px', // Change height based on opened state
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <ArtAvatar />


            <Collapse  in={opened}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div>
      {surveys.map((survey) => (
        <div key={survey.id}>
            { survey.id == 1 ?
                 courseComplete ? 
            <CircleCheck size={32} color="green" />
                : <div>
             <CircleCheck size={32} color="red" />
             <button onClick={courseSurveyClick}> Complete {survey.name} </button>
             </div>
            : survey.id == 2 ?
                 collegeComplete ? 
                <CircleCheck size={32} color="green" />
            : <div>
                <CircleCheck size={32} color="red" />
             <button onClick={collegeSurveyClick}> Complete {survey.name} </button>
             </div>
             :
              survey.id == 3 ?
               careerComplete ? 
            <CircleCheck size={32} color="green" />
        : <div>
             <CircleCheck size={32} color="red" />
             <button onClick={careerSurveyClick}> Complete {survey.name} </button>
             </div>
        :  <span>{survey.name}</span>
            }
        </div>
      ))}     
    </div>
    
                <Paper shadow="lg" style={{ cursor: 'pointer', margin: '0 auto 5px auto',  width: '80px', height: '60px',  display: 'flex', borderRadius: '5px', justifyContent: 'center', alignItems: 'center'}}>
                    <Checklist size={32} />
                </Paper>
                <Paper shadow="lg" style={{ cursor: 'pointer', margin: '5px', marginTop: '10px', width: '80px', height: '60px',  display: 'flex', borderRadius: '5px', justifyContent: 'center', alignItems: 'center'}}>
                    <Medal size={32} />
                </Paper>
                <Paper shadow="xl" style={{ cursor: 'pointer', position: 'absolute', left: 32, bottom: 10,margin: '5px', marginTop: '10px', width: '80px', height: '80px', display: 'flex', borderRadius: '5px', justifyContent: 'center', alignItems: 'center'}}>
                    <Settings size={32} />
                </Paper>
            </div>
</Collapse>

        </Paper>
            
      

        
    )
}

export default PersonalSide;