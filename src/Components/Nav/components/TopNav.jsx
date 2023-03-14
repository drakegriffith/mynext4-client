import React from 'react';
import '../Nav.css'
import next4Logo from '../icon.png'
import ReactDOM from "react-dom/client";
import { Outlet, Link, Route, Routes, BrowserRouter} from "react-router-dom";
import Products from '../../Products/Products';
import About from '../../About/About';
import {useSelector} from 'react-redux';

function TopNav() {

    const auth = useSelector(state => state.user.isAuthenticated);
    

    return (
   
        <div className='top-nav'>
          <li id='link-demo'>
          <Link style={{textDecoration: 'none', color: 'white', fontWeight: 600}}to="/Demo">Demo</Link>
          </li>
    <li id='link-products'>
      <Link style={{textDecoration: 'none', color: 'white', fontWeight: 600}}to="/Products">Products</Link>
    </li>
    <li id='link-students'>
      <Link style={{textDecoration: 'none', color: 'white', fontWeight: 600}} to="/Students">Students</Link>
    </li>
    <li id='link-home' >
      <Link to='/'>
        <img src={next4Logo} id='logo-home' />
        </Link>
    </li>
    <li id='link-schools'>
      <Link style={{textDecoration: 'none', color: 'white', fontWeight: 600}} to="/SchoolSystems">Schools</Link>
    </li>
    <li id='link-about'>
      <Link style={{textDecoration: 'none', color: 'white', fontWeight: 600}} to="/About">About Us</Link>
    </li>
    <li id='link-signin'>
      <Link style={{textDecoration: 'none', color: 'white', fontWeight: 900}} to="/SignIn">Sign In</Link>
    </li>
  </div>
       
    )
}

export default TopNav;