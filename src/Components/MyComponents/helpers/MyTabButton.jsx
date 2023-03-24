import React, { useState } from "react";
import { Home2 as HomeIcon, Bookmarks as BookmarksIcon } from "tabler-icons-react"
import { motion } from "framer-motion";
import "../MyComponents.css"

const MyTabButton = ({ activeTab, onChange }) => {

  const handleTabClick = (tab) => {
    onChange(tab);
  };
  

  const iconVariants = {
    inactive: { scale: 1 },
    hover: { scale: 1.2 },
  
  };

  return (
    <div className="tab-button-container">
      <motion.div
        className="tab-icon-wrapper"
        whileHover="hover"
        onClick={() => handleTabClick("home")}
        initial="inactive"
        animate={activeTab === "home" ? "active" : "inactive"}
        variants={iconVariants}
      >
        <HomeIcon size={24} />
      </motion.div>
      <div className="slash">/</div>
      <motion.div
        className="tab-icon-wrapper"
        whileHover="hover"
        onClick={() => handleTabClick("bookmarks")}
        initial="inactive"
        animate={activeTab === "bookmarks" ? "active" : "inactive"}
        variants={iconVariants}
      >
        <BookmarksIcon size={24}/>
      </motion.div>
    </div>
  );
};

MyTabButton.defaultProps = {
    onChange: () => {},
  };

export default MyTabButton;
