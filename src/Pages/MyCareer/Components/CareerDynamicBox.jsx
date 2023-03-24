import './CareerDynamicBox.css';
import {
    CloudComputing,
    Propeller,
    ShieldCheck,
    ShieldX}
    from 'tabler-icons-react';

import {List} from '@mantine/core';
import {Progress, Spoiler} from '@mantine/core';
import RefreshCardSection from '../../../Components/CollegeCard';
import { useEffect, useState } from 'react';
import { API, init_api } from '../../../API';
import {useSelector} from 'react-redux';
import {Pie, PieChart, Tooltip} from 'recharts';
import {Link} from 'react-router-dom';
/*
@returns:
@Value: root div-> the root div holding the entire component. Styled
by root in CSS file
@Value: title div -> div holding title and icon, with proper alignment
and spacing done by CSS
@Value progressBar div -> div holding progress bar. Necessary since the 
progress bar will take up the entire div, so width must be updated specifically for the progress bar
@Value mainList div -> div holding the list format of information
@Value refreshCollegeCards div -> holding h3 header element displaying text and RefreshCardSection custom component
*/
function CareerDynamicBox() {

    const careerID = useSelector(state => state.career.mainCareer);
    
    

    //const [res, setRes] = useState(null);
    let res;
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [annualSalary, setAnnualSalary] = useState(0);
    const [hourlySalary, setHourlySalary] = useState(0);
    const [degree, setDegree] = useState("");
    const [techSkill1, setTechSkill1] = useState("");
    const [techSkill2, setTechSkill2] = useState("");
    const [industry, setIndustry] = useState([]);

    
    useEffect(() => {
        
        const fetchCareerData = async() => {
            
            init_api();
            const promise = API.get(`/api/career/${careerID}/`)
            promise.then((response) => {
                //setRes(response.data);
                res = response.data;
                setName(res.name);
                setDescription(res.what_they_do);
                setAnnualSalary(res.annual_median);
                setHourlySalary(res.hourly_median);
                setDegree(res.avg_degree);
                setTechSkill1(res.tech_1);
                setTechSkill2(res.tech_2);
                setIndustry([
                    {
                        "name": res.industry_1_name,
                        "value": res.industry_1_percent
                    },
                    {
                        "name": res.industry_2_name,
                        "value": res.industry_2_percent
                    },
                    {
                        "name": res.industry_3_name,
                        "value": res.industry_3_percent
                    }
                ])
                
            });
        };

        


        fetchCareerData();

    });
    

    const test = () => {
        console.log(name);
    }
    
    //const name = res.name;

    const industries = [
        {
            "name": "Professional, Science, and Technical",
            "value": 54
        },
        {
            "name": "Government",
            "value": 25
        },

        {
            "name": "Construction",
            "value": 12
        }
    ]
    
    return (
        <div className='root'> 
            
            <div className="title">
                <Link to = {`/Careers/${careerID}`}
                style = {{
                    fontSize: 42,
                    fontWeight: 'bold'
                }}>{name}</Link>
                    <CloudComputing 
                    size={48}
                    strokeWidth={2}
                    color={'black'}
                    />
            </div>


            <div className= "progressAndText">
                <div className= "progressBar">
                    <Progress 
                    radius={"md"} 
                    size={"xl"} 
                    value = {50}></Progress>                
                </div>
                <p data-testid = "CBD-InterestScore"> 50% Interest Match! </p>
            </div>

            <div>
                <p style = {{
                    fontSize: 18,
                    fontWeight: 'bold'
                }}>Description</p>
                <Spoiler
                maxHeight={24}
                showLabel={"Show more"}
                hideLabel={"Show less"}
                style = {{
                    marginTop: 10
                }}>
                    {description}
                </Spoiler>
            </div>

            <div style = {{
                marginTop: 35,
                display: "flex",
                flexDirection: "row"
            }}>

                <div>
                    <p style = {{
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}>Average Annual Salary</p>
                    <p style={{
                        fontSize: 16,
                        marginTop:5
                    }}>{annualSalary}</p>
                </div>

                <div style = {{
                    marginLeft: 50
                }}>
                    <p style = {{
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}>Average Hourly Salary</p>
                    <p style = {{
                        fontSize: 16,
                        marginTop: 5
                    }}>{hourlySalary}</p>
                </div>

                

            </div>
        
        <div style = {{
            display: "flex",
            flexDirection: "row"
        }}>
        <div>
            <div style = {{
                marginTop: 35
            }}>
                    <p style = {{
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}>Average degree earned</p>

                    <p style = {{
                        fontSize: 16,
                        marginTop: 5
                    }}>{degree}</p>
                </div>

                <div style = {{
                    marginTop: 50
                }}>
                    <p style = {{
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}>Technology Skills</p>
                    <ul style = {{
                        marginTop: 5
                    }}>
                        <li>{techSkill1}</li>
                        <li>{techSkill2}</li>
                    </ul>
                </div>
            </div>

            <div style = {{
                marginLeft: 150,
                marginTop: 35
            }}>
                <p style = {{
                    fontSize: 18,
                    fontWeight: 'bold'
                }}>Industry Breakdown</p>
                <PieChart width = {150} height = {150}>
                    <Tooltip />
                    <Pie data = {industry} dataKey={"value"} nameKey={"name"} fill={"#8884d8"}/>
                </PieChart>
            </div>
            </div>


            <div className="refreshCollegeCards"> 

            
                    

            </div>

            
                
            
           


           
            
           
        </div>

        
    );
};

export default CareerDynamicBox;

