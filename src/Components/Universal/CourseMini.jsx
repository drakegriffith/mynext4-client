import React from "react";
import "./Class.css";

function CourseMini(props) {
    return (
        <div className='class-mini-container'>
        <div>
            <div style={{width: '50px', height: '50px', backgroundColor: 'green'}}> C Img</div>
        </div>
        <div>
        <h4> {props.name} </h4>
        <p style={{noWrap: true}}> View Description </p>
        </div>
       
        </div>
    )
}

export default CourseMini;