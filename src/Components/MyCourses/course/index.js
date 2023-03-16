import React from "react";
import "../MyCourses.css";

import { BoxOff, Apple, Chalkboard, Plus, Eraser, PencilPlus, InfoCircle } from "tabler-icons-react";

import { Card, Group } from "@mantine/core";
// Small College Component - C1(X)

export const SmallCourse= ({course, onDelete, onAdd}) => {
    function handleAddClick() {
        onAdd(course);
    }
    return (
        <div className="smallcollege">
            <button style={{marginLeft: '5px', border: 'none', backgroundColor: 'none', display: 'flex', justifyContent: 'center', alignItems: 'right'}} onClick={() => onDelete(course)}>
            <BoxOff size={21} style={{border: 'none'}}/>
          </button>
        
            <h4 className="smallcollege-name">{course.course_name}</h4>

            <button style={{marginRight: '5px', background: 'none', border: 'none' }}>
                <InfoCircle size={21} style={{border: 'none'}} />
            </button>
        </div>
    );
};

//Medium College Component - C1(Y)

export const MediumCourse = (props) => {
    const { course, onDelete, onAdd } = props;
    
    function handleAddClick() {
        onAdd(course);
    }
   
    
function truncateText(str, maxLength) {
  return str.length > maxLength ? str.substr(0, maxLength - 3) + "..." : str;
}
    return course ? (
        <Card shadow="sm" padding="md" className="mediumcollege" style={{backgroundColor: '#FFF'}}>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <h4 className="mediumcourse-name">   {truncateText(course.course_name, 33)}</h4>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
               <button style={{cursor: 'pointer', margin: '1px', marginRight: '1px', border: 'none', background: 'white', borderRadius: '50%', width: '25px', height: '25px'}} onClick={handleAddClick} ><PencilPlus size={23} /> </button>
               <button style={{cursor: 'pointer', margin: '1px',border: 'none', background: 'white', borderRadius: '50%', width: '25px', height: '25px'}} onClick={() => onDelete(course)}>
            <Eraser  size={23} />
          </button>
          </div>
          
          </div>
          <hr style={{marginTop: 5}}/>
          <Group position="apart" mt="md" mb="xs" style={{display: 'flex', alignItems: 'center'}}>
            <h5 style={{fontSize: '12px', margin: 0}}> Course Qualities</h5>
            <div style={{display: 'flex', justifyContent: 'right', alignItems: 'center'}}>
        
                {course && course.ap ? <Apple size={16} /> : ""}
                {course && course.honors ? <Chalkboard size={16} /> : ""}
            </div>
          </Group>
          <hr />
            <Group position="apart" mt="md" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{border: '1px solid black', width: '50px', height: '90px'}}> {course.difficulty} </div>
            <div style={{border: '1px solid black', width: '50px', height: '90px'}}> {course.field} </div>
           
            </Group>
            <div style={{position: 'absolute', bottom: 0}}>
         <InfoCircle size={24} />  
         </div>
          
        
          
        </Card>
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