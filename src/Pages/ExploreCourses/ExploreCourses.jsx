import { useEffect } from 'react';
import { useState } from 'react';
import {init_api, API} from '../../API';
import CourseCardList from '../../Components/CardList/CourseCardList';
import Nav from '../../Components/Nav/Nav';
import './ExploreCourses.css';

function ExploreCourses() {

    const [data, setData] = useState([]);

    const courseIDs = [2,3,4,5,6,7,8,9,10];

    useEffect(() => {

        const getCourseInfo = async() => {
            init_api();
            var namesTemp = [];
            var descriptionsTemp = [];
            var ids = [];
            var mapped = [];
            for (var i = 0; i < courseIDs.length; i++) {
                await API.get(`/api/courses/${courseIDs[i]}/`)
                .then((response) => {
                    console.log(response.data);
                    namesTemp.push(response.data.name);
                    descriptionsTemp.push(response.data.description);
                    ids.push(courseIDs[i]);
                });

                if (namesTemp.length === 3) {
                    mapped.push({
                        "names": namesTemp,
                        "descriptions": descriptionsTemp,
                        "ids": ids
                    });

                    namesTemp = [];
                    descriptionsTemp = [];
                    ids = [];
                }
            }

            const tempData = mapped.map((courseList) => {
                return (
                    <CourseCardList 
                    data = {{
                        "type": "course",
                        "names": courseList.names,
                        "descriptions": courseList.descriptions,
                        "ids": courseList.ids
                    }}/>
                );
            });

            setData(tempData);


        }

        getCourseInfo();
    } , []);

    return (
        <div className='explore_courses_container'>
            <Nav />
            <div style = {{
                marginTop: 200,
                marginLeft: 675
            }}>

                <h1>Explore Courses</h1>
                <div style = {{
                    position: 'relative',
                    right: 175,
                    top: 50
                }}>
                    {data}
                </div>




            </div>
        </div>
    );
};

export default ExploreCourses;