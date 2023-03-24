import { Timeline, Text } from '@mantine/core';
import {Number1} from 'tabler-icons-react';
import "./CareerEducation.css";
import CourseCardList from "../../../Components/CardList/CourseCardList";
import { useState } from 'react';

function CareerEducation() {

    const courseNames = [
        'AP Calculus BC',
        'AP Physics 1',
        'AP Chemistry'
    ];

    const courseDescriptions = [
        'Explore the concepts, methods, and applications of differential and integral calculus, including topics such as parametric, polar, and vector functions, and series. You’ll perform experiments and investigations and solve problems by applying your knowledge and skills.',
        'Learn about the foundational principles of physics as you explore Newtonian mechanics; work, energy, and power; mechanical waves and sound; and introductory, simple circuits. You’ll do hands-on laboratory work to investigate phenomena.',
        'Learn about the fundamental concepts of chemistry including structure and states of matter, intermolecular forces, and reactions. You’ll do hands-on lab investigations and use chemical calculations to solve problems.'
    ];

    const collegeNames = [
        'Georgia Tech',
        'Perdue',
        'Emory'
    ];

    const collegeDescriptions = [
        'The Georgia Institute of Technology is one of the nations top public research universities with nearly 40,000 students who study in person at the main campus in Atlanta, at Georgia Tech-Lorraine in France, at Georgia Tech-Shenzhen in China, as well as through distance and online learning.',
        'Purdue University—West Lafayette is a public institution that was founded in 1869. It has a total undergraduate enrollment of 37,101 (fall 2021), its setting is city, and the campus size is 2,468 acres. It utilizes a semester-based academic calendar.',
        'Emory University is a leading research university, recognized internationally for its outstanding liberal arts colleges, graduate and professional schools, and one of the nations most comprehensive academic health care systems.'
    ];

    const careerNames = [
        'Construction & Building Inspectors',
        'Construction Managers',
        'Transportation Engineers'
    ];

    const careerDescriptions = [
        'Performs limited professional trade and/or certification inspections of new, existing, and damaged residential and commercial structures for conformance to codes, amendments, ordinances, regulations, specifications, and standards.',
        'Construction managers, often called general contractors or project managers, coordinate and supervise a variety of projects, including building public, residential, commercial, and industrial structures as well as roads and bridges.',
        'Inspect equipment or goods in connection with the safe transport of cargo or people. Includes rail transportation inspectors, such as freight inspectors, rail inspectors, and other inspectors of transportation vehicles not elsewhere classified.'
    ];

    const [active, setActive] = useState(0);
    const [names, setNames] = useState(courseNames);
    const [descriptions, setDescriptions] = useState(courseDescriptions);
    const [type, setType] = useState("course");

    const bulletClick = (name) => {
        
        if(name === "Courses") {
            setActive(0);
            setNames(courseNames);
            setDescriptions(courseDescriptions);
            setType("course");
            
        } else if (name === "College") {
            setActive(1);
            setNames(collegeNames);
            setDescriptions(collegeDescriptions);
            setType("college")
            
        } else if (name === "Career") {
            setActive(2);
           
        } else {
            setActive(3);
            setNames(careerNames);
            setDescriptions(careerDescriptions);
            setType("career");
            
        }
    };

    return (
        <div className='career_education_root'>
            <Timeline active={active} bulletSize={24} lineWidth={2}>
                <Timeline.Item bullet={<Number1 size={12} />} title="Courses"
                onClick={() => bulletClick("Courses")}>
                    <Text color="dimmed" size="sm">Take STEM courses such as AP Calculus BC</Text>
                    <Text color="dimmed" size = "sm">and AP Physics 1 in highschool</Text>
                </Timeline.Item>

                <Timeline.Item bullet={<Number1 size={12} />} title="College"
                onClick={() => bulletClick("College")}>
                    <Text color="dimmed" size="sm">Attend a 4-year university and complete a degree</Text>
                </Timeline.Item>

                <Timeline.Item title="Career" bullet={<Number1 size={12} />} lineVariant="dashed"
                onClick={() => bulletClick("Career")}>
                    <Text color="dimmed" size="sm">Upon graduation, celebrate your accomplishment</Text>
                    <Text color = "dimmed" size = "sm">and pursue your career</Text>
                </Timeline.Item>

                <Timeline.Item title="Pivot" bullet={<Number1 size={12} />}
                onClick={() => bulletClick("Pivot")}>
                    <Text color="dimmed" size="sm">If this career isn't right for you, pivot to a similar career</Text>
                </Timeline.Item>
            </Timeline>

            <div className='career_education_cards'>
                <CourseCardList 
                data = {{
                    "names": names,
                    "descriptions": descriptions,
                    "type": type,
                    "ids": [0,0,0]
                }}/>
            </div>
        </div>
    );
};

export default CareerEducation;