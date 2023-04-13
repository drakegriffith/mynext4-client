import {useParams} from 'react-router';
import React, { useCallback, useEffect, useState, useContext } from "react";
import { init_api, API } from '../../../API';
import './Courses.css';
import { MediumCourse } from '../../../Components/MyComponents/MyCourses/Course';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { AuthContext } from '../../../Components/Auth/AuthContext';

export const Courses = () => {
    const [course, setCourse] = useState("");
    const { token } = useContext(AuthContext)
    const { id }  = useParams();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
    };
  
    const CoursePrerequisites = React.memo(({ prerequisites }) => {
        
        const [courseData, setCourseData] = useState([]);
  
        console.log(courseData)
        
        
        
        const search = async (searchVal) => {
          let result = null;
          const searchValue = searchVal.trim()
          await API.get(`/api/search/course/${searchValue}/`)
            .then((response) => {
              console.log(response.data)
              if (response.data.courses.length > 0) {
                result = response.data.courses[0];
              }
              
            })
            .catch((error) => {
              console.error("Error fetching course data:", error);
            });
          return result;
        };
      
          useEffect(() => {
            
            const fetchCourseData = async () => {
              if (!prerequisites || prerequisites.indexOf(';') === -1) {
                setCourseData(["N/A"]);
                return;
              }
              const courseAbbreviations = prerequisites.split(";");
        
              const fetchedCourses = await Promise.all(
                courseAbbreviations.map(async (abbreviation) => {
                  
                  const course = await search(abbreviation);
                  return course;
                })
              );
        
              // Filter out null values (if any course data is not found)
              const filteredCourses = fetchedCourses.filter((course) => course !== null);
              setCourseData(filteredCourses);
            };
        
            fetchCourseData();
          }, [prerequisites]);

        

          const navigate = useNavigate();

          const handleLinkClick = (courseX, event) => {
            event.preventDefault();
            navigate(`/explore/courses/${courseX.id}`);
          };
         

          return (
            <div style={{display: 'flex', justifyContent: 'center', height: '250px', marginBottom: '80px'}}>
              {courseData.length > 0 && courseData[0] === "N/A" ? (
                <span style={{textAlign: 'center'}}>N/A</span>
              ) : (
                courseData.map((courseX, index) => {
                 
                  const style = {
            
                    margin: '15px',
                  };
          
                  return (
                    <div
                      key={index}
                      className=""
                      style={style}
                    >
                        <div style={{width: '200px'}}>
                      <MediumCourse coursePage={true} course={courseX} />
                      <Link to={`/Courses/${courseX.id}`} onClick={(event) => handleLinkClick(courseX, event)} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
               <p style={{marginTop: 3,color: 'black', textAlign: 'center'}}>Move to </p> <b style={{color: 'black', textAlign: 'center'}}>{courseX.course_name}</b>
</Link>
                     </div>
                    </div>
                  );
                })
              )}
            </div>
          );
          
        });


      const getCourse = useCallback(async (id) => {
        init_api();
        const response  = await API.get(`api/courses/get_course/${id}/`, config)
        
        setCourse(response.data);
      }, []);
  
      useEffect(() => {
        if (id) {
          getCourse(id);
        }
      }, [id, getCourse]);
        

/*
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
    */

    const courseNameStyle = {
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
        height: '150vh',
      };
    
      const backgroundStyle = {
        backgroundColor: '#2B2D42',
        marginBottom: 30,
        height: '55px',
        width: '100%',
        zIndex: 50,
      };

      const medalStyle = {
        fontWeight: 400,
        padding: '10px',
        backgroundColor: '#8D99AE',
        backgroundImage: 'linear-gradient(to bottom, #8D99AE, #2B2D42)',
        textAlign: 'center',
        color: 'white',
        marginBottom: 10,
        fontSize: '16px',
        boxShadow: '0 0 4px #BFBFBF',
        transform: 'translateZ(4px)',
      };


    return (
        <div style={containerStyle}>
      <div style={backgroundStyle}></div>
      <div style={{width: '250px', height: '265px', margin: '0 auto 50px auto'}}>
      <MediumCourse coursePage={true} course={course} />
      </div>
      {/*<div style={medalStyle}> Common Course <b>Units</b> </div>
      <h4 style={{textAlign: 'center', marginBottom: 5}}> Coming soon! </h4>*/}
     
      <div className="shiny-text" style={courseNameStyle}>{course.course_name}</div>
            <div style={medalStyle} > Recommended <b>Prerequisites</b> (In order of completion) </div>
   
    <CoursePrerequisites prerequisites={course.prerequisites} />
   {/*
    <div style={medalStyle}> Recommended <b>Resources</b> </div>
    <h4 style={{textAlign: 'center'}}> Coming soon! </h4>
    
    */}
    </div>
       
    );
};

export default Courses;