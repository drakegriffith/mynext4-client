import React from "react";
import "./Demo.css";
import TopNav from "../Nav/components/TopNav";
import {Link } from 'react-router-dom';
import { Paper } from "@mantine/core";
function Demo() {
    return (
        <div>
              <section className="demo">
        <div style={{ position: "absolute", width: "100%" }}>
          <TopNav />
        </div>
        <h4 style={{textAlign: 'center', marginBottom: 30, marginTop: '300px',top: '30%', fontSize: '24px', color: 'black'}}>Demo MyNext4</h4> 
        <Paper shadow='lg'>
        <div id='demo-nav-table' >
            
        <li id=''>
          <Link style={{textDecoration: 'none', color: 'black', fontWeight: 600}}to="/MyCourses">Courses</Link>
          </li>
    <li id=''>
      <Link style={{textDecoration: 'none', color: 'black', fontWeight: 600}}to="/MyColleges">Colleges</Link>
    </li>
    <li id=''>
      <Link style={{textDecoration: 'none', color: 'black', fontWeight: 600}} to="/MyCareer">Careers</Link>
    </li>
   
    </div>
    </Paper>
    <hr />
    <Paper shadow='lg'>
    <div id='demo-nav-table' >
     
    <li id=''>
          <Link style={{textDecoration: 'none', color: 'black', fontWeight: 600}}to="/ExploreCourses">Explore Courses</Link>
          </li>
    <li id=''>
      <Link style={{textDecoration: 'none', color: 'black', fontWeight: 600}}to="/ExploreColleges">Explore Colleges</Link>
    </li>
    <li id=''>
      <Link style={{textDecoration: 'none', color: 'black', fontWeight: 600}} to="/ExploreCareers">Explore Careers</Link>
    </li>
  
    </div>
    </Paper>
        </section>
        </div>
    )
}

export default Demo;