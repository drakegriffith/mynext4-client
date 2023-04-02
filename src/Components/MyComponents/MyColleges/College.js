import React, { useState, useEffect, useCallback } from "react";
import "../MyComponents.css"
import "./MyColleges.css"
import { Card, Divider, Progress, Modal } from "@mantine/core";
import { Star, Medal, User, Book2,  Eraser, ThumbUp, ArrowsMaximize, BallFootball, Award, Building, Meat, Confetti,  MoodWrrr, MoodUnamused, MoodAnnoyed2, MoodSmileBeam, LayoutBottombar, SoccerField, Search } from "tabler-icons-react";
import { motion, AnimatePresence } from 'framer-motion';
import { InfoCircle, Trash, Heart, Check, LetterX, InfoCircleFilled } from 'tabler-icons-react';
import { Link, useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {shuffle} from "lodash"
import MyCollegeCards from './MyCollegeCards';
import { gsap } from "gsap";
import { COLLEGE_ATTRIBUTES } from './collegeAttributes';
import next4Logo from "../../Nav/icon.png"

// Small 

export const SmallCollege = ({college, onSelect, showHeart, searchValue, onDelete, isLiked  }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    onDelete();
    setShowModal(false);
  };

  const handleClick = (e) => {
    if (!searchValue) {
      e.preventDefault();
      onSelect();
    }
  };

  const handleCancel = () => {
    setShowModal(false);
  };
    return (
      <div>
      <Modal
  opened={showModal}
  onClose={handleCancel}
  title="Delete College"
  size="xs"
  radius="md"
  hideCloseButton
>
  <div className="delete-modal-content">
    <p>Delete college card?</p>
    <div className="delete-modal-actions">
      <Check size={24} className="check-icon" onClick={handleDelete} />
      <LetterX size={24} className="cancel-icon" onClick={handleCancel} />
    </div>
  </div>
</Modal>
<div className="small-career-container">
      <div className="college-icon-wrapper">{college.abbrev_name}</div>
      <div className="career-tooltip">{college.college_name}</div>
        <div>
        {
  showHeart && (
    <Heart
      size={24}
      className={`heart-icon ${isLiked ? 'heart-liked' : ''}`}
      onClick={() => setShowModal(true)}
    />
  )
}
<div className="icon-container" onClick={handleClick}>
      <Link to={searchValue && college && college.id ? `/Colleges/${college.id}` : "#"}>
        <InfoCircle className="icon" size={24} />
      </Link>
      
    </div>
</div>
      </div>
      </div>
    );
};


   



// Buttons

const buttonVariants = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
    transition: { duration: 0.2 },
  },
};

const useButtonHandler = (handler) => {
  return useCallback(() => {
    handler();
  }, [handler]);
};


function getMatchingAttributes(college) {
  const matchingAttributes = [];
  let match = false
  switch (true) {
    case college.overall_rank <= 10:
      matchingAttributes.push(COLLEGE_ATTRIBUTES.top_10_overall);
      match = true;
      break;
    case college.overall_rank <= 25:
      matchingAttributes.push(COLLEGE_ATTRIBUTES.top_25_overall);
      match = true;
      break;
    case college.overall_rank <= 50:
      matchingAttributes.push(COLLEGE_ATTRIBUTES.top_50_overall);
      match = true;
      break;
    case college.overall_rank <= 200:
      matchingAttributes.push(COLLEGE_ATTRIBUTES.top_200_overall);
      match = true;
      break;
    default:
      break;
  }

  switch (true) {
    case college.academic_rank <= 10:
      matchingAttributes.push(COLLEGE_ATTRIBUTES.top_10_academics);
      match = true;
      break;
    case college.academic_rank <= 25:
      matchingAttributes.push(COLLEGE_ATTRIBUTES.top_25_academics);
      match = true;
      break;
    case college.academic_rank <= 50:
      matchingAttributes.push(COLLEGE_ATTRIBUTES.top_50_academics);
      match = true;
      break;
    case college.academic_rank <= 200:
      matchingAttributes.push(COLLEGE_ATTRIBUTES.top_200_academics);
      match = true;
      break;
    default:
      break;
  }

  return matchingAttributes;
}

