import React, { useState, useEffect } from "react";
import "./MyCourses.css";
import { Card, Divider, Modal } from "@mantine/core";
import {  Book, Search  } from "tabler-icons-react";
import { motion, AnimatePresence } from 'framer-motion';
import { InfoCircle, FileInfo, Trash, Heart,Calculator, Check, LetterX } from 'tabler-icons-react';
import { API } from "../../../API";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { COURSE_ATTRIBUTES } from './courseAttributes';
import { Link, useNavigate } from "react-router-dom";

// Small 

export const SmallCourse = ({course, onSelect, showHeart, searchValue, onDelete, isLiked  }) => {
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
  title="Delete Course"
  size="xs"
  radius="md"
  hideCloseButton
>
  <div className="delete-modal-content">
    <p>Do you want to delete this course?</p>
    <div className="delete-modal-actions">
      <Check size={24} style={{cursor: 'pointer'}} onClick={handleDelete} />
      <LetterX size={24} className="cancel-icon" onClick={handleCancel} />
    </div>
  </div>
</Modal>
<div style={{display: 'flex', textAlign: 'center', justifyContent: 'center'}}>
<div className="small-component-container">
      <div className="icon-wrapper"><Book /></div>
      <div style={{ textAlign: 'center', fontWeight: 500}}>{course.course_name}</div>
        <div>
        </div>
        {
  showHeart && (
    <Trash
      size={24}
    style={{cursor: 'pointer'}}
    
      onClick={() => setShowModal(true)}
    />
  )
}
<div className="icon-container" onClick={handleClick}>
      <Link to={searchValue && course && course.id ? `/explore/courses/${course.id}` : "#"}>
        <InfoCircle className="icon" size={24} />
      </Link>
    </div>
</div>
     </div>
      </div>
    );
};


function getMatchingAttributes(course) {
    

    const matchingAttributes = [];
  
    if (course.ap) {
      matchingAttributes.push(COURSE_ATTRIBUTES.isAP);
    }
  
    if (course.dualEnrollment) {
      matchingAttributes.push(COURSE_ATTRIBUTES.isDuelEnrollment);
    }
  
    if (course.honors) {
      matchingAttributes.push(COURSE_ATTRIBUTES.isHonors);
    }
  
    if (course.difficulty > 7) {
      matchingAttributes.push(COURSE_ATTRIBUTES.difficulty_high);
    } else if (course.difficulty > 3 && course.difficulty < 7) {
      matchingAttributes.push(COURSE_ATTRIBUTES.difficulty_medium);
    } else if (course.difficulty < 3) {
      matchingAttributes.push(COURSE_ATTRIBUTES.difficulty_easy);
    }
  
    return matchingAttributes;
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



const CourseSkillsList = ({ learnSkills, large }) => {
  // Check if learnSkills is null or undefined, and return an empty array if it is
  const skillsArray = (learnSkills || '').split(";");

  return (
    <ul>
      {skillsArray.map((skill, index) => (
        <li className="course-skill-list" style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center'}}key={index}>
          <p className="course-skill-list" style={{fontSize: large ? '16px' : '10px'}}><b>*</b>{skill.trim()}</p>
        </li>
      ))}
    </ul>
  );
};

export const MediumCourseActions = ({ onLargeClick, onDelete, onLike, course, largeCourseRef, index, isLiked }) => {
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
    onLike(course, score);
  };

  
  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="medium-component-actions">
      {scoreBarVisible && 
      <div>
        {isLiked && <h4 style={{textAlign: 'center', color: '#EDF2F4', marginBottom: 0}}> Update college score. </h4>}
      <ScoreBar onSelect={handleSelect} setScoreBarVisible={setScoreBarVisible} />
      </div>}
      <motion.div
        className="medium-component-card"
        onClick={toggleVisibility}
      >
         <MediumCourse 
                        
                            largeCourseRef={largeCourseRef}
                            course={course}
                          
                          
                         
                            />
      </motion.div>
      
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
           <button className="action-button" onClick={() => onLargeClick(course)}>
  <motion.div whileHover={{ scale: 1.1 }}>
    <InfoCircle className="info-icon" size={24} />
  </motion.div>
</button>
<button className="action-button" onClick={() => onDelete(course)}>
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


export const LargeCourseActions = ({ onLargeClick, onDelete, onLike, course, largeCourseRef, index, isLiked }) => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedScore, setSelectedScore] = useState(null);
  const [scoreBarVisible, setScoreBarVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (score) => {
    setSelectedScore(score);
    setScoreBarVisible(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setVisible(false);
    }, 2000);
    onLike(course, score);
  };

  const handleLinkCollege = () => {
    navigate(`/explore/courses/${course.id}`)
  }

  
  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="medium-component-actions">
      <motion.div
        className="medium-component-card"
        onClick={toggleVisibility}
      >
         <LargeCourse
                            key={index}
                            largeCourseRef={largeCourseRef}
                            course={course}
                          
                          
                         
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
  <button className="action-button" onClick={handleLinkCollege}>
  <motion.div whileHover={{ y: [0, -3, 3, -3, 3, 0] }} transition={{ duration: 0.3 }}>
    <FileInfo className="trash-icon" size={24} />
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


const CoursePrerequisites = React.memo(({ prerequisites }) => {
  
  const [courseData, setCourseData] = useState([]);
  const [displayedCourseName, setDisplayedCourseName] = useState(null);
  console.log(courseData)
  
  
  const search = async (searchVal) => {
    let result = null;
    const searchValue = searchVal.trim()
    await API.get(`/api/search/course/${searchValue}/`)
      .then((response) => {
        console.log(response.data)
        if (response.data.courses.length > 0) {
          result = response.data.courses[0];
        }
        
      })
      .catch((error) => {
        console.error("Error fetching course data:", error);
      });
    return result;
  };

  const iconMapping = {
    Book: <Book size={32} />,
    Calculator: <Calculator size={32} />,
  };


  useEffect(() => {
    
    const fetchCourseData = async () => {
      if (!prerequisites || prerequisites.indexOf(';') === -1) {
        setCourseData(["N/A"]);
        return;
      }
      const courseAbbreviations = prerequisites.split(";");

      const fetchedCourses = await Promise.all(
        courseAbbreviations.map(async (abbreviation) => {
          
          const course = await search(abbreviation);
          return course;
        })
      );

      // Filter out null values (if any course data is not found)
      const filteredCourses = fetchedCourses.filter((course) => course !== null);
      setCourseData(filteredCourses);
    };

    fetchCourseData();
  }, [prerequisites]);

  return (
    <div className="course-pre-tokens-md">
      {courseData.length > 0 && courseData[0] === "N/A" ? (
        <span style={{textAlign: 'center'}}>N/A</span>
      ) : (
        courseData.map((course, index) => {
          const iconName = course.abbrev_icon.trim();
          const style = {
            backgroundColor: "#8D99AE",
            border: "1px solid #1F2937",
          };
  
          return (
            <div
              key={index}
              className="course-pre-token"
              style={style}
              onMouseEnter={() => setDisplayedCourseName(course.course_name)}
              onMouseLeave={() => setDisplayedCourseName(null)}
            >
              {iconMapping[iconName]}
              {displayedCourseName === course.course_name && (
                <div className="course-pre-token-tooltip">{course.course_name}</div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
  
});




// Medium 
export const MediumCourse = ({course, coursePage, onDelete, onLargeClick, setView, setSelectedCourse}) => {
  const [displayedTooltip, setDisplayedTooltip] = useState(null);
  
const navigate = useNavigate();
const handleLinkClick = (course) => (event) => {
  event.preventDefault();
  navigate(`/explore/courses/${course.id}`);
};

return (
<Card className={coursePage ? "my-individual-component" : "my-component"} shadow="sm" padding="lg" radius="md" withBorder >
  <Card.Section className="component-medium-top-shelf" style={{padding: '8px'}}> 
  <h4 className="component-medium-name shiny-text" style={{display: 'flex', color: '#2B2D42', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: 0}}> <b>{course.course_name} </b></h4>
  { !coursePage &&
  <div style={{position: 'absolute', right: 5, top: 5}}>
    <a href={`/explore/courses/${course.id}`} onClick={handleLinkClick(course)}>
      
       <Search />
      </a>
      </div>
}
  </Card.Section>
  <Divider style={{marginBottom: 5}} />
  <Card.Section style={{display: 'flex', justifyContent: 'left', width: '100%', margin: '3px auto 3px auto', height: '25px',  marginBottom: 0}}>

  {getMatchingAttributes(course).map((attribute, index) => {
  const style = {
    backgroundColor: attribute.color,
    border: "1px solid #1F2937",
  };

  

  return (
    <div
      key={index}
      className="component-tokens-md"
      style={style}
      onMouseEnter={() => setDisplayedTooltip(attribute.label)}
      onMouseLeave={() => setDisplayedTooltip(null)}
    >
      {attribute.icon}

      {displayedTooltip === attribute.label && (
        <div className="course-pre-token-tooltip">{attribute.label}</div>
      )}
    </div>
  );
})}

</Card.Section>
<Divider style={{marginBottom: 5, marginTop: 5}} />
{/*
<div style={{textAlign: 'center', fontWeight: 400, fontSize: '13px', marginBottom: 4, color: 'gray'}}> Course Concepts </div>
<p style={{textAlign: 'center', fontSize: '10px', marginBottom: 5}}>TBD</p>
        <Divider />
*/}
        <div className="course-field-tag" style={{textAlign: 'center', fontWeight: 400, fontSize: '12px', marginBottom: 4, marginTop: 4, color: 'gray'}}> Learn a Lot</div>
  { course && <CourseSkillsList className="course-skill-list" learnSkills={course.learn_skills} /> }
  <Divider className="course-field-tag" style={{marginTop: 6, marginBottom: 4}} />
  <div style={{display: 'flex', justifyContent:'space-between', position: 'absolute', bottom: 5}}>
  <div  style={{ fontWeight: 400, fontSize: '10px', marginBottom: 4, marginTop: 8, color: 'gray'}}> Field <b> {course.field}</b></div> 
  <div  style={{position: 'relative', marginLeft: 5, fontWeight: 400, fontSize: '10px', marginBottom: 4, marginTop: 8, color: 'gray'}}> Industry <b> {course.field}</b></div> 
  </div>
  
          </Card>

      );
    };
    
 // Large pre-reqs


// Large 

export const LargeCourse = ({ course, onDelete, handleLiked}) => {
  const [displayedTooltip, setDisplayedTooltip] = useState(null);

    return course ? (
        <div className="large-component">
          <div style={{fontWeight: 600}} className="large-component-top-container shiny-text">
            {course.course_name}
      
        </div>
        <hr style={{marginTop: 5, marginBottom: 5}}/>
        <div style={{fontWeight: 400, fontSize: '13px', marginBottom: 4, color: 'gray'}}> Description </div>
<p> {course.description}</p>
<Divider style={{marginBottom: 5, marginTop: 10}} />
        <div style={{fontWeight: 400, fontSize: '13px', marginBottom: 0, marginTop: 4, color: 'gray'}}> Course Attributes </div>
    
        <div style={{justifyContent: 'left', width: '100%',height: '50px',textAlign: 'center', fontSize: '14px', fontWeight: 400, marginTop: 5, marginBottom: 15, display: 'flex'}}>
        {getMatchingAttributes(course).map((attribute, index) => {
  const style = {
    backgroundColor: attribute.color,
    border: "1px solid #1F2937",
  };

  return (
    <div
      key={index}
      className="component-attribute-lg"
      style={style}
      onMouseEnter={() => setDisplayedTooltip(attribute.label)}
      onMouseLeave={() => setDisplayedTooltip(null)}
    >
      {attribute.icon}

      {displayedTooltip === attribute.label && (
        <div className="course-pre-token-tooltip">{attribute.label}</div>
      )}
    </div>
  );
})}
         
          
        </div>
        <hr />
        <div style={{textAlign: 'center', fontSize: '14px', fontWeight: 400, marginTop: 5, marginBottom: 10}}>
        <div style={{fontWeight: 400, marginTop: 0, fontSize: '13px', marginBottom: 3, color: 'gray'}}> Skills  </div>
     
    <CourseSkillsList className="course-skill-list" large={true} learnSkills={course.learn_skills} />

        </div>
     
        <hr style={{marginTop: '5px', marginBottom: '5px'}} />
        <div style={{textAlign: 'center', fontSize: '14px', fontWeight: 400, marginTop: 7.5, marginBottom: 5}}>
    <div style={{fontWeight: 400, marginTop: 0, fontSize: '13px', marginBottom: 8, color: 'gray'}}> Recommended Prerequisites </div>
    <CoursePrerequisites prerequisites={course.prerequisites} />
    
    <div style={{display: 'flex', justifyContent:'space-between', position: 'absolute', bottom: 5}}>
  <div  style={{ fontWeight: 400, fontSize: '16px', marginBottom: 4, marginTop: 8, color: 'gray'}}> Field <b> {course.field}</b></div> 
  <div  style={{position: 'relative', marginLeft: 8, fontWeight: 400, fontSize: '16px', marginBottom: 4, marginTop: 8, color: 'gray'}}> Industry <b> {course.field}</b></div> 
    </div>
    </div>
       
    
        </div>
    ) : null;
};