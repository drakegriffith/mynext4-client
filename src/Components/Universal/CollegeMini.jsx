import React from "react";
import "./College.css";

function CollegeMini(props) {
    return (
        <div className='college-mini-container'>
        <div>
            <div style={{width: '50px', height: '50px', backgroundColor: 'green'}}> C Img</div>
        </div>
        <div>
        <h4> {props.name} </h4>
        <p style={{noWrap: true}}> Category: <i> {props.description} </i></p>
        </div>
       
        </div>
    )
}

export default CollegeMini;