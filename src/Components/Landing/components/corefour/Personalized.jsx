import { Bolt, Package } from 'tabler-icons-react';
import {Text, Card, Paper, Image, Avatar} from '@mantine/core';
import React from "react";

function Personalized() {
    return (
        <Card sx={{margin: '0 8em 0 auto',top: '20%', padding: 0, width: '24vw', height: '36em', backgroundSize: 'cover'}} withBorder shadow='lg' radius="md" >   

  <div style={{marginTop: '0%', position: 'relative', display: 'flex', flexDirection: 'column',  alignItems: 'center', justifyContent: 'center'}}>
  <Avatar mt={0} color="orange" style={{width: '100%', height: '14vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Bolt size={64} width={64} />
  </Avatar>
  <Paper shadow='md' style={{padding: '0 5px', marginTop: 40, width: '100%', height: '11.5vh', backgroundColor: 'white'}}>
  <h4 style={{ fontSize: '20px', textAlign: 'center', marginTop: 10, fontWeight: 400}}> Personalized picks to supplement student success.</h4>
  <p style={{fontSize: '10px', color: 'gray', textAlign: 'center', marginTop: '5px', marginBottom: '15px'}}> Complete casual surveys and allow us to find the right fits for you. It takes less than ten minutes to begin. </p>
  </Paper>
  <Paper shadow='md' style={{padding: '0 5px', marginTop: 20, width: '100%', height: '11.5vh', backgroundColor: 'white'}}>
    <Image sx={{borderRadius: '3px'}}height="210px"width="100%" src="https://images.unsplash.com/photo-1491308056676-205b7c9a7dc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3R1ZGVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
    </Paper> 
  </div>
 
 
       
      
 
    </Card>
      
    )
}


export default Personalized;