const getGradeColor = (grade) => {
  console.log("I WORK WELL")
  const trimmedGrade = grade.trim();
  switch (trimmedGrade) {
    case "A+":

      return "#6abf69"; // Light green
    case "A":
      return "#40a948"; // Dark green
    case "A-":
      return "#8bd790"; // Pale green
    case "B+":
      return "#73c3c9"; // Light blue
    case "B":
      return "#4194a8"; // Dark blue
    case "B-":
      return "#7fb1b7"; // Pale blue
    case "C+":
      return "#ffc107"; // Yellow
    case "C":
      return "#ff9800"; // Orange
    case "C-":
      return "#f44336";
    case "D+":
      return "#f44336";
    case "D":
      return "#f44336"; // Red
    default:

      return "#000000";
       // Black (fallback)
  }
}

const ScoreBar = ({ onSelect, setScoreBarVisible }) => {
  const scores = [1, 2, 3, 4, 5];
  
  return (
    <div className="score-bar">
      {scores.map(score => (
        <button
          key={score}
          className="score-button"
          onClick={() => onSelect(score)}
        >
          {score}
        </button>
      ))}
      
    </div>
  );
};


export const MediumCollegeActions = ({ onLargeClick, onDelete, onLike, college, largeCollegeRef, index, isLiked }) => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedScore, setSelectedScore] = useState(null);
  const [scoreBarVisible, setScoreBarVisible] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleSelect = (score) => {
    setSelectedScore(score);
    setScoreBarVisible(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setVisible(false);
    }, 2000);
    onLike(college, score);
  };

  
  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="medium-component-actions">
      <motion.div
        className="medium-component-card"
        onClick={toggleVisibility}
      >
         <MediumCollege 
                            key={index}
                            largeCollegeRef={largeCollegeRef}
                            college={college}
                          
                          
                         
                            />
      </motion.div>
      {scoreBarVisible && 
      <div>
        {isLiked && <h4 style={{textAlign: 'center', color: '#EDF2F4', marginBottom: 0}}> Update college score. </h4>}
      <ScoreBar onSelect={handleSelect} setScoreBarVisible={setScoreBarVisible} />
      </div>}
      <AnimatePresence>
        
        {submitted && (
          <motion.div
            className="score-submitted-message"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -20 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 2 }}
          >
            Your score was saved.
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
     
        {visible && (
          <motion.div
            className="actions-container"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
           <button className="action-button" onClick={() => onLargeClick(college)}>
  <motion.div whileHover={{ scale: 1.1 }}>
    <InfoCircle className="info-icon" size={24} />
  </motion.div>
</button>
<button className="action-button" onClick={() => onDelete(college)}>
  <motion.div whileHover={{ x: [0, -3, 3, -3, 3, 0] }} transition={{ duration: 0.3 }}>
    <Trash className="trash-icon" size={24} />
  </motion.div>
</button>
<button className="action-button" onClick={() => setScoreBarVisible(!scoreBarVisible)}>
  <motion.div whileHover={{ scale: 1.1 }}>
    <Heart className={`heart-icon ${isLiked ? 'heart-liked' : ''}`} size={24} />
  </motion.div>
</button>
              
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export const LargeCollegeActions = ({ onLargeClick, onDelete, onLike, college, largeCollegeRef, index, isLiked }) => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedScore, setSelectedScore] = useState(null);
  const [scoreBarVisible, setScoreBarVisible] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleSelect = (score) => {
    setSelectedScore(score);
    setScoreBarVisible(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setVisible(false);
    }, 2000);
    onLike(college, score);
  };

  
  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="large-component-actions">
      <motion.div
        className="large-college-card"
        onClick={toggleVisibility}
      >
         <LargeCollege 
                            key={index}
                            largeCollegeRef={largeCollegeRef}
                            college={college}
                          
                          
                         
                            />
      </motion.div>
      {scoreBarVisible && 
      <div>
        {isLiked && <h4 style={{textAlign: 'center', color: '#EDF2F4', marginBottom: 0}}> Update college score. </h4>}
      <ScoreBar onSelect={handleSelect} setScoreBarVisible={setScoreBarVisible} />
      </div>}
      <AnimatePresence>
        
        {submitted && (
          <motion.div
            className="score-submitted-message"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -20 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 2 }}
          >
            Your score was saved.
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
     
        {visible && (
          <motion.div
            className="actions-container-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
           <button className="action-button" onClick={() => onLargeClick(college)}>
  <motion.div whileHover={{ scale: 1.1 }}>
    <InfoCircle className="info-icon" size={24} />
  </motion.div>
</button>
<button className="action-button" onClick={() => onDelete(college)}>
  <motion.div whileHover={{ x: [0, -3, 3, -3, 3, 0] }} transition={{ duration: 0.3 }}>
    <Trash className="trash-icon" size={24} />
  </motion.div>
</button>
<button className="action-button" onClick={() => setScoreBarVisible(!scoreBarVisible)}>
  <motion.div whileHover={{ scale: 1.1 }}>
    <Heart className={`heart-icon ${isLiked ? 'heart-liked' : ''}`} size={24} />
  </motion.div>
</button>
              
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Medium 
export const MediumCollege = ({college, collegePage,  onDelete, onLargeClick, setView, setSelectedCollege}) => {

  const [displayedTooltip, setDisplayedTooltip] = useState(null);
  const college_grades = [
    { label: 'Academic Grade', grade: college.academic_grade },
    { label: 'Diversity Grade', grade: college.diversity_grade },
    { label: 'Athletic Grade', grade: college.athletic_grade },
    { label: 'Value Grade', grade: college.value_grade },
    { label: 'Campus Grade', grade: college.campus_grade },
    { label: 'Party Grade', grade: college.party_grade },
  ];
  
 
  const [activeTab, setActiveTab] = useState("money");
    const [showSAT, setShowSAT] = useState(false);
    const [endpoints, setEndpoints] = useState([]);

    const handleUpdateEndpoints = (newEndpoints) => {
      setEndpoints(newEndpoints);
    };

    const handleMaximize = () => {
      onLargeClick();
      setView('large');
      setSelectedCollege(college);
    };
    const navigate = useNavigate();
const handleLinkClick = (course) => (event) => {
  event.preventDefault();
  navigate(`/Courses/${course.id}`);
};


  
function handleDelete() {
  onDelete();
};
function pascalCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

return (
<Card className={collegePage ? "my-individual-component" : "my-component"} shadow="sm" padding="lg" radius="md" withBorder >
  <Card.Section className="component-medium-top-shelf"> 
  <h4 className="college-medium-name shiny-text" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: 0}}> <b>{college.college_name} </b></h4>
  { !collegePage &&
  <div style={{position: 'absolute', right: 5, top: 5}}>
    <a href={`/Colleges/${college.id}`} onClick={handleLinkClick(college)}>
      
       <Search />
      </a>
      </div>
}
  </Card.Section>
  <Divider style={{marginBottom: 5}} />
  <Card.Section style={{display: 'flex', justifyContent: 'left', width: '100%', margin: '3px auto 3px auto', height: '25px',  marginBottom: 0}}>

  {getMatchingAttributes(college).map((attribute) => {
    return (
      <div
        className="component-tokens-md"
       
        style={{ backgroundColor: attribute.color }}
      >
        {attribute.icon}
        {/*<span className="college-attribute-label">{attribute.label}</span>*/}
      </div>
    );
  })}
</Card.Section>
<Divider style={{marginBottom: 0, marginTop: 5}} />

<div style={{margin: '5px 0 2.5px 0', textAlign: 'center', fontWeight: 500}}>Next4 Scores</div>

<div style={{
  

      display: 'grid',
    border: '.5px solid #363636',
    marginTop: '0.0px',
    borderRadius: '3px',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'repeat(2, 1fr)',
      justifyContent: 'center',
      padding: '12.5px 5px 7.5px 5px',
      gap: '5px 5px',
      alignItems: 'center', // Center child elements vertically
      justifyItems: 'center',
    }}>
      {college && college_grades.map((grade, index) => (

       <div className="grade-container">
       <div className="grade-card "
  onMouseEnter={() => setDisplayedTooltip(grade.label)}
  onMouseLeave={() => setDisplayedTooltip(null)}>
         <div key={index} className={`grade-front component-attribute`} style={{ backgroundColor: getGradeColor(grade.grade) }}>
           {grade.grade}

     
         </div>
         <div className="grade-back" style={{ backgroundColor: getGradeColor(grade.grade) }}>
         <img style={{width: '36px', height: '36px'}}src= {next4Logo} />
         </div>
         {displayedTooltip === grade.label && (
        <div className="college-pre-token-tooltip">{grade.label}</div>
      )}
        
       </div>

     </div>
      ))}
      
    </div>

          </Card>

      );
    };
    


