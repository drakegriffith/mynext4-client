import React, { useState, useEffect, useCallback } from "react";
import "../MyComponents.css"
import "./MyCareers.css"
import { Card, Divider, Progress, Modal } from "@mantine/core";
import  { TruckDelivery, BuildingCottage, ReportSearch, ClipboardList, Wallet, ChartInfographic, Businessplan, ZoomCode, ChartBar, VirusSearch, Shield, Radar, BuildingBridge, Bulb, WindowMaximize, Settings, BuildingCommunity, CalendarTime, Leaf, Droplet, BuildingFactory, Radioactive, Biohazard, Firetruck, Sunglasses, MilitaryAward, ReportMoney, MailOpened, CreditCard, Tractor, FishHook, BuildingFactory2, Broadcast, CarCrash, AirConditioning, CircleTriangle, BuildingWarehouse, ReceiptRefund, UserCheck, FileDatabase, DeviceDesktop, School, Stethoscope, Vaccine, Nurse, Ambulance, BuildingCarousel, WorldLongitude, Assembly, CurrencyEthereum, GasStation, DeviceFloppy, Heartbeat, Cash, ReportMedical, EggFried, FileMusic } from "tabler-icons-react";
import { motion, AnimatePresence } from 'framer-motion';
import { InfoCircle, FileInfo, Wood, Search,ReportAnalytics, Poo, Cut, Paint, Track, Sailboat, Tir, UserPlus, Database, Skull, Trash, Heart, Check, LetterX, Bus, Train, Car,  Ad2, Truck, HomeDown, Lock, ScanEye, ChartPie3, Send } from 'tabler-icons-react';
import {  User, Book2, Building, Meat, Book, Calculator, Ad, Eyeglass2, Home, Code, Bolt, Robot, Disc, Atom, Map2, Diamond, Movie, Music, News, FlameOff, Flame, Spade, Gavel, Growth } from "tabler-icons-react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CAREER_ATTRIBUTES } from './careerAttributes';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const iconMapping = {
    "ReportAnalytics": <ReportAnalytics size={32} />,
    "Book": <Book size={32} />,
    "Calculator": <Calculator size={32} />,
    "Ad": <Ad size={32} />,
    "Cash": <Cash size={32} />,
    "Eyeglass2": <Eyeglass2 size={32} />,
    "TruckDelivery": <TruckDelivery size={32} />,
    "BuildingCottage": <BuildingCottage size={32} />,
    "ReportSearch": <ReportSearch size={32} />,
    "ClipboardList": <ClipboardList size={32} />,
    "Wallet": <Wallet size={32} />,
    "Home": <Home size={32} />,
    "ChartInfographic": <ChartInfographic size={32} />,
    "Businessplan": <Businessplan size={32} />,
    "Code": <Code size={32} />,
    "ZoomCode": <ZoomCode size={32} />,
    "ChartBar": <ChartBar size={32} />,
    "VirusSearch": <VirusSearch size={32} />,
    "Shield": <Shield size={32} />,
    "Radar": <Radar size={32} />,
    "BuildingBridge": <BuildingBridge size={32} />,
    "Bolt": <Bolt size={32} />,
    "Bulb": <Bulb size={32} />,
    "Robot": <Robot size={32} />,
    "WindowMaximize": <WindowMaximize size={32} />,
    "Atom": <Atom size={32} />,
    "Settings": <Settings size={32} />,
    "Map2": <Map2 size={32} />,
    "Diamond": <Diamond size={32} />,
    "ReportMedical": <ReportMedical size={32} />,
    "BuildingCommunity": <BuildingCommunity size={32} />,
    "CalendarTime": <CalendarTime size={32} />,
    "Leaf": <Leaf size={32} />,
    "EggFried": <EggFried size={32} />,
    "Droplet": <Droplet size={32} />,
    "BuildingFactory": <BuildingFactory size={32} />,
    "Books": <Book2 size={32} />,
    "School": <School size={32} />,
    "Movie": <Movie size={32} />,
    "FileMusic": <FileMusic size={32} />,
    "Music": <Music size={32} />,
    "News": <News size={32} />,
    "Radioactive": <Radioactive size={32} />,
    "Biohazard": <Biohazard size={32} />,
    "Firetruck": <Firetruck size={32} />,
    "FlameOff": <FlameOff size={32} />,
    "Flame": <Flame size={32} />,
    "Sunglasses": <Sunglasses size={32} />,
    "MilitaryAward": <MilitaryAward size={32} />,
    "Meat": <Meat size={32} />,
    "Spade": <Spade size={32} />,
    "ReportMoney": <ReportMoney size={32} />,
    "MailOpened": <MailOpened size={32} />,
    "Gavel": <Gavel size={32} />,
    "CreditCard": <CreditCard size={32} />,
    "Tractor": <Tractor size={32} />,
    "Growth": <Growth size={32} />,
    "FishHook": <FishHook size={32} />,
    "Wood": <Wood size={32} />,
    "Poo": <Poo size={32} />,
    "BuildingFactory2": <BuildingFactory2 size={32} />,
    "Broadcast": <Broadcast size={32} />,
    "CarCrash": <CarCrash size={32} />,
    "AirConditioning": <AirConditioning size={32} />,
    "Cut": <Cut size={32} />,
    "Paint": <Paint size={32} />,
    "CircleTriangle": <CircleTriangle size={32} />,
    "Track": <Track size={32} />,
    "Sailboat": <Sailboat size={32} />,
    "Tir": <Tir size={32} />,
    "BuildingWarehouse": <BuildingWarehouse size={32} />,
    "UserPlus": <UserPlus size={32} />,
    "ReceiptRefund": <ReceiptRefund size={32} />,
    "UserCheck": <UserCheck size={32} />,
    "User": <User size={32} />,
    "FileDatabase": <FileDatabase size={32} />,
    "Database": <Database size={32} />,
    "DeviceDesktop": <DeviceDesktop size={32} />,
    "Ad2": <Ad2 size={32} />,
    "School": <School size={32} />,
    "Stethoscope": <Stethoscope size={32} />,
    "Vaccine": <Vaccine size={32} />,
    "Nurse": <Nurse size={32} />,
    "Ambulance": <Ambulance size={32} />,
    "WorldLongitude": <WorldLongitude size={32} />,
    "Truck": <Truck size={32} />,
    "Bus": <Bus size={32} />,
    "Train": <Train size={32} />,
    "Car": <Car size={32} />,
    "BuildingCarousel": <BuildingCarousel size={32} />,
    "HomeDown": <HomeDown size={32} />,
    "Assembly": <Assembly size={32} />,
    "Lock": <Lock size={32} />,
    "ScanEye": <ScanEye size={24} />,
    "CurrencyEthereum": <CurrencyEthereum size={32} />,
    "ChartPie3": <ChartPie3 size={32} />,
    "GasStation": <GasStation size={24} />,
    "Disc": <Disc size={32} />,
    "Heartbeat": <Heartbeat size={32} />,
    "Skull": <Skull size={32} />,
    "Send": <Send size={32} />,
    
  };
