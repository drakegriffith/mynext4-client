import React from "react";
import "./Career.css";

function CareerMini(props) {
    return (
        <div className='career-mini-container'>
        <div>
            <div style={{width: '50px', height: '50px', backgroundColor: 'green'}}> C Img</div>
        </div>
        <div>
        <h4> {props.name} </h4>
        <p style={{noWrap: true}}> Salary: <i> {props.description} </i></p>
        </div>
       
        </div>
    )
}

export default CareerMini;