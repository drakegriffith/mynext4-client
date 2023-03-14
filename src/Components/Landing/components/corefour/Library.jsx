
import {Text, Card, Paper, Image, Avatar} from '@mantine/core';
import {Beach, PencilMinus, Cash, FileCertificate, ArrowDownCircle, Search, Book, Plus, Book2,Stars, Scale, Target, BrandInstagram, BrandLinkedin, BrandTiktok, BrandTwitter, User, Car, ChartBar, ViewFinder,  Activity, Butterfly, BallBowling, Clipboard, Cookie, Database, Diamond, Flower, Chess,HandFinger, Home2, Leaf, ArrowUpRightCircle, Backpack,Atom, Star, School, StarHalf, ArrowBigRight, ChartCircles, MoodUnamused, CameraRotate ,Numbers, MathIntegrals, Globe,ArrowDown, BoxMultiple1, Certificate, BoxMultiple2, BoxMultiple3, CircleSquare, MoodSmileBeam, Books,  MathFunction, Flask2, Cell, Bong, Microscope, Language, MathMin, Anchor, Backhoe, Apple, Aperture, MathXPlusY, Plant2, Bug, ChefHat, DeviceDesktop, FileCode, Gavel, AlertTriangle, Apps} from 'tabler-icons-react'
import React from "react";

function Library() {
    return (
      
            
        <Card sx={{margin: '0 8em 0 auto',top: '20%', padding: 0, width: '24vw', height: '36em', backgroundSize: 'cover'}} withBorder shadow='lg' radius="md" >   

  <div style={{marginTop: '0%', position: 'relative', display: 'flex', flexDirection: 'column',  alignItems: 'center', justifyContent: 'center'}}>
  <Avatar mt={0} color="violet" style={{width: '100%', height: '14vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Book2 size={64} width={64} />
  </Avatar>
  <Paper shadow='md' style={{padding: '0 5px', marginTop: 40, width: '100%', height: '11.5vh', backgroundColor: 'white'}}>
  <h4 style={{ fontSize: '20px', textAlign: 'center', marginTop: 10, marginBottom: 0, fontWeight: 400}}> Explore over 2000+ academic cards <span style={{fontWeight: 800}} > free </span>.</h4>
  <p style={{fontSize: '10px', color: 'gray', textAlign: 'center', marginTop: '5px', marginBottom: '15px'}}> Access any academic resource you require at anytime. Search simply with our filter feature and other options.</p>
  </Paper>
  <Paper shadow='md' style={{padding: '0 5px', marginTop: 20, width: '100%', height: '10.5vh', backgroundColor: 'white'}}>
    <Image sx={{borderRadius: '3px'}} height="210px" width="100%"  src="https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
    </Paper> 
  </div>
 
 
       
      
 
    </Card>
      
    )
}


export default Library;