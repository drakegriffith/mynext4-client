import Nav from "../../Components/Nav/Nav";
import {init_API_College_AI, API_College_AI} from '../../API_College_AI';
import {useEffect, useState} from 'react';
import CourseCardList from "../../Components/CardList/CourseCardList";
import './ExploreColleges.css'

function ExploreColleges() {
    const [data, setData] = useState([]);

    useEffect(() => {

        const getList = async() => {
            init_API_College_AI(0, "list");
            await API_College_AI.get()
            .then((response) => {
                const colleges = response.data.colleges;
                var names = [];
                var descriptions = [];
                var ids = [];
                var mapped = [];
                for (var i = 0; i < colleges.length; i++) {
                    names.push(colleges[i].name);
                    descriptions.push(colleges[i].shortDescription);
                    ids.push(colleges[i].collegeUnitId);

                    if (names.length === 3) {
                        mapped.push(
                            {
                                "names": names,
                                "descriptions": descriptions,
                                "ids": ids
                            }
                        );
                        names = [];
                        descriptions = [];
                        ids = [];
                    }
                }

                const tempData = mapped.map((collegeLists) => {
                    return (
                        <CourseCardList 
                        data = {{
                            "type": "college",
                            "names": collegeLists.names,
                            "descriptions": collegeLists.descriptions,
                            "ids": collegeLists.ids
                        }}/>
                    );
                });

                setData(tempData);
            });
        };

        getList();
    }, [])

    
    const test = () => {
        console.log(data);
    }
    return (
        <div className="explore_colleges-container">
            <Nav />
            <div style = {{
                marginTop: 200,
                marginLeft: 675
            }}>

                <h1>Explore Colleges</h1>
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

export default ExploreColleges;