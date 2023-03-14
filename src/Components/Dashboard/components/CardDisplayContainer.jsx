import React from "react";
import { useEffect, useState } from "react";
import {Carousel} from 'react-responsive-carousel';
import {init_API_College_AI, API_College_AI} from '../../../API_College_AI';
import CourseCardList from "../../CardList/CourseCardList";

function CardDisplayContainer() {
    const collegeIDs = [
        139931,
        110635,
        139755,
        139959,
        139861,
        139658,
        132903,
        134130,
        134097
    ];
    const [collegeNames, setCollegeNames] = useState([]);
    const [collegeDescriptions, setCollegeDescriptions] = useState([]);

    useEffect(() => {

        const getCollegeInfo = async() => {
            
            var namesTemp = [];
            var descriptionsTemp = [];
            for (var i = 0; i < collegeIDs.length; i++) {
                init_API_College_AI(collegeIDs[i], "info");
                await API_College_AI.get()
                .then((response) => {
                    const college = response.data.colleges[0];
                    namesTemp.push(college.name);
                    descriptionsTemp.push(college.shortDescription);
                });
            }
            setCollegeNames(namesTemp);
            setCollegeDescriptions(descriptionsTemp);
        }
        getCollegeInfo();
    }, []);


    return (
        <div id="dash-card-display-cont">
            <Carousel>
                <div>
                    <CourseCardList 
                    data = {{
                        "type": "college",
                        "names": [collegeNames[0], collegeNames[1], collegeNames[2]],
                        "descriptions": ["", "", ""],
                        "ids": [collegeIDs[0], collegeIDs[1], collegeIDs[2]]
                    }}/>
                </div>
                <div>
                    <CourseCardList 
                    data = {{
                        "type": "college",
                        "names": [collegeNames[3], collegeNames[4], collegeNames[5]],
                        "descriptions": ["", "", ""],
                        "ids": [collegeIDs[3], collegeIDs[4], collegeIDs[5]]
                    }}/>
                </div>
                <div>
                    <CourseCardList 
                    data = {{
                        "type": "college",
                        "names": [collegeNames[6], collegeNames[7], collegeNames[8]],
                        "descriptions": ["", "", ""],
                        "ids": [collegeIDs[6], collegeIDs[7], collegeIDs[8]]
                    }}/>
                </div>
            </Carousel>
        </div>
    )
};

export default CardDisplayContainer;
