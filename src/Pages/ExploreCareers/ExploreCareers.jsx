import { useEffect } from 'react';
import { useState } from 'react';
import {init_api, API} from '../../API';
import CourseCardList from '../../Components/CardList/CourseCardList';
import Nav from '../../Components/Nav/Nav';
import "./ExploreCareers.css"
import { init_api_onet, API_ONET } from '../../API_ONET';

function ExploreCareers() {

    const [data, setData] = useState([]);

    const courseIDs = [1,2,3,4,5,6];

    const  test = async() => {
        
        init_api();
        await API.get("/api/career/13-2023.00/")
        .then((response) => {
            console.log(response.data.career.on_the_job.task[0]);
        })
        
    }

    

    return (
        <div className='explore_careers_container'>
            <Nav />
            <div style = {{
                marginTop: 200,
                marginLeft: 675
            }}>

                <h1>Explore Careers</h1>
                <div style = {{
                    position: 'relative',
                    right: 175,
                    top: 50
                }}>
                    {data}
                </div>




            </div>

            <button onClick={test}>Test button</button>
        </div>
    );
};

export default ExploreCareers;