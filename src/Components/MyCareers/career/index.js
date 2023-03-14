import React from "react";
import "../MyColleges.css";
import { Plus } from "tabler-icons-react";
// Small College Component - C1(X)

export const SmallCareer= ({career, onDelete, onAdd}) => {
    function handleAddClick() {
        onAdd(career);
    }
    return (
        <div className="smallcollege">
            <button className="delete-button" onClick={() => onDelete(career)}>
            X
          </button>
            <div className="smallcollege-name">{career.career_name}</div>
        </div>
    );
};

//Medium College Component - C1(Y)

export const MediumCareer = (props) => {
    const { career, onDelete, onAdd } = props;
    
    function handleAddClick() {
        onAdd(career);
    }
   
    return career ? (
        <div className="mediumcollege">
               <button onClick={handleAddClick} ><Plus size={32} /> </button>
            <div className="mediumcollege-name">{career.career_name}</div>
            <div className="mediumcollege-description">{career.description}</div>
            <button className="delete-button" onClick={() => onDelete(career)}>
            X
          </button>
        </div>
    ) : null;
};

//Large College Component - C1(Z)

export const LargeCareer = ({ career, onAdd  }) => {
    function handleAddClick() {
        onAdd(career);
    }
    return career ? (
        <div className="largecollege">
               <button onClick={handleAddClick} ><Plus size={32} /> </button>
            <div className="largecollege-name">{career.career_name}</div>
            <div className="largecollege-description">{career.description}</div>
            <div className="largecollege-details">{career.details}</div>
           
        </div>
    ) : null;
};