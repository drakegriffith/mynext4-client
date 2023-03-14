import React, { useState, useEffect, useCallback } from "react";
import "./MyColleges.css";
import { Divider, Progress } from "@mantine/core";
import { Star, User, Book2,  Eraser, ThumbUp, ArrowsMaximize, BallFootball, Award, Building, Meat, Confetti,  MoodWrrr, MoodUnamused, MoodAnnoyed2, MoodSmileBeam, Trash } from "tabler-icons-react";

import { motion } from 'framer-motion'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {shuffle} from "lodash"
import MyCollegeCards from './MyCollegeCards';
import { gsap } from "gsap";

// SAT & ACT

const CollegeScore = ({ showSAT, satCompositeMidpoint, satCompositePercentile25, satCompositePercentile75, actCumulativeMidpoint, actCumulativePercentile25, actCumulativePercentile75 }) => {
  const [hovered, setHovered] = useState(-1);
  const reset = () => setHovered(-1);

  const values = [
    showSAT ? (satCompositePercentile25 / 1600) * 100 : (actCumulativePercentile25 / 36) * 100,
    showSAT ? ((satCompositeMidpoint / 1600) * 100) - (satCompositePercentile25 / 1600) * 100  : ((actCumulativeMidpoint / 36) * 100) - (actCumulativePercentile25 / 36) * 100,
    showSAT ? ((satCompositePercentile75 / 1600) * 100) - ((satCompositeMidpoint / 1600) * 100) : ((actCumulativePercentile75 / 36) * 100) - ((actCumulativeMidpoint / 36) * 100),
  ]
  return ( 
    <div>
    <Progress size="xl"  onMouseLeave={() => setHovered(-1)} sections={[
      { value: values[0], color: 'cyan', onMouseEnter: () => setHovered(satCompositePercentile25), onMouseLeave: reset,tooltip: `25% Percentile ${showSAT ? satCompositePercentile25 : actCumulativePercentile25}`  },
      { value: values[1], color: 'blue', onMouseEnter: () => setHovered(satCompositeMidpoint), onMouseLeave: reset, tooltip: `Midpoint ${showSAT ? satCompositeMidpoint : actCumulativeMidpoint}`},
      { value: values[2], color: 'indigo', onMouseEnter: () => setHovered(satCompositePercentile75), onMouseLeave: reset , tooltip: `75% Percentile ${showSAT ? satCompositePercentile75 : actCumulativePercentile75}` },
  ]} />
  <div className="test-score-section">
  <h4> 0 </h4>
  <h4> {showSAT ? 1600 : 36} </h4>
  </div>
  </div>
  );
};

// % Rate 

export const AcceptanceRate = ({ acceptanceRate }) => {
  const [icon, setIcon] = useState(null);
  useEffect(() => {
    const number = Number(acceptanceRate);
    console.log(number)
    switch(true) {
      case number <= .10:
        setIcon(<MoodWrrr size={32} />);
        break;
      case number <= .25:
        setIcon(<MoodAnnoyed2 size={32} />);
        console.log("OK")
        break;  
      case number <= .40:
        setIcon(<MoodUnamused size={32}/>);
        break;
      case number <= .80:
        setIcon(<MoodSmileBeam size={32} />);
        break;
      default:
        setIcon(<MoodSmileBeam size={32} />);
    }
  }, [acceptanceRate])

  return (
    <div className="acceptance-rate-container">
    
      {icon}
      {acceptanceRate}
    </div>
  )
}

// Small 

