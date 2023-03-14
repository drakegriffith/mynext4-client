import React from "react";
import {Paper, Avatar} from '@mantine/core';
import {Book2, School, Package, IdBadge2, Helmet, News, Palette, Users, BuildingCarousel, Search } from 'tabler-icons-react';
import ProgressBar from './ProgressBar';

function MissionsContainer() {
    return (

        <div id='dash-main-missions'>
          <div style={{display: 'flex'}}>
          <div id='dash-main-missions-focus'>
          <h4 id='dash-mission-title-text' style={{position: 'relative',left: '5%', top: '6%'}}> Next Mission </h4>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
          <Avatar color="violet" radius="md" style={{height: 60, marginLeft: 15, width: '10vw', marginTop: 16, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Helmet style={{width: '35px', height: '35px'}} />
          </Avatar>
          <p style={{fontSize: '16px', marginLeft: 5}}> Motorcycle Maniac </p>
          </div>
          <div style={{position: 'relative', bottom: '15%', width: '80%',  height: 20, margin: '15px 30px 0 0px'}}>
            <ProgressBar bgcolor='lightblue' progress='68' height={20} />
          </div>
          <p style={{marginTop: 0, textAlign: 'center', fontSize: '12px'}}> Complete ten motorcycle missions without any assistance at all.</p>
          <p style={{marginTop: 10, textAlign: 'center', fontSize: '16px'}}> Current completion: <b>7/10</b></p>
          </div>
         
          <div id='dash-main-missions-other'>
            <div style={{display: 'flex'}}>
              <h4> Completed  </h4>
              <h4 style={{marginLeft: 'auto', marginRight: 20}}> Upcoming </h4> 
              <h4 style={{marginLeft: 'auto', marginRight: 40}}> More </h4> 
            </div>
            <div style={{display: 'flex'}}>
              <div id='dash-main-missions-comp'>
                <div style={{display: 'flex', alignItems: 'center'}}>
              <Avatar color="red" radius="md" style={{height: 60, marginLeft: 15, width: '60px', marginTop: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Palette style={{width: '35px', height: '35px'}} />
          </Avatar>
          <p className='dash-mission-text' style={{fontSize: '12px'}}> Academic Artist</p>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
          <Avatar color="yellow" radius="md" style={{height: 60, marginLeft: 15, width: '60px', marginTop: 10, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <News style={{width: '35px', height: '35px'}} />
          </Avatar>
          <p className='dash-mission-text' style={{fontSize: '12px'}}> News Anchor</p>
          </div>
          <p style={{marginTop: 10, marginLeft: 15}}><i> See further </i></p>
              </div>
              <div id='dash-main-missions-upcoming'>
              <div style={{display: 'flex', alignItems: 'center'}}>
              <Avatar color="violet" radius="md" style={{height: 60, marginLeft: 15, width: '60px', marginTop: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Users style={{width: '35px', height: '35px'}} />
          </Avatar>
          <p className='dash-mission-text' style={{fontSize: '12px'}}> Super Student II </p>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
          <Avatar color="blue" radius="md" style={{height: 60, marginLeft: 15, width: '60px', marginTop: 10, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <BuildingCarousel style={{width: '35px', height: '35px'}} />
          </Avatar>
          <p className='dash-mission-text' style={{fontSize: '12px'}}> Career Chooser </p>
          </div>
          <p style={{marginTop: 10, marginLeft: 15}}><i> See further </i></p>
              </div>
              <div id='dash-main-missions-more'>
              <div style={{display: 'flex', alignItems: 'center'}}>
              <Avatar color="green" radius="md" style={{height: 60,  width: '60px',   display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Book2 style={{width: '35px', height: '35px'}} />
          </Avatar>
          <p> All missions</p> 
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
          <Avatar color="indigo" radius="md" style={{height: 60, marginTop: 10, width: '100px',   display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Search style={{width: '35px', height: '35px'}} />
          </Avatar>
          <p style={{width: 100}}> Search specifics</p> 
          </div>
              </div>
            </div>
        </div>
        </div>
        </div> 
    )
}

export default MissionsContainer;