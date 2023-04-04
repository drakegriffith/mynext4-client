import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthContext";
import { UserContext } from "../../../Pages/App"; // Make sure to import these contexts from the correct location
import { ChevronDown } from "tabler-icons-react";
import "../NavBar.css"
function TopNav() {
  const { auth } = useContext(AuthContext);
  const { userID } = useContext(UserContext);

  return (
    <nav className="top-nav">
      <div className="container">
        <Link className="brand" to="/">
          MyNext4
        </Link>
        <div className="nav-links">
          <Link className="nav-link" to="/more">
            More with MyNext4
          </Link>
          <Link className="nav-link" to="/store">
            MyNext4 Store
          </Link>
      
          {auth ? (
            <div className="user-dropdown">
              <button className="nav-bar-button">
                <span>{userID}</span>
                <ChevronDown size={16} />
              </button>
              {/* Dropdown menu */}
              <div className="dropdown-menu">
                {/* Add dropdown items here */}
                <Link className="dropdown-item" to="/profile">
                  Profile
                </Link>
                <Link className="dropdown-item" to="/settings">
                  Settings
                </Link>
                <Link className="dropdown-item" to="/logout">
                  Sign Out
                </Link>
              </div>
            </div>
          ) : (
            <Link className="nav-link" to="/web/auth/account">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