// Large 

export const LargeCollege = ({ college, onDelete, handleLiked}) => {
  const [endpoints, setEndpoints] = useState([]);
  const [displayedTooltip, setDisplayedTooltip] = useState(null);

  console.log("COLLEGE")
  console.log(college)
  const [value, setValue] = useState(0);
  let college_grades = [];

  if (college) {
    console.log("YES!")
    college_grades = [
      { label: 'Academic Grade', grade: college.academic_grade },
      { label: 'Diversity Grade', grade: college.diversity_grade },
      { label: 'Athletic Grade', grade: college.athletic_grade },
      { label: 'Value Grade', grade: college.value_grade },
      { label: 'Campus Grade', grade: college.campus_grade },
      { label: 'Party Grade', grade: college.party_grade },
    ];
  }

  
  useEffect(() => {
    // Update the value to simulate incoming money
    const interval = setInterval(() => {
      setValue((prevValue) => prevValue + 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleUpdateEndpoints = (newEndpoints) => {
    setEndpoints(newEndpoints);
  };

    return college ? (
        <div className="large-component">
          <div style={{fontWeight: 600}} className="large-component-top-container shiny-text">
            {college.college_name}
      
        </div>
        <hr style={{marginTop: 5, marginBottom: 5}}/>
        <div style={{fontWeight: 400, fontSize: '13px', marginBottom: 8, color: 'gray'}}> Description </div>
        <hr />
        <div style={{fontWeight: 400, fontSize: '13px', marginBottom: 0, marginTop: 4, color: 'gray'}}> Institute Insights </div>
    
        <div style={{justifyContent: 'left', width: '100%',height: '50px',textAlign: 'center', fontSize: '14px', fontWeight: 400, marginTop: 5, marginBottom: 15, display: 'flex'}}>
        {getMatchingAttributes(college).map((attribute) => {
    return (
      <div
        className="component-attribute-lg"
       
        style={{ backgroundColor: attribute.color , marginRight: '5px'}}
      >
        {attribute.icon}
        {/*<span className="college-attribute-label">{attribute.label}</span>*/}
      </div>
    );
  })}
            
        </div>
        <hr />
        <div style={{textAlign: 'center', fontSize: '14px', fontWeight: 400, marginTop: 5, marginBottom: 10}}>
        <div style={{fontWeight: 400, marginTop: 0, fontSize: '13px', marginBottom: 3, color: 'gray'}}><b> MyNext4 Scores </b></div>
      
        <div style={{
      display: 'grid',
    border: '.5px solid #363636',
    marginTop: '0.0px',
    borderRadius: '3px',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'repeat(2, 1fr)',
      justifyContent: 'center',
      padding: '12.5px 5px 7.5px 5px',
      gap: '7.5px 5px',
      alignItems: 'center', // Center child elements vertically
      justifyItems: 'center',
    }}>
     {college_grades.map((grade, index) => (

       <div className="grade-container">
      <div className="grade-card "
  onMouseEnter={() => setDisplayedTooltip(grade.label)}
  onMouseLeave={() => setDisplayedTooltip(null)}>
         <div key={index} className={`grade-front component-attribute-lg`} style={{ backgroundColor: getGradeColor(grade.grade) }}>
           {grade.grade}
         </div>
         <div className="grade-back" style={{ backgroundColor: getGradeColor(grade.grade) }}>
         <img style={{width: '24px', height: '24px'}}src= {next4Logo} size={32} />
         </div>
         {displayedTooltip === grade.label && (
        <div className="college-pre-token-tooltip">{grade.label}</div>
      )}
       </div>

     </div>
      ))}
      
    </div>
        </div>
     
        <hr style={{marginTop: '5px', marginBottom: '5px'}} />
        <div style={{textAlign: 'center', fontSize: '14px', fontWeight: 400, marginTop: 7.5, marginBottom: 5}}>
    <div style={{fontWeight: 400, marginTop: 0, fontSize: '13px', marginBottom: 5, color: 'gray'}}> Additional Attributes </div>
    <div style={{textAlign: 'center', height: '100px', padding: '5px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <div style={{padding: '15px', width: '50%', height: '100%', margin: '5px', border: '.5px solid #363636', borderRadius: '2px'}}>
        <Carousel>
          <div style={{}}>
           <b> ${college.average_aid}</b> is the average financial aid at this institituion.
          </div>
          <div>
          <b> ${college.cost}</b> is the average annual cost paid to attend this instititution.
          </div>
          <div>
          <b>  ${college.average_salary_after}</b> is the average salary after graduating for students at this institition.
          </div>
        </Carousel>
    </div>
    <div style={{width: '50%', height: '100%', margin: '5px', border: '.5px solid #363636', borderRadius: '2px'}}>
        <Carousel>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <div>
          <b>{college.sat_scores_average}</b> is the average SAT accepted at this instition.
          </div>
          <div style={{display: 'flex', marginTop: '5px', justifyContent: 'center', alignItems: 'center'}}>
            <b style={{marginRight: '5px'}}> {college.sat_scores_low}</b><hr style={{width: '60px', height: '1px'}} /><b style={{marginLeft: '5px'}}>{college.sat_scores_high}</b>
          </div>
          <div style={{display: 'flex', marginTop: '0px', justifyContent: 'center', alignItems: 'center'}}>
            <b style={{marginRight: '5px'}}> 25%</b><hr style={{width: '60px', height: '1px'}} /><b style={{marginLeft: '5px'}}>75%</b>
          </div>

          </div>
          <div style={{padding: '5px',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <div>
          <b>{college.act_scores_average}</b> is the average ACT accepted at this instition.
          </div>
          <div style={{display: 'flex', marginTop: '5px', justifyContent: 'center', alignItems: 'center'}}>
            <b style={{marginRight: '5px'}}> {college.act_scores_low}</b><hr style={{width: '60px', height: '1px'}} /><b style={{marginLeft: '5px'}}>{college.act_scores_high}</b>
          </div>
          <div style={{display: 'flex', marginTop: '0px', justifyContent: 'center', alignItems: 'center'}}>
            <b style={{marginRight: '5px'}}> 25%</b><hr style={{width: '60px', height: '1px'}} /><b style={{marginLeft: '5px'}}>75%</b>
          </div>
          </div>
          
        </Carousel>
    </div>
    </div>
    <hr style={{marginTop: 10}}/>
    </div>
       
    
        </div>
    ) : null;
};