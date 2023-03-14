import React from "react";

function CollegeCard(props) {
    function addCard() {
        props.addItem();
    }
    function deleteNote() {
        props.deleteCollege(props.id)
    }
    return (
        <div> 
            <h1> {props.name} </h1>
            <p> {props.acceptanceRate} </p>
            <button onClick={addCard}> Add </button>
            </div>
    )
}

export default CollegeCard;