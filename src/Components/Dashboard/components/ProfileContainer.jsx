import React from "react";
import "../DashboardStyles.css";
import {Paper, Avatar} from '@mantine/core';
import ProgressBar from './ProgressBar';
import {Book2, School, Package, IdBadge2, Helmet, Mail, Pyramid, Notebook, InfoCircle } from 'tabler-icons-react';
function ProfileContainer() {
    return (
    
        <div id='dash-main-profcont' style={{padding: 10}}>
            <div id='dash-main-pfp'>
            <h4 style={{margin: 0, position: 'relative', width: '160px'}}> Superb Student II</h4>
            <Avatar color="green" radius="md" style={{height: '50px', width: '50px', marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <School style={{width: '35px', height: '35px'}} />
          </Avatar>
          <div id='dash-progressbar-container' style={{position: 'absolute', right: '10%',  bottom: '90%', width: '13vw', height: 40}}>
                <ProgressBar bgcolor='lightgreen' progress='83' height={20}/>
          </div>
            </div>
            <div style={{marginTop: 15, display: 'flex', position: 'relative'}}>
            <Avatar color="red" radius="md" style={{ height: 120, width: '6vw', marginTop: 8, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Mail className='dash-main-icon' style={{width: '36px'}} />
             
          </Avatar>
          <Avatar color="yellow" radius="md" style={{ height: 120, width:  '6vw', marginTop: 8, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Pyramid className='dash-main-icon' style={{width: '36px'}} />
            
          </Avatar>
       
          
          <Avatar color="green" radius="md" style={{ height: 120, width:'6vw',marginTop: 8, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Notebook className='dash-main-icon' style={{width: '36px'}} />
            
          </Avatar>
          <Avatar color="blue" radius="md" style={{height: 120, width: '6vw', marginTop: 8, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <InfoCircle className='dash-main-icon' style={{width: '36px'}} />
              
          </Avatar>
          
          
          </div>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <h4> Mail </h4>
          <h4> Resources </h4>
          <h4> Scrapbook </h4>
          <h4> Info. </h4> 
          </div> 
            </div>
          
    )
}

export default ProfileContainer;
