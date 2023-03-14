import React from "react";
import "../MyColleges.css";
import { Plus } from "tabler-icons-react";
// Small College Component - C1(X)

export const SmallCourse= ({course, onDelete, onAdd}) => {
    function handleAddClick() {
        onAdd(course);
    }
    return (
        <div className="smallcollege">
            <button className="delete-button" onClick={() => onDelete(course)}>
            X
          </button>
            <div className="smallcollege-name">{course.course_name}</div>
        </div>
    );
};

//Medium College Component - C1(Y)

export const MediumCourse = (props) => {
    const { course, onDelete, onAdd } = props;
    
    function handleAddClick() {
        onAdd(course);
    }
   
    return course ? (
        <div className="mediumcollege">
               <button onClick={handleAddClick} ><Plus size={32} /> </button>
            <div className="mediumcollege-name">{course.course_name}</div>
            <div className="mediumcollege-description">{course.description}</div>
            <button className="delete-button" onClick={() => onDelete(course)}>
            X
          </button>
        </div>
    ) : null;
};

//Large College Component - C1(Z)

export const LargeCourse = ({ course, onAdd  }) => {
    function handleAddClick() {
        onAdd(course);
    }
    return course ? (
        <div className="largecollege">
               <button onClick={handleAddClick} ><Plus size={32} /> </button>
            <div className="largecollege-name">{course.name}</div>
            <div className="largecollege-description">{course.description}</div>
            <div className="largecollege-details">{course.details}</div>
           
        </div>
    ) : null;
};