import React from "react";
import '../DashboardStyles.css';
import {Paper, Avatar } from "@mantine/core";
import {Book2, School, Package, IdBadge2, Helmet } from 'tabler-icons-react';
function CoreComponents() {
    return (
        <Paper shadow='lg'>
        <div id='dash-main-listbox'>
        <div>
      <Avatar color="red" radius="md" style={{ height: 100, width: '10vw', marginTop: 8, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Book2 className='dash-main-icon' style={{width: '36px'}} />
              <p className='dash-main-ptag'> MyCourses </p>
          </Avatar>
          <Avatar color="yellow" radius="md" style={{ height: 100, width:  '10vw', marginTop: 8, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <IdBadge2  className='dash-main-icon' style={{width: '36px'}} />
             <p className='dash-main-ptag'> MyCareers </p>
          </Avatar>
          </div>
          <div>
          <Avatar color="green" radius="md" style={{ height: 100, width:'10vw',marginTop: 8, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <School className='dash-main-icon' style={{width: '36px'}} />
              <p className='dash-main-ptag'> MyColleges </p>
          </Avatar>
          <Avatar color="blue" radius="md" style={{height: 100, width: '10vw', marginTop: 8, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Package className='dash-main-icon' style={{width: '36px'}} />
              <p className='dash-main-ptag'> Liked List </p>
          </Avatar>
          </div>
      </div>
      </Paper>
    )
}

export default CoreComponents;