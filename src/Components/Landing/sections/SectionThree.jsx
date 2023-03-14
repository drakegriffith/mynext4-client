import react from 'react'
import { Avatar, Paper} from '@mantine/core';
import '../Landing.css'
import {Beach, Search, Book, Plus, Book2,Stars, Scale, Target, BrandInstagram, BrandLinkedin, BrandTiktok, BrandTwitter, User, Car, ChartBar, ViewFinder,  Activity, Butterfly, BallBowling, Clipboard, Cookie, Database, Diamond, Flower, Chess,HandFinger, Home2, Leaf, ArrowUpRightCircle, Backpack,Atom, Star, School, StarHalf, ArrowBigRight, ChartCircles, MoodUnamused, CameraRotate ,Numbers, MathIntegrals, Globe,ArrowDown, BoxMultiple1, Certificate, BoxMultiple2, BoxMultiple3, CircleSquare, MoodSmileBeam, Books,  MathFunction, Flask2, Cell, Bong, Microscope, Language, MathMin, Anchor, Backhoe, Apple, Aperture, MathXPlusY, Plant2, Bug, ChefHat, DeviceDesktop, FileCode, Gavel, AlertTriangle, HandClick, MoodSadDizzy, MathSymbols, Ghost, Planet} from 'tabler-icons-react'

