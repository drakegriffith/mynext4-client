import React from "react";
import "./Mission.css"
function MissionMini(props) {
    return (
        <div className='mission-mini-container'>
            <div>
                <div style={{width: '50px', height: '50px', backgroundColor: 'green'}}> M Img</div>
            </div>
            <div>
            <h4> {props.name} </h4>
            <p style={{noWrap: true}}> {props.description} </p>
            </div>
           
            </div>
    )       
}

export default MissionMini;