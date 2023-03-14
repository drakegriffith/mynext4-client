import React from "react";
import { Image, Paper } from '@mantine/core';
import "../About.css";
import { Circle1, Circle2, Circle3 } from "tabler-icons-react";

function MainMethods() {
    return (
        <Paper shadow='lg' id='about-mm-container'>
            <h2 style={{paddingTop: 50, textAlign: 'center'}}> Our overall mission: Ensuring student success</h2> 
            <p style={{marginTop: 5, fontSize: '16px', textAlign: 'center'}}> We plan to help every student reach their success in three ways.</p>
            <div style={{justifyContent: 'center', marginTop: 45,  display: 'flex', alignItems: 'center'}}>
                <Circle1 size={36} />
                <div>
                    <p style={{marginLeft: 10, fontSize: '16px', fontWeight: 800}}> Access any academic card automatically. </p>
                    <p style={{marginLeft: 10, fontSize: '12px'}}> Explore over 3000+ different course, college, or career cards for free at any time.  </p>
                </div>
            </div>
            <div style={{justifyContent: 'center', marginTop: 45,  display: 'flex', alignItems: 'center'}}>
                <Circle2 size={36} />
                <div>
                    <p style={{marginLeft: 10, fontSize: '16px', fontWeight: 800}}> Personalized picks to suit every student specifically. </p>
                    <p style={{marginLeft: 10, fontSize: '12px'}}> Specify search results with ten minute surveys made to help specify what you want. </p>
                </div>
               
            </div>
            <div style={{justifyContent: 'center', marginTop: 45,  display: 'flex', alignItems: 'center'}}>
                <Circle3 size={36} />
                <div>
                    <p style={{marginLeft: 10, fontSize: '16px', fontWeight: 800}}> Supplemental resources to complement course studying. </p>
                    <p style={{marginLeft: 10, fontSize: '12px'}}> Every course card comes along with additional resources to help with understanding.</p>
                </div>

            </div>
            <div style={{marginTop: 10, padding: 20, height: '250px'}}>
                <Image height='150px' sx={{borderRadius: '6px'}} src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            </div>
            </Paper>
    )
}

export default MainMethods;