function SectionThree() {
    return (
        <section style={{ width: 'inherit', marginBottom: '20px'}}  id='section-3' >
                 
                 <h3 style={{fontSize: '25px', marginLeft: '50px', marginTop: '40px'}}> Detailed descriptions on any subject. </h3>
        <p style={{ fontSize: '14px',marginLeft: '50px', marginTop: '10px', marginBottom: '30px', color: 'gray'}}> Find the best fit for you with insightful information on any academic card. </p>
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          <Paper shadow='md' radius='md' sx={{ width: '25vw', height: '550px' , marginTop: '50px'}}>
            <div style={{marginTop: '20px', width: 'inherit'}}>
              <div style={{backgroundColor: '#99e2b4', display: 'flex', alignItems: 'center', borderRadius: '3px', height: '75px', margin: '15px 10px'}}>
    
            <Avatar style={{marginLeft: 15, marginRight: 15}}color='green' radius='md'>
                    <Flask2 style={{color: '#212529'}} width={50} />
                    </Avatar>
                    <h4 style={{marginLeft: 10, margin: 0}}> Chemistry </h4>
                </div>
                <div style={{backgroundColor: '#88d4ab', display: 'flex', alignItems: 'center',borderRadius: '3px', height: '75px', margin: '15px 10px'}}>
                <Avatar style={{marginLeft: 15, marginRight: 15}}color='green' radius='md'>
                    <Plant2 style={{color: '#212529'}} width={50} />
                    </Avatar>
                    <h4 style={{marginLeft: 10, margin: 0}}> AP Biology </h4>
                </div>
                <div style={{display: 'flex', alignItems: 'center', backgroundColor: '#67b99a',borderRadius: '3px', height: '75px', margin: '10px 10px'}}>
                <Avatar style={{marginLeft: 15, marginRight: 15}}color='blue' radius='md'>
                    <MathFunction style={{color: '#212529'}} width={50} />
                    </Avatar>
                    <h4 style={{marginLeft: 10, margin: 0}}> Pre-Calculus </h4>
                </div>
                <div style={{display: 'flex', alignItems: 'center',backgroundColor: '#469d89',borderRadius: '3px', height: '75px', margin: '10px 10px'}}>
                <Avatar style={{marginLeft: 15, marginRight: 15}}color='blue' radius='md'>
                    <Globe style={{color: '#212529'}} width={50} />
                    </Avatar>
                    <h4 style={{marginLeft: 10, margin: 0}}> World History II </h4>
                </div>
                <div style={{display: 'flex', alignItems: 'center',backgroundColor: '#248277',borderRadius: '3px', height: '75px', margin: '10px 10px'}}>
                <Avatar style={{marginLeft: 15, marginRight: 15}}color='indigo' radius='md'>
                    <Numbers style={{color: '#212529'}} width={50} />
                    </Avatar>
                    <h4 style={{marginLeft: 10, margin: 0}}> AP Statistics </h4>
                </div>
                <div style={{display: 'flex', alignItems: 'center',backgroundColor: '#036666',borderRadius: '3px', height: '75px', margin: '15px 10px'}}>
                <Avatar style={{marginLeft: 15, marginRight: 15}}color='indigo' radius='md'>
                    <Book style={{color: '#212529'}} width={50} />
                    </Avatar>
                    <h4 style={{marginLeft: 10, margin: 0}}> English II</h4>
                </div>
    
              </div>
            </Paper>
          <Paper shadow='md' p='lg' radius='md'sx={{ marginTop: '50px', width: '60vw', height: '580px'}}>
            <div style={{  height: '100%'}}>
            
           
            <div style={{ marginBottom: 20,  display: 'flex', alignItems: 'center', height: '75px', margin: '15px 10px'}}>
        
            <h4 style={{fontSize: '24px', marginLeft: 22, marginBottom: 0}}> Chemistry </h4>
    <Avatar size={60}style={{marginLeft: 25, marginRight: 10}}color='green' radius='md'>
            <Flask2 style={{color: '#212529'}} width={50} />
            </Avatar>
          
          <div style={{marginRight: '1px', display: 'flex', alignItems: 'center'}}>
            <Avatar size={60} style={{marginLeft: 15, marginRight: 15}} color='green' radius='md'>
            <p style={{fontSize: '24px'}}>7.2</p>
            </Avatar>
            <Avatar size={60} style={{marginLeft: 10, marginRight: 15}} color='orange' radius='md'>
            <p style={{fontSize: '24px'}}>84</p>
            </Avatar>
          
            </div>
            <ArrowUpRightCircle size={36} style={{marginLeft: 'auto', marginRight: 15}} />
        
           
          
          
        </div>
        <div style={{ marginLeft: 25, marginTop: 25}}> 
        <div style={{padding: '5px'}}>
          <div style={{marginBottom: 15,display: 'flex', alignItems: 'center'}}>
          <h4 style={{marginBottom: 0, marginRight: 8}}> Student Ratings </h4>
          <p style={{color: 'gray'}}> <i>on Average</i> </p>
        </div>
        <div style={{marginBottom: 20, display: 'flex', alignItems: 'center'}}>
          <h4 style={{margin: 0,  marginRight: 5}}> <i> Course difficulty: </i> </h4>
          <p style={{fontSize: '20px'}}>⭐⭐⭐</p>
          </div>
          <div style={{marginBottom: 20, display: 'flex', alignItems: 'center'}}>
          <h4 style={{margin: 0,  marginRight: 5}}> <i>Course workload:</i> </h4>
          <p style={{fontSize: '20px'}}>⭐⭐⭐</p>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
          <h4 style={{margin: 0, marginRight: 5}}><i> Course concepts:</i> </h4>
          <p style={{fontSize: '20px'}}>⭐⭐⭐⭐</p>
          </div>
          </div>
      
          <div style={{position: 'relative', bottom: 160, left: '285px', width: '330px', marginRight: 0, height: '120px'}}> 
          <h4 style={{marginBottom: 0, marginBottom: 20, marginRight: 10,fontWeight: 700}}> <b> Course Critique </b> </h4>
          <div style={{display: 'flex', marginBottom: 0, alignItems: 'center'}}>
       
          <p style={{color: 'gray'}}> <i>from ChemChosen13</i></p>
          <Star style={{marginBottom:3, marginLeft: 5}}size={14} />
          </div>
          <div id='course-critique-container'>
          <p style={{marginBottom: 8,fontSize: '12px', color: 'gray'}}> Chemestry is a challenge course for almost all students. The content is rigourous and asks for an exceptional amount of work from the student.
            It's important to continue to complete coursework and stay on top with the material, as later units build on beginning concepts. Good luck to all who accept the challenge of high school chemistry. </p>
            <p style={{cursor: 'clicker'}}> <i> More comments </i> </p>
            </div>
            <div id='course-attributes'> 
          <h4 style={{marginBottom: 0, marginBottom: 10,textAlign: 'center',  marginRight: 10,fontWeight: 700}}> <b> Academic Attributes </b> </h4>
            <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
              <div >
              <div style={{display: 'block'}}>
            <Avatar size={60} style={{marginLeft: 5, marginRight: 5}} color='red' radius='md'>
            <MoodSadDizzy />
            </Avatar>
            <p style={{textAlign: 'center'}}>Challenging </p>
            </div>
            <div style={{display: 'block'}}>
            <Avatar size={60} style={{marginLeft: 5, marginRight: 5, marginTop: 10}} color='green' radius='md'>
            <MathSymbols />
            </Avatar>
            <p style={{textAlign: 'center'}}> STEM </p>
            </div>
            </div>
            <div>
            <div style={{display: 'block'}}>
            <Avatar size={60} style={{marginLeft: 5, marginRight: 5}} color='yellow' radius='md'>
            <HandClick />
            </Avatar>
            <p style={{textAlign: 'center'}}> Hands On</p>
            </div>

            <div style={{display: 'block'}}>
            <Avatar size={60} style={{marginLeft: 5, marginRight: 5,  marginTop: 10}} color='orange' radius='md'>
            <Ghost />
            </Avatar>
            <p style={{textAlign: 'center'}}> Conceptual</p>
            </div></div></div>
          </div>

          <div id='course-similar'> 
          <h4 style={{marginBottom: 0, marginBottom: 10, textAlign: 'center', marginRight: 10,fontWeight: 700}}> <b> Similar Courses </b> </h4>
            <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
              <div >
              <div style={{display: 'block'}}>
            <Avatar size={60} style={{marginLeft: 5, marginRight: 5}} color='green' radius='md'>
            <Bong />
            </Avatar>
            <p style={{textAlign: 'center'}}>AP Chemistry </p>
            </div>
            <div style={{display: 'block'}}>
            <Avatar size={60} style={{marginLeft: 5, marginRight: 5, marginTop: 10}} color='green' radius='md'>
            <Activity />
            </Avatar>
            <p style={{textAlign: 'center'}}> Biology </p>
            </div>
            </div>
            <div>
            <div style={{display: 'block'}}>
            <Avatar size={60} style={{marginLeft: 5, marginRight: 5}} color='blue' radius='md'>
            <Planet />
            </Avatar>
            <p style={{textAlign: 'center'}}> Physics </p>
            </div>

            <div style={{display: 'block'}}>
            <Avatar size={60} style={{marginLeft: 5, marginRight: 5,  marginTop: 10}} color='indigo' radius='md'>
            <Planet />
            </Avatar>
            <p style={{textAlign: 'center'}}> Physics II</p>
            </div></div></div>
          </div></div>

          
      
      
              
              </div>
        
              </div>
            </Paper>
          </div>
          </section>
    )
}


export default SectionThree;