import Nav from "../../Components/Nav/Nav";
import BasicInfo from "./Components/BasicInfo";

import TypicalUnits from "./Components/TypicalUnits";
import Resources from "./Components/Resources";
import CourseCardList from "../../Components/CardList/CourseCardList";
import {useParams} from 'react-router';
import { useEffect, useState } from "react";
import {init_api, API} from '../../API';
import './Courses.css';

function Courses() {

    const params = useParams();
    const [data, setData] = useState({});
    const [unitNames, setUnitNames] = useState([]);
    const [unitDescriptions, setUnitDescriptions] = useState([]);
    const [resourceName, setResourceName] = useState([]);
    const [resourceLink, setResourceLink] = useState([]);

    useEffect(() => {

        const getCourseData = async () => {
            init_api();
            await API.get(`/api/courses/${params.id}/`)
            .then((response) => {
                setData(response.data);
            });
        };

        

        getCourseData();
        
    }, []);

    useEffect(() => {
        const getUnitData = async() => {
            init_api();
            
            var tempUnitNames = [];
            var tempUnitDescriptions = [];
            for (var i = 0; i < data.units.length; i++) {
                await API.get(`/api/Unit/${data.units[i]}/`)
                .then((response) => {
                    tempUnitNames.push(response.data.name);
                    tempUnitDescriptions.push(response.data.description);
                });
            }
            setUnitNames(tempUnitNames);
            setUnitDescriptions(tempUnitDescriptions);
        };

        const getResourceData = async() => {
            init_api();
            var resourceNamesTemp = [];
            var resourceLinkTemp = [];
            for (var i = 0; i < data.resources.length; i++) {
                await API.get(`/api/Resources/${data.resources[i]}/`)
                .then((response) => {
                    resourceNamesTemp.push(response.data.name);
                    resourceLinkTemp.push(response.data.link);
                });
            }

            setResourceName(resourceNamesTemp);
            setResourceLink(resourceLinkTemp);
        }

        getUnitData();
        getResourceData();
    }, [data]);

   


    return (
        <div className="courses_container">
            <Nav />

            <div style = {{
                marginTop: 150,
                marginLeft: 650
            }}>
                <h1 style = {{
                    fontSize: 48
                }}>{data.name}</h1>
                
                <div style = {{
                    position: 'relative',
                    right: 350,
                    marginTop: 100
                }}>
                 
                </div>

                <div style = {{
                    marginTop: 100,
                    position: 'relative',
                    right: 170
                }}>
                    <BasicInfo 
                    ap = {data.ap}
                    honors = {data.honors}
                    duelEnrollment = {data.duelEnrollment}/>
                </div>

                <div style = {{
                    marginTop: 100,
                    position: 'relative',
                    right: 340
                }}>
                    <TypicalUnits 
                    unitNames = {unitNames}
                    unitDescriptions = {unitDescriptions}/>
                </div>

                <div style = {{
                    marginTop: 200,
                    position: 'relative',
                    right: 340
                }}>
                    <Resources 
                    names = {resourceName}
                    links = {resourceLink}/>
                </div>

                <div style = {{
                    marginTop: 200,
                    position: 'relative',
                    right: 340
                }}>
                    <p style = {{fontSize: 24, fontWeight: 'bold'}}>Similar Courses</p>

                    <CourseCardList 
                    data = {{
                        "names": ["AP Biology", "AP Physics 1", "Duel Enrollment Chemistry 2"],
                        "descriptions": ["Test 1", "Test 2", "Test 3"],
                        "type": "course",
                        "ids": [1,2,3]
                    }}/>
                    
                </div>

            </div>
        </div>
    );
};

export default Courses;