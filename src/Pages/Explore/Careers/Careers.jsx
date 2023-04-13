
import React, { useCallback, useContext, useEffect, useState } from "react";
import "./Careers.css";
import { API, init_api } from "../../../API";
import { useParams } from "react-router-dom";
import {  MediumCareer } from "../../../Components/MyComponents/MyCareers/Career";
import { AuthContext } from "../../../Components/Auth/AuthContext";

function Careers() {
    const [career, setCareer] = useState("");
    const { token } = useContext(AuthContext)
    /*
    const [knowledge, setKnowledge] = useState([]);
    const [skills, setSkills] = useState([]);
    const [abilities, setAbilities] = useState([]);

    const [tasks, setTasks] = useState([]);
    const [careerCodes, setCareerCodes] = useState([]);
    const [correlatedCareers, setCorrelatedCareers] = useState([]);
    const [careerData, setCareerData] = useState([]);
    const [stateNames, setStateNames] = useState([]);
    const [characteristics, setCharacteristics] = useState([]);
    const [industryData, setIndustryData] = useState([]);
    const [statePercentages, setStatePercentages] = useState([]);
    const [baseInfo, setBaseInfo] = useState([]);
    const [techSkills, setTechSkills] = useState([]);
    const [salary, setSalary] = useState([]);
*/

    const { id } = useParams();


    /*
    useEffect(() => {

        const fetchData = async () => {
            init_api();
            await API.get(`/api/career/${id.id}/`)
            .then((response) => {
                console.log("RESPONSE")
                console.log(response.data.explore_more.careers.career)
                setCareerCodes(response.data.explore_more.careers.career)
                //setData(response.data);
              
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
    

    /*
    function CorrelatedCareers(props) {
        const [careers, setCareers] = useState([]);
        
        useEffect(() => {
          const fetchData = async () => {
            console.log(props.onetIds)
            const promises = props.onetIds.map(async (onetId) => {
              const response = await API.get(
                `api/careers/get_career/${onetId}/`
              );
              return response.data;
            });
            const careers = await Promise.all(promises);
            setCareers(careers);
          };
          fetchData();
        }, [props.onetIds]);
      
        return (
          <div>
            {careers.map((career) => (
              <MediumCareer
                key={career.code}
            
                career={career}
              />
            ))}
          </div>
        );
      }
      */

      /*
     
    
      const Circle = ({ stateName }) => {
        const [hovered, setHovered] = useState(false);
        const handleMouseOver = () => setHovered(true);
        const handleMouseLeave = () => setHovered(false);
    
        return (
        <div
            style={{width: '60px', height: '60px', backgroundColor: '#EDF2F4', margin: '3px', borderRadius: '5px', display: 'flex',
        justifyContent: 'center', alignItems: 'center'}}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
        >
            <div className="letter"><b>{stateName.charAt(0)}</b></div>
            {hovered && <div className="state-name">{stateName}</div>}
        </div>
        );
    }


    const PieChartIndustry = ({ industryData }) => {
        const chartDataType = useCallback(() => {
            return [
              ['Industry', 'Data'], 
              ...industryData.map(({ 'name (approximation)': name, 'percentage (approximation)': percentage }) => [name, percentage])
            ];
          }, [industryData]);
      
        const options = {
          title: 'Industries worked in ',
          is3D: true,
        };

      
        return (
          <Chart
            chartType="PieChart"
            data={chartDataType()}
            options={options}
            width="100%"
            height="400px"
          />
        )
      }
     
    
      const SalaryPieChart = ({ data }) => {
        const categories = ['Below Average', 'Average', 'Above Average'];
        const transformedData = categories.map((category, index) => ({
          name: category,
          value: data[index],
          percentage: data[index + 3],
        }));
      console.log(transformedData)
      
        const chartData = useCallback(() => {
          return [
            ['Salary', 'Percentage'],
            ...transformedData.map(({ name, value }) => [name, value]),
          ];
        }, [transformedData]);
      
        const options = {
          title: 'Salary Distribution',
          is3D: true,
        };
      
        return (
          <Chart
            chartType="PieChart"
            data={chartData()}
            options={options}
            width="100%"
            height="400px"
          />
        );
      };

      {/*
      const getCareer = useCallback(async (onet_id) => {
        init_api();
        const response  = await API.get(`api/careers/get_career/${onet_id}/`)
        
        setCareer(response.data);
      }, []);
  
      console.log(career)
      useEffect(() => {
        let onet_id = baseInfo[2]
    
        getCareer(onet_id);
        
      }, []);
    */


      const collegeNameStyle = {
        position: 'absolute',
        top: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontWeight: 500,
        backgroundColor: '#2B2D42',
        color: 'white',
        height: '40px',
        lineHeight: '40px',
        fontSize: '22px',
        padding: '0px 30px',
        borderRadius: '20px',
        textAlign: 'center',
        zIndex: 1,
      };
    
      const containerStyle = {
        position: 'relative',
        marginTop: 65,
        height: '80vh',
      };
    
      const backgroundStyle = {
        backgroundColor: '#2B2D42',
        marginBottom: 30,
        height: '55px',
        width: '100%',
      };
    
      
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
      };
    
      const medalStyle = {
        fontWeight: 400,
        padding: '10px',
        backgroundColor: '#8D99AE',
        backgroundImage: 'linear-gradient(to bottom, #8D99AE, #2B2D42)',
        textAlign: 'center',
        color: 'white',
        marginTop: 10,
        fontSize: '16px',
        marginBottom: 4,
        boxShadow: '0 0 4px #BFBFBF',
        transform: 'translateZ(4px)',
      };

      const getCareer = useCallback(async (id) => {
        try {
          init_api();
          const response = await API.get(`api/careers/get_career/${id}/`, config);
        console.log(response.data)
          setCareer(response.data);
        } catch (error) {
          console.error(error);
        }
      }, []);
    
    
    
      useEffect(() => {
        if (id) {
          getCareer(id);
        }
      }, [id, getCareer]);



      const SimilarCareers = React.memo(({ industry }) => {
        const [careerData, setCareerData] = useState([]);
      
        const search = async (industry) => {
          let result = null;
          await API.get(`/api/explore/career/industry/${industry}/`, config)
            .then((response) => {
              result = response.data.careers;
            })
            .catch((error) => {
              console.error("Error fetching career data:", error);
            });
          return result;
        };
      
        useEffect(() => {
          const fetchCareerData = async () => {
            const fetchedCareers = await search(industry);
    
           
            if (!fetchedCareers || fetchedCareers.length === 0) {
              setCareerData(["N/A"]);
              return;
            }
      
            setCareerData(fetchedCareers);
         
          };
      
          fetchCareerData();
        }, [industry]);
       
        


      
        return (
          <div className="similar-careers">
             {careerData.length === 0
        ? "N/A"
        : careerData.map((career, index) =>
            career === "N/A" ? (
              <div key={index}>{career}</div>
            ) : (
              <MediumCareer careerPage={true} key={index} career={career} />
            )
          )}
          </div>
        );
      });

   
      

    return (

    
        <div style={containerStyle}>
        <div style={backgroundStyle}></div>
        <div style={{width: '250px', height: '265px', margin: '0 auto 50px auto'}}>
        <MediumCareer careerPage={true} career={career} />
        </div>
        <div className="shiny-text" style={collegeNameStyle}>{career.career_name}</div>
        <div style={medalStyle}> In an <b>identical industry</b> ({career.industry}) </div>
        <div style={{display: 'flex', marginTop:0, justifyContent: 'center'}}>

        
    <SimilarCareers industry={career.industry} />


      
      </div>
        </div>

    )
      
      

        
        /*
                    <div style = {{
                            textAlign: 'center',
                            marginTop: 50,
                            height: '180vh'
                            
                  
                    }} >
                        <div style={{width: '200px',margin: '0 auto 0 auto'}}>
                      {career && <MediumCareer career={career} /> }
                       </div>
                     <h1 style={{ padding: '20px 10px', background: '#fff', width: '400px', margin: '30px auto 0 auto', border: '8px'}} > {baseInfo[0]} </h1>
                   
                    <Carousel >

                    <div style={{width: '100%', margin: '0 auto 0 auto', marginTop: 30, height: '180px', backgroundColor: '#8D99AE',padding: '10px'}}>
                    <h2>See Associated States</h2>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: 15,}}>
                        {stateNames.map((stateName, index) => (
                        <Circle key={index} stateName={stateName} />
                        ))}
                    </div>
                    </div>

                    <div style={{width: '100%', margin: '0 auto 0 auto',marginTop: 30, height: '180px',backgroundColor: '#8D99AE', padding: '10px'}}>
                    <h2>See Associated Courses </h2>
                    <div style={{display: 'flex',marginTop: 15,alignItems: 'center', justifyContent: 'center', padding: '10px'}}>
                        {knowledge.map((knowledgeName, index) => (
                        <div style={{margin: 5, borderRadius: '3px', height: '80px', alignItems: 'center', display: 'flex', justifyContent: 'center', textAlign: 'center', fontWeight: 500, backgroundColor: '#EDF2F4'}}key={index} >{knowledgeName} </div>
                        ))}
                    </div>
                    </div>

                    <div style={{width: '100%', margin: '0 auto 0 auto', marginTop: 30, height: '180px',backgroundColor: '#8D99AE', borderRadius: '5px', padding: '10px'}}>
                    <h2>See Associated Abilities </h2>
                    <div style={{display: 'flex', marginTop: 15, alignItems: 'center', justifyContent: 'center'}}>
                        {abilities.map((abilityName, index) => (
                        <div style={{width: '100px',margin: 5, borderRadius: '3px', height: '80px', alignItems: 'center', display: 'flex', justifyContent: 'center', textAlign: 'center', fontWeight: 500, backgroundColor: '#EDF2F4'}}key={index} >{abilityName} </div>
                        ))}
                    </div>
                    </div>

                    <div style={{width: '100%', margin: '0 auto 0 auto', marginTop: 30, height: '180px',backgroundColor: '#8D99AE', borderRadius: '5px', padding: '10px'}}>
                    <h2>See Associated Skills </h2>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',marginTop: 15,}}>
                        {techSkills.map((skillName, index) => (
                        <div style={{width: '100px',margin: 5, borderRadius: '3px', height: '80px', alignItems: 'center', display: 'flex', justifyContent: 'center', textAlign: 'center', fontWeight: 500, backgroundColor: '#EDF2F4'}}key={index} >{skillName} </div>
                        ))}
                    </div>
                    </div>
                    </Carousel>


                    <div style={{width: '80%', margin: '0 auto 0 auto', marginTop: 30, height: '320px',backgroundColor: '#2B2D42', borderRadius: '5px', padding: '10px'}}>
                    <h1 style={{color: '#fff'}}>Task Types </h1>
                    <div style={{display: 'flex',  alignItems: 'center', justifyContent: 'center',marginTop: 10,}}>
                        {tasks.map((taskName, index) => (
                        <div style={{width: '300px',margin: 15, borderRadius: '3px', height: '180px', alignItems: 'center', display: 'flex', justifyContent: 'center', textAlign: 'center', fontWeight: 500, backgroundColor: '#EDF2F4'}}key={index} >{taskName} </div>
                        ))}
                    </div>
                    </div>
                    <div style={{width: '80%', margin: '0 auto 0 auto', marginTop: 30, height: '420px',backgroundColor: '#2B2D42', borderRadius: '5px', padding: '10px'}}>
                        <Carousel>

                    <PieChartIndustry industryData={industryData} />
                 
                    <SalaryPieChart data={salary} />
                    </Carousel>
                        </div>

                 
                  
                    
                    </div>
                        */

                       
                
                    
        

};

export default Careers;