export const SmallCollege = ({college, onClick, onFavoriteToggle }) => {
  const collegeName = exemptWords(college.college_name);
  const [isFavorited, setIsFavorited] = useState(false);
  
  const handleFavoriteClick = () => {
    const newIsFavorited = !isFavorited;
    setIsFavorited(newIsFavorited);
    console.log(college[0])
    onFavoriteToggle(college[0].collegeUnitId, newIsFavorited)
  }
  

  function exemptWords(text) {
      let newText = text.replace("University", "");
      newText = newText.replace("of", "");
      return newText.slice(0, 30) 
    }

  window.onload = function() {
    let starAnim = document.querySelector('.small-college-star');
    starAnim.addEventListener('click', function() {
      console.log('working');
      starAnim.classList.add('active');
  });
}
    return (

        <div className="small-college" onClick={onClick}>
            <div className="small-college-name">{collegeName}</div>
            <div className="small-college-star" onClick={handleFavoriteClick}>
            {isFavorited ? <Star size={24} style={{color: 'gold'}} /> : <Star size={24}/> }
            </div>
        </div>
    );
};

// Medallion

const MedallionAward = ({ endpoint, name, handleClick}) => {
    const [displayRank, setDisplayRank] = useState(false);
    const [grade, setGrade] = useState("");
    const [color, setColor] = useState("");
    useEffect(() => {
        const count = Number(endpoint);
        switch (true) {
            case count  <= 25:
                setGrade("S");
                setColor("green");
                break;
            case count <= 75:
              setGrade("A");
              setColor("gold");
              break;
            case count <= 150:
              setGrade("B")
              setColor("silver");
              break;
            case count <= 300:
              setGrade("C");
              setColor("bronze");
              break;
            default:
              setGrade("D");
              setColor("");
          }
    }, [endpoint]);

    
    function handleClick() {
      setDisplayRank(!displayRank);
      console.log('clicked')
    };

      return (
        <div className='medallion-container'>
        <div className="medallion-award" onClick={handleClick}>
      
      {displayRank ? <motion.div
        className={`icon medallion-award ${color}`}
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%"
        }}
       
      >
        {endpoint}
      </motion.div>
      :
      <motion.div
      className={`icon medallion-award ${color}`}
      onClick={handleClick}
      whileHover={{ scale: 1.2, rotate: 90 }}
      whileTap={{
        scale: 0.8,
        rotate: -90,
        borderRadius: "100%"
      }}
      >
       <div> <b>{grade}</b></div> 
      </motion.div>
}

    </div>
    <div style={{fontSize:"13px", fontWeight: 300}}>{name} </div>
    </div>
      );
};

function College({college, onUpdateEndpoints, size}) {
  if (!college) {
    return null;
  }
  
  const endpoints = [
    college[0].rankingsBestCollegeAcademics,
    college[0].rankingsBestCollegeAthletics,
    college[0].rankingsBestValueColleges,
    college[0].rankingsBestCollegeCampuses,
    college[0].rankingsBestCollegeFood,
    college[0].rankingsBestGreekLifeColleges,
    ...(size === "large"
      ? [
          college[0].rankingsBestCollegeProfessors,
          college[0].rankingsBestColleges,
        ]
      : []),
];

const updatedEndpoints = endpoints
.filter((endpoint) => endpoint && endpoint.value)
.map((endpoint) => {
  return {
    ...endpoint,
    name: endpoint.name
      .replace("Best ", "")
      .replace("College ", "")
      .replace("Colleges", ""),
  };
});

return (
  <div shadow="lg" className={size == "medium" ? 'college-medium-medallions' : 'college-large-medallions'}>
      {updatedEndpoints.map((endpoint, index) => (
         <MedallionAward endpoint={endpoint.value} 
         name={endpoint.name} key={index} Icon={icons[index]} />
         ))}

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

const DeleteButton = ({ children, onClick }) => {
  const handleDelete = useButtonHandler(onClick)
  return (
    <motion.button
      onClick={handleDelete}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      className="button"
    >
      {children}
    </motion.button>
  );
};

const LikeButton = ({ children, onClick, college }) => {
  const handleLiked = useButtonHandler(onClick)
  return (
    <motion.button
      onClick={handleLiked}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      className="button"
    >
      {children}
    </motion.button>
  );
};

const MaxButton = ({ children, onClick, college }) => {
  const onLargeClick = useButtonHandler(onClick);
  return (
    <motion.button
      onClick={onLargeClick}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      className="button"
    >
      {children}
    </motion.button>
  );
};

export const icons = [
Book2,
BallFootball,
Award,
Building,
Meat,
Confetti,
]

// Medium 
export const MediumCollege = ({college, onDelete, onLargeClick, setView, setSelectedCollege}) => {
  function animate() {
    gsap.to(".college-medium-container", { x: 200, scale: 0, duration: 0.5, ease: "expo.out" });
    onDelete();
  }
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

    const criteria = [];
    if (college[0].rankingsBestCollegeAcademics && college[0].rankingsBestCollegeAcademics.value <= 25) {
        criteria.push('Smart School')
    } 
    if (college[0].rankingsBestCollegeForPhysics && college[0].rankingsBestCollegeForPhysics.value <= 10) {
        criteria.push("Wesley's Theorum")
    }
    if (college[0].acceptanceRate && college[0].acceptanceRate < .10) {
        criteria.push("Exclusive Entry")
    }
    if (college[0].rankingsBestCollegeAthletics && college[0].rankingsBestCollegeAthletics.value <= 25) {
        criteria.push("Sport School")
    }
    if (college[0].totalApplicants && college[0].totalApplicants > 49999) {
        criteria.push("Fan Favorite")
    }
    const matchingCards = MyCollegeCards.filter((card) => criteria.includes(card.title));
const selectedCards = shuffle(matchingCards).slice(0, 3).map((card) => ({
  title: card.title,
  description: card.description,
  icon: <card.icon />,
}));

while (selectedCards.length < 3) {
  selectedCards.push({ title: '', description: '', icon: null });
}
function handleDelete() {
  animate();
};
return (
<div className="college-medium-container" >
  <div className="college-medium-top-shelf"> 
  <div className="college-medium-name"> <b>{college[0].name} </b></div>
  </div>
  <Divider style={{marginBottom: 5}} />
  <div style={{textAlign: 'center', fontSize: '13px', marginTop: 8, marginBottom: 0}}>Report Card</div>
  <College college={college} size={'medium'} onUpdateEndpoints={handleUpdateEndpoints}/>
  <Divider style={{marginTop: 30 }}/>
  <div className="mediumCollege-bottom">
    <Trash onClick={handleDelete} size={32}  />
    <ThumbUp size={32} />
    <ArrowsMaximize onClick={handleMaximize}size={32} />
    </div>
          {/* SAVE 
          <button onClick={handleClick} className="scores-btn"> {showSAT ? 'ACT' : 'SAT'}</button>
          <div className='medium-college-bottom-container'>
         
         <div className="scores-container">
          <CollegeScore showSAT={showSAT} satCompositeMidpoint={college[0].satCompositeMidpoint} satCompositePercentile25={college[0].satCompositePercentile25} satCompositePercentile75={college[0].satCompositePercentile75} actCumulativeMidpoint={college[0].actCumulativeMidpoint} actCumulativePercentile25={college[0].actCumulativePercentile25} actCumulativePercentile75={college[0].actCumulativePercentile75} />
          </div>
          <div className="rate-container">
          <AcceptanceRate acceptanceRate={college[0].acceptanceRate} />
          </div>
          */}
          </div>

      );
    };
    
 // Large pre-reqs

const GenderVisual = ({college}) => {
  const enrolledMen = college[0].enrolledMen;
  const enrolledWomen = college[0].enrolledWomen;
  const totalEnrolled = college[0].totalEnrolled;

  const menPercentage = (enrolledMen / totalEnrolled) * 100;
  const menCount = Math.round((menPercentage / 100) * 10);
  console.log(menCount)
  const maleIcons = Array(menCount).fill(
    <User size={42} name="male" className="gender-men" />
  );
  const femaleIcons = Array(10 - menCount).fill(
    <User size={42} name="female" className="gender-women" />
  ); 

  return (
    <div className="gender-visual">
      <div className="">
      {maleIcons}
      {femaleIcons}
      </div>
      <div style={{fontWeight: 600, fontSize: '16px', marginTop: 5}}>{totalEnrolled} enrolled students </div>
    </div>
  )
  
  };

const AcceptanceVisual = ({college}) => {
  const acceptanceRate = college[0].acceptanceRate;
  console.log(acceptanceRate)
  const acceptCount = Math.round((acceptanceRate * 10));
  console.log(acceptCount);
  const acceptIcons = Array(acceptCount).fill(
    <User size={42} name="accepted" className="accept-true" />
  );
  const deniedIcons = Array(10 - acceptCount).fill(
    <User size={42} name="denied" className="accept-false" />
  ); 

  return (
    <div className="acceptance-visual">
      <div className="">
      {acceptIcons}
      {deniedIcons}
      </div>
      <div style={{fontWeight: 600, fontSize: '16px', marginTop: 5}}>{acceptanceRate * 100}% accepted</div>
    </div>
  )
};

const GreekLifeVisual = ({ college }) => {
  let greekCount = 0;
  let greekIcons = [];
  let nonGreekIcons = [];

  if (college[0].fraternitiesPercentParticipation && college[0].sororitiesPercentParticipation) {
    const greekLife = (college[0].fraternitiesPercentParticipation + college[0].sororitiesPercentParticipation) / 2;
    greekCount = Math.round(greekLife / 10);
    greekIcons = Array(greekCount).fill(
      <User size={42} name="accepted" style={{ }} className="greek-life" />
    );
    nonGreekIcons = Array(10 - greekCount).fill(
      <User size={42} name="denied" className="non-greek-life" />
    );
  }

  return (
    <div className="">
      <div className="">
        {greekIcons}
        {nonGreekIcons}
      </div>
      <div style={{fontWeight: 600, fontSize: '16px', marginTop: 5}}>{greekCount ? `${greekCount * 10}% participate in Greek Life` : "Data unavailable"}</div>
    </div>
  );
};

// Large 

export const LargeCollege = ({ college, onDelete, handleLiked}) => {
  const [endpoints, setEndpoints] = useState([]);

  const handleUpdateEndpoints = (newEndpoints) => {
    setEndpoints(newEndpoints);
  };

    return college ? (
        <div className="large-college">
          <div style={{fontWeight: 500}} className="large-college-top-container">
            {college[0].name}
          <div className="icon-area">
          <DeleteButton onClick={onDelete}> <Eraser /> </DeleteButton>
          <LikeButton onClick={handleLiked}>  <ThumbUp /> </LikeButton>
          </div>
        </div>
        <hr />
        <div style={{textAlign: 'center', fontSize: '14px', fontWeight: 400, marginTop: 15, marginBottom: 25}}>
          <div style={{fontWeight: 400, fontSize: '13px', marginBottom: 8, color: 'gray'}}> Description </div>
          {college[0].shortDescription}
        </div>
        <hr />
        <div style={{textAlign: 'center', fontSize: '14px', fontWeight: 400, marginTop: 15, marginBottom: 10}}>
        <div style={{fontWeight: 400, marginTop: 0, fontSize: '13px', marginBottom: 3, color: 'gray'}}> Report Card </div>
        </div>
        <College college={college} onUpdateEndpoints={handleUpdateEndpoints} size="large" />
        <hr style={{marginTop: '10px', marginBottom: '18px'}} />
        <div style={{textAlign: 'center', fontSize: '14px', fontWeight: 400, marginTop: 15, marginBottom: 15}}>
    <div style={{fontWeight: 400, marginTop: 0, fontSize: '13px', marginBottom: 3, color: 'gray'}}> Population </div>
    </div>
        <Carousel showArrows={false} showIndicators={false} showStatus={false} infiniteLoop={true}  autoPlay={true} > 
          <div>
            <GenderVisual college={college} />

          </div>
          <div>
            <AcceptanceVisual college={college} />
          </div>
          <div>
   <GreekLifeVisual college={college} />
 </div>
        </Carousel>
        </div>
    ) : null;
};