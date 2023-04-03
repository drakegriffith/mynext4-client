import Home from "./images/home.png"
import Course from "./images/course.png"
import College from "./images/college.png"
import Career from "./images/career.png"

import React, { useContext } from "react"
import { UserContext } from "../../Pages/App"



export const MenuItems = () => {
  const { userID } = useContext(UserContext);

  const menuItems = [
    { icon: Home, label: 'Home', url: '/' },
    { icon: Course, label: 'Courses', url: `/mycourses/${userID}` },
    { icon: College, label: 'Colleges', url: `/mycolleges/${userID}` },
    { icon: Career, label: 'Careers', url: `/mycareers/${userID}` },
  ];

  if (userID) {
    menuItems.splice(2, 0, { label: 'Profile', url: '/profile' });
  }

  return menuItems;
};


/*
const profileItem = { label: 'Profile' }; // create a placeholder profile item

if (auth && userID) {
  // if the user is authenticated and has a profile picture, add it to the menu items
  //profileItem.icon = user.profilePicture;
  profileItem.onClick = () => {
    // show the profile picture in a modal view using Mantine
    console.log('Open Mantine modal with profile picture');
  };
  menuItems.splice(2, 0, profileItem);
}
*/