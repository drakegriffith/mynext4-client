
import { useEffect, useState } from "react";
import "./Careers.css";
import { Spoiler, Modal, Button, Paper } from '@mantine/core';
import ListItem from "./Components/ListItems";
import DescriptionPop from "./Components/DescriptionPop";
import SidePicker from "./Components/SidePicker";
import AccordionCustom from "./Components/AccordionCustom";
import CareersTraits from "./Components/CareerTraits";
import TechSkills from "./Components/TechSkills";
import CareerEducation from "./Components/CareerEducation";
import SalaryCharts from "./Components/SalaryCharts";
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";
import CareerOutlook from "./Components/CareerOutlook";
import CourseCardList from "../../Components/CardList/CourseCardList";
import {init_api} from "../../API";
import {API} from "../../API";
import { useSelector } from "react-redux";
import { setAutoFreeze } from "immer";
import { useParams } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";

function Careers() {

    const [data, setData] = useState("");
    const [stateNames, setStateNames] = useState([]);
    const [knowledge, setKnowledge] = useState([]);
    const [skills, setSkills] = useState([]);
    const [abilities, setAbilities] = useState([]);
    const [techSkills, setTechSkills] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [characteristics, setCharachteristics] = useState([]);
    const [industryData, setIndustryData] = useState([]);
    const [statePercentages, setStatePercentages] = useState([]);
    const [baseInfo, setBaseInfo] = useState([]);
    const [salary, setSalary] = useState([]);
    

    const id = useParams();

    useEffect(() => {

        const fetchData = async () => {
            init_api();
            await API.get(`/api/career/${id.id}/`)
            .then((response) => {
                setData(response.data);
                
                getKnowledge(response);
                
                getSkills(response);
                
                getAbilities(response);
                
                getTechSkills(response);
                
                getStateNames(response);
                
                getTasks(response);
                
                getCharachteristics(response);
                
                getIndustryData(response);
                
                getStatePercentages(response);
                
                getBaseInfo(response);
                getSalary(response);
                console.log(response.data);
                
                

            });
        };

        const getKnowledge = (response) => {
            var counter = 0;
            var knowledegeTemp = [];
            for (var i = 0; i < response.data.knowledge.group.length; i++) {
                if (counter == 6) {
                    break;
                }
                for (var k = 0; k < response.data.knowledge.group[i].element.length; k++) {
                    if (counter == 6) {
                        break;
                    }
                    knowledegeTemp.push(response.data.knowledge.group[i].element[k].name);
                    counter += 1;
                }
            }
            setKnowledge(knowledegeTemp);
        };

        const getSkills = (response) => {
            var counter = 0;
            var skillsTemp = [];

            for (var i = 0; i < response.data.skills.group.length; i++) {
                    if (counter == 5) {
                        break;
                    }

                for (var k = 0; k < response.data.skills.group[i].element.length; k++) {
                    if (counter == 5) {
                        break;
                    }
                    skillsTemp.push(response.data.skills.group[i].element[k].name);
                    counter += 1;
                }
            }
            
            setSkills(skillsTemp);
        }

        const getAbilities = (response) => {
            var counter = 0;
            var abilitiesTemp = [];

            for (var i = 0; i < response.data.abilities.group.length; i++) {
                if (counter == 6) {
                    break;
                }
                for (var k = 0; k < response.data.abilities.group[i].element.length; k++) {
                    if (counter == 6) {
                        break;
                    }
                    abilitiesTemp.push(response.data.abilities.group[i].element[k].name);
                    counter += 1;
                }
            }

            setAbilities(abilitiesTemp);
        }

        const getTechSkills = (response) => {
            var counter = 0;
            var techSkillsTemp = [];

            for (var i = 0; i < response.data.technology.category.length; i++) {
                if (counter == 5) {
                    break;
                }
                for (var k = 0; k < response.data.technology.category[i].example.length; k++) {
                    if (counter == 5) {
                        break;
                    }
                    techSkillsTemp.push(response.data.technology.category[i].example[k].name);
                    counter += 1;
                }
            }
            console.log(techSkillsTemp);
            setTechSkills(techSkillsTemp);
            
        }

        const getStateNames = (response) => {

            var stateNamesTemp = [];

            for (var i = 0; i < response.data.check_out_my_state.above_average.state.length; i++) {
                stateNamesTemp.push(response.data.check_out_my_state.above_average.state[i].name);
            }

            setStateNames(stateNamesTemp);
        }

        const getTasks = (response) => {
            const tasksTemp = [
                response.data.career.on_the_job.task[0],
                response.data.career.on_the_job.task[1],
                response.data.career.on_the_job.task[2]
                
            ];

            setTasks(tasksTemp);
        }

        const getCharachteristics = (response) => {
            const characteristicsTemp = [
                response.data.personality.work_styles.element[0].name,
                response.data.personality.work_styles.element[1].name,
                response.data.personality.work_styles.element[2].name,
                response.data.personality.work_styles.element[3].name,
                response.data.personality.work_styles.element[4].name,
                response.data.personality.work_styles.element[5].name
            ];

            setCharachteristics(characteristicsTemp);
        }

        const getIndustryData = (response) => {

            /*
            const industryDataTemp = [
                {
                    "name": response.data.where_do_they_work.industry[0].title,
                    "percentage": response.data.where_do_they_work.industry[0].name
                },
        
                {
                    "name": response.data.where_do_they_work.industry[1].title,
                    "percentage": response.data.where_do_they_work.industry[1].name
                }
        
                {
                    "name": response.data.where_do_they_work.industry[2].title,
                    "percentage": response.data.where_do_they_work.industry[2].name
                }
                

            ];

            */

            const industryDataTemp = [];

            for (var i = 0; i < response.data.where_do_they_work.industry.length; i++) {
                var tempObj = {
                    "name (approximation)": response.data.where_do_they_work.industry[i].title,
                    "percentage (approximation)": response.data.where_do_they_work.industry[i].percent_employed
                };

                industryDataTemp.push(tempObj);

            }
            
            setIndustryData(industryDataTemp);
        }

        const getStatePercentages = (response) => {
            const statePercentagesTemp = [
                {
                    "name": "Above average specializiation",
                    "percentage": response.data.check_out_my_state.above_average.state.length
                }, 
        
                {
                    "name": "Average Specialization",
                    "percentage": response.data.check_out_my_state.average.state.length
                },
        
                {
                    "name": "Below average specialization",
                    "percentage": response.data.check_out_my_state.below_average.state.length
                }
            ];

            setStatePercentages(statePercentagesTemp);
        }

        const getBaseInfo = (response) => {
            const baseInfoTemp = [
                response.data.career.title,
                response.data.career.what_they_do,
                response.data.career.code
            ];

            setBaseInfo(baseInfoTemp);
        }
        
        const getSalary = (response) => {
            const salaryTemp = [
                response.data.job_outlook.salary.annual_10th_percentile,
                response.data.job_outlook.salary.annual_median,
                response.data.job_outlook.salary.annual_90th_percentile,
                response.data.job_outlook.salary.hourly_10th_percentile,
                response.data.job_outlook.salary.hourly_median,
                response.data.job_outlook.salary.hourly_90th_percentile
            ];

            setSalary(salaryTemp);
        }

        
        fetchData();
        


    }, []);

    
    
    const [modal1Opened, setModal1Opened] = useState(false);

    


    




    


    


    


    
    

    


    

    const exploreMoreNames = [
        "Civil Engineering Technologists & Technicians",
        "Construction & Building Inspectors",
        "Construction Managers"
    ];

    const exploreMoreDescriptions = [
        "Civil engineering technologists and technicians help civil engineers plan, design, and build highways, bridges, utilities, and other infrastructure projects. They also help to plan, design, and build commercial, industrial, residential, and land development projects.",
        "Performs limited professional trade and/or certification inspections of new, existing, and damaged residential and commercial structures for conformance to codes, amendments, ordinances, regulations, specifications, and standards.",
        "Construction managers, often called general contractors or project managers, coordinate and supervise a variety of projects, including building public, residential, commercial, and industrial structures as well as roads and bridges."
    ]

    const Item = (props) => {
        return (    
            <Spoiler
            maxHeight={18}
            showLabel="Show More"
            hideLabel="Hide label"
            className="tasks-Careers">
                {props.text}
            </Spoiler>
        );
            
    };

    

    const tempItems = tasks.map((data) => {
        return (<ListItem text = {data}></ListItem>);
    });

    const knowledgeMapped = knowledge.map((data) => {
        return <ListItem text = {data}></ListItem>
    });

    const skillsMapped = skills.map((data) => {
        return <ListItem text = {data}></ListItem>
    });

    const abilitiesMapped = abilities.map((data) => {
        return <ListItem text = {data} > </ListItem>
    })

    
    

    return (
        
                    <div style = {{
                        marginLeft: 75,
                        marginTop: 275
                    }} className = "careers_container">
                        <Nav />
                        
                        

                        <Paper>
                             

                            <h1 style = {{
                                paddingBottom: 80,
                                marginLeft: 625
                            }}>{data.name}</h1>
                            <div className="main-container-Careers">

                                <DescriptionPop 
                                name = {baseInfo[0]}
                                description = {baseInfo[1]}
                                id = {baseInfo[2]}
                                type = {"career"}/>
                                

                            </div>

                        </Paper>

                        <div className="tasks_skills">

                            
                                <div className="tasks">

                                    <p>
                                        What about day to day tasks?
                                    </p>

                                    <Modal
                                    opened={modal1Opened}
                                    onClose={()=> setModal1Opened(false)}
                                    title={"Daily Tasks"}>
                                        {tempItems}
                                    </Modal>

                                    <Button onClick={() => setModal1Opened(true)}
                                    className="modal_btn">Tell me!</Button>

                                </div>
                            

                            

                                
                                <div className="tasks_skills_abils">
                                    <p>
                                        What do I need to be good at?
                                    </p>

                                    <AccordionCustom 
                                    knowledge={knowledgeMapped}
                                    skills={skillsMapped}
                                    abilities={abilitiesMapped}/>

                                </div>

                            

                        </div>

                        
                        <div className="chars">
                            <p>
                                Career Characteristics
                            </p>

                            <div>
                                <CareersTraits 
                                chars = {characteristics}/>
                            </div>

                            
                        </div>

                    

                        <div className="tech_skills_careers">
                            <p>
                                Technology Skills needed:
                            </p>

                            <div className="tech_careers">
                                <TechSkills 
                                values = {techSkills}/>
                            </div>

                            
                        </div>


                        <div className="education_careers">
                            <CareerEducation />
                        </div>

                        <div className="salary_charts_career">
                        <SalaryCharts 
                            anually = {{
                                tenth: salary[0],
                                median: salary[1],
                                ninetyith: salary[2]
                            }}
                            hourly = {{
                                tenth: salary[3],
                                median: salary[4],
                                ninetyith: salary[5]
                            }}/>
                        </div>

                        <div className="industries_career">

                            <div className="industry_chart_career">
                                <p>
                                    What industries do they work in?
                                </p>
                                <BarChart width={500} height={600} data={industryData}>
                                    <CartesianGrid strokeDasharray={"3 3"} />
                                    <XAxis dataKey={"name"} />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey={"percentage (approximation)"} fill="#8884d8" />
                                </BarChart>


                            </div>

                            <div className="outlook_careers">
                                <p>Which states specialize in this Career?</p>
                                <CareerOutlook 
                                data={statePercentages}
                                states = {stateNames}/>
                            </div>

                        </div>

                        <div className="explore_more">
                            {/*<p>Explore similar careers</p>
                            <CourseCardList 
                            data = {{
                                "names": exploreMoreNames,
                                "type": "career",
                                "descriptions": exploreMoreDescriptions,
                                "ids": [0,0,0]
                            }}/>*/}
                        </div>

                        
                        
                    </div>
                
        
    );
};

export default Careers;