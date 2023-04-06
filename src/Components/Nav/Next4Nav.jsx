import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";
import { UserContext } from "../../Pages/App"; // Make sure to import these contexts from the correct location
import { ChevronDown } from "tabler-icons-react";
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from "./SearchBar";
import Next4Logo from "./icon.png"
import "./NavBar.css"

function Next4Nav() {
  const { isAuthenticated } = useContext(AuthContext);
  const { userID, username } = useContext(UserContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropdownItems = [
    { label: 'MyAccount', path: `/my/account/${userID}` },
    { label: 'MyCourses', path: `/my/courses/${userID}` },
    { label: 'MyColleges', path: `/my/colleges/${userID}`},
    { label: 'MyCareers', path: `my/careers/${userID}` },
    { label: 'Sign Out', path: '/mods' },
  ];

  const renderDropdownItems = () => {
    return dropdownItems.map((item) => (
      <Link className="dropdown-item" to={item.path} key={item.label}>
        {item.label}
      </Link>
    ));
  };

  return (
    <nav className="navbar">
      <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        <Link className="brand" to="/">
          MyNext4
        </Link>
        <img src={Next4Logo} style={{width: '34px', height: '36px'}} />
        </div>
        <div className="nav-links">
          <Link className="nav-link" to="/more">
            More with MyNext4
          </Link>
          <Link className="nav-link" to="/store">
            MyNext4 Store
          </Link>
          <SearchBar />
          {isAuthenticated ? (
          <div className="user-dropdown">
            <button className="nav-bar-button" onClick={toggleDropdown}>
              <span>{username}</span>
              <ChevronDown size={16} />
            </button>
            {/* Dropdown menu */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  className="dropdown-menu"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  style={{ zIndex: 100 }}
                >
                  {renderDropdownItems()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
            <Link className="nav-link" to="/web/auth/account">
              Sign In
            </Link>
          )}
        </div>

    </nav>
  );
}

export default Next4Nav;
