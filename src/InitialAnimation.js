import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import './global.css'
import logo from "./Components/Nav/images/mynext4_anim.png"

const Animation = ({ onAnimationEnd }) => {
  const [animationFinished, setAnimationFinished] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showAlpha, setShowAlpha] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationFinished(true);
      onAnimationEnd();
    }, 10000); // Set the timeout to the total duration of the animations (8s)
    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  if (animationFinished) {
    return <Confetti numberOfPieces={100} recycle={false} />;
  }

  return (
    <div className="animation-container">
      <motion.div
        className="icon-animation"
        initial={{ opacity: 0, x:0, y:0}}
        animate={{ x: [0, 10, -10, 0], y: [0, -10, 10, 0], opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <motion.img
          src={logo}
          alt="icon"
          style={{ width: '15%' }}
          animate={showAlpha ? { opacity: 0, scale: 0 } : { scale: [0, 1.1, 1] }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
      </motion.div>
      <motion.div
        className="text-animation"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 2 }}
        onAnimationComplete={() => {
          setShowConfetti(true);
          setShowAlpha(true);
        }}
      >
        Revolutionizing college counseling
      </motion.div>
     
      {showConfetti && <Confetti numberOfPieces={100} recycle={false} />}
   
        <motion.div
          className="alpha-text"
          initial={{ opacity: 0, x:0, y:0}}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 5 }}
        >
          <p>MyNext4: <i><b>Alpha</b> Release</i> </p>
        </motion.div>
      
    </div>
  );
};

export default Animation;
