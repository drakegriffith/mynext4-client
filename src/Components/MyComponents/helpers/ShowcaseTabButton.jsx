import React from "react";
import { Box, Packages} from "tabler-icons-react"
import { motion } from "framer-motion";
import "../MyComponents.css"

const ShowcaseTabButton = ({ activeTab, onChange, setView }) => {

  const handleTabClick = (tab) => {
    onChange(tab);
    setView(activeTab === "large" ? "medium" : "large");
  };
  

  const iconVariants = {
    inactive: { scale: 1 },
    hover: { scale: 1.2 },
    active: { scale: 1.3 },
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
        <Box size={24} />
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
        <Packages size={24}/>
      </motion.div>
    </div>
  );
};

ShowcaseTabButton.defaultProps = {
    onChange: () => {},
  };

export default ShowcaseTabButton;