// Small 

export const SmallCareer = ({career, onSelect,search, searchValue, showHeart, onDelete, isLiked  }) => {
  const [showModal, setShowModal] = useState(false);
  const icon = iconMapping[career.abbrev_icon];

  const handleClick = (e) => {
    if (!searchValue) {
      e.preventDefault();
      onSelect();
    }
  };

  const handleDelete = () => {
    onDelete();
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };
    return (
      <div>
      <Modal
  opened={showModal}
  onClose={handleCancel}
  title="Delete Career"
  size="xs"
  radius="md"
  hideCloseButton
>
  <div className="delete-modal-content">
    <p>Do you want to delete this career?</p>
    <div className="delete-modal-actions">
      <Check size={24}style={{cursor: 'pointer'}} onClick={handleDelete} />
      <LetterX size={24} className="cancel-icon" onClick={handleCancel} />
    </div>
  </div>
</Modal>
      <div className="small-career-container">
      <div className="icon-wrapper">{icon}</div>
      <div className="">{career.career_name}</div>
        <div>
        {
  showHeart && (

      <Heart size={32} style={{backgroundColor: 'red'}}  color="red" />
    
  )
}
<div className="icon-container" onClick={handleClick}>
      <Link to={searchValue && career && career.onet_id ? `/explore/careers/${career.id}` : "#"}>
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

function getMatchingAttributes(career) {
    

    const matchingAttributes = [];
  
    if (career.industry == "Business") {
      matchingAttributes.push(CAREER_ATTRIBUTES.isBusiness);
    }
  
    if (career.industry == "Agriculture") {
      matchingAttributes.push(CAREER_ATTRIBUTES.isAgriculture);
    }
  
    if (career.industry == "Manufacturing") {
      matchingAttributes.push(CAREER_ATTRIBUTES.isManufacturing);
    }
    if (career.industry == "Health") {
        matchingAttributes.push(CAREER_ATTRIBUTES.isHealth);
      }
    if (career.industry == "Engineering") {
        matchingAttributes.push(CAREER_ATTRIBUTES.isEngineering);
      }
      if (career.industry == "Human Resources") {
        matchingAttributes.push(CAREER_ATTRIBUTES.isHR);
      }
  
    if (career.median_salary > 60000 && career.median_salary < 89999) {
      matchingAttributes.push(CAREER_ATTRIBUTES.SixtyKClub);
    } else if (career.median_salary > 89999 && career.median_salary < 149999) {
      matchingAttributes.push(CAREER_ATTRIBUTES.NintyKClub);
    } else if (career.median_salary > 149999) {
      matchingAttributes.push(CAREER_ATTRIBUTES.OneFiftyKClub);
    }
    if (career.education == "Bachelors") {
        matchingAttributes.push(CAREER_ATTRIBUTES.FourEducated)
    } else if (career.edudcation == "Masters") {
        matchingAttributes.push(CAREER_ATTRIBUTES.SixEducated)
    } else if (career.education == "Doctorate") {
        matchingAttributes.push(CAREER_ATTRIBUTES.EightEducated)
    }
  
    return matchingAttributes;
  }
  

      // Otherwise, use the dynamic component name
   





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


export const MediumCareerActions = ({ onLargeClick, onDelete, onLike, career, largeCareerRef, index, isLiked }) => {
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
    onLike(career, score);
  };

  
  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="medium-component-actions">
       {scoreBarVisible && 
      <div>
        {isLiked && <h4 style={{textAlign: 'center', color: '#EDF2F4', marginBottom: 0}}> Update career score. </h4>}
      <ScoreBar onSelect={handleSelect} setScoreBarVisible={setScoreBarVisible} />
      </div>}
      <motion.div
        className="medium-component-card"
        onClick={toggleVisibility}
      >
         <MediumCareer
                            key={index}
                            largeCareerRef={largeCareerRef}
                            career={career}
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
           <button className="action-button" onClick={() => onLargeClick(career)}>
  <motion.div whileHover={{ scale: 1.1 }}>
    <InfoCircle className="info-icon" size={24} />
  </motion.div>
</button>
<button className="action-button" onClick={() => onDelete(career)}>
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


export const LargeCareerActions = ({ onLargeClick, onDelete, onLike, career, largeCareerRef, index, isLiked }) => {
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
    onLike(career, score);
  };

  
  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const handleLinkCareer = () => {
    navigate(`/explore/careers/${career.id}`)
  }

  return (
    <div className="large-component-actions">
      <motion.div
        className="large-component-card"
        onClick={toggleVisibility}
      >
         <LargeCareer
                        
                            largeCareerRef={largeCareerRef}
                            career={career}
                            />
      </motion.div>
      {scoreBarVisible && 
      <div>
        {isLiked && <h4 style={{textAlign: 'center', color: '#EDF2F4', marginBottom: 0}}> Update career score. </h4>}
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
  <button className="action-button" onClick={handleLinkCareer}>
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

// Medium 
export const MediumCareer = ({career, careerPage, onDelete, onLargeClick, setView, setSelectedCareer}) => {
 
const navigate = useNavigate();
const handleLinkClick = (career) => (event) => {
  event.preventDefault();
  navigate(`/explore/careers/${career.id}`);
};

return (
<Card className={careerPage ? "my-individual-component" : "my-component"} shadow="sm" padding="lg" radius="md" withBorder >
  <Card.Section className="component-medium-top-shelf" style={{padding: '10px'}}> 
  <h5 className="career-medium-name shiny-text" style={{fontSize: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center',padding: '5px', textAlign: 'center', color: '#2B2D42',marginBottom: 0}}> <b>{career.career_name} </b></h5>
  { !careerPage &&
  <div style={{position: 'absolute', right: 5, top: 5}}>
    <a href={`/explore/careers/${career.id}`} onClick={handleLinkClick(career)}>
      
       <Search />
      </a>
      </div>
}
  </Card.Section>
   
  <Divider style={{marginBottom: 5}} />
  <Card.Section style={{display: 'flex', justifyContent: 'left', width: '100%', margin: '3px auto 3px auto', height: '25px',  marginBottom: 0}}>
 {getMatchingAttributes(career).map((attribute) => {
  return (
    <div className="attribute-container">
      <div
        className="component-tokens-md"
        style={{ backgroundColor: attribute.color }}
      >
        {attribute.icon}
      </div>
  
    </div>
  );
})}
</Card.Section>
<Divider style={{marginBottom: 0, marginTop: 5}} />

<h5 className="career-bottom-container-1-head" style={{margin: '8px 0 2.0px 0', textAlign: 'center', color: 'gray', fontWeight: 500}}>Additional Attributes</h5>
<h4 className="career-bottom-container-text" style={{textAlign: 'center', margin: '10px 0 0 0', color:'gray'}}>Education</h4>
<div className="career-bottom-container-1">
    
     <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px'}}> 
        <Building size={24} />
        <p className="career-bottom-container-education" >{career.education}</p>
     </div>
    </div>
    <h4 className="career-bottom-container-text" style={{textAlign: 'center', margin: '15px 0 0 0', color:'gray'}}>Median Salary</h4>
<div className="career-bottom-container-1">
    
     <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px'}}> 
        <Cash size={24} />
        <p className="career-bottom-container-education" >$<b>{career.median_salary}</b></p>
     </div>
    </div>
          </Card>

      );
    };
    
    
 // Large pre-reqs


export const LargeCareer = ({ career, onDelete, handleLiked}) => {
  const [endpoints, setEndpoints] = useState([]);
  const [value, setValue] = useState(0);

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

    return career ? (
        <div className="large-component">
          <div style={{fontWeight: 600}} className="large-component-top-container shiny-text">
            {career.career_name}
      
        </div>
        <hr style={{marginTop: 10, marginBottom: 5}}/>
        <div style={{fontWeight: 400, fontSize: '13px', marginBottom: 8, color: 'gray'}}> Description </div>
        <p style={{fontSize: '16px', fontWeight: 400}}> {career.description} </p>
        <hr style={{marginTop: 12}} />
        <div style={{fontWeight: 400, fontSize: '13px', marginBottom: 0, marginTop: 4, color: 'gray'}}> Institute Insights </div>
    
        <div  style={{justifyContent: 'left', width: '100%',height: '50px',textAlign: 'center', fontSize: '14px', fontWeight: 400, marginTop: 5, marginBottom: 15, display: 'flex'}}>
        {getMatchingAttributes(career).map((attribute) => {
    return (
        <div className="attribute-container">
      <div
        className="component-attribute-lg"
       
        style={{ backgroundColor: attribute.color , marginRight: '5px'}}
      >
        {attribute.icon}
        <div className="attribute-tooltip">{attribute.label}</div>
      </div>
      </div>
    );
  })}
         
          
        </div>
        <hr />
       
      
        <div style={{textAlign: 'center', fontSize: '14px', fontWeight: 400, marginTop: 7.5, marginBottom: 5}}>
    <div style={{fontWeight: 400, marginTop: 0, fontSize: '13px', marginBottom: 5, color: 'gray'}}> Additional Attributes </div>
    <div style={{textAlign: 'center', height: '100px', padding: '5px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <div style={{ width: '50%', height: '100%', margin: '5px', border: '.5px solid #363636', borderRadius: '2px'}}>
      <h4 style={{margin: '5px 0 0 0'}}>Education</h4>
     <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '10px'}}> 
        <Building size={32} />
        <b>{career.education}</b>
     </div>
    </div>

    <div style={{width: '50%', height: '100%', margin: '5px', border: '.5px solid #363636', borderRadius: '2px'}}>
    <h4 style={{margin: '5px 0 0 0'}}>Median Salary</h4>
    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '10px'}}> 
        <Cash size={32} />
       <b> ${career.median_salary}</b>
     </div>
    </div>
    </div>
    <hr style={{marginTop: 10}}/>
    <div style={{fontWeight: 400, marginTop: 10, fontSize: '13px', marginBottom: 5, color: 'gray'}}> Recommended Route </div>
    <h4 style={{marginTop: 10}}> Coming Soon. </h4>
    </div>
       
    
        </div>
    ) : null;
};