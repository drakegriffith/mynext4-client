import React, { useCallback, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MediumCollege } from "../../Components/MyComponents/MyColleges/College";
import { API, init_api } from "../../API";// Import the API object
import { useParams } from "react-router-dom";

export const Colleges = () => {
    const [college, setCollege] = useState("");
    const { id } = useParams();
   
   

      
    const SimilarColleges = React.memo(({ similar_colleges }) => {
        const [collegeData, setCollegeData] = useState([]);

        const search = async (searchVal) => {
            let result = null;
            const searchValue = searchVal.trim();
            await API.get(`/api/search/college/${searchValue}/`)
            .then((response) => {
                if (response.data.colleges.length > 0) {
                result = response.data.colleges[0];
                }
            })
            .catch((error) => {
                console.error("Error fetching college data:", error);
            });
            return result;
        };

        useEffect(() => {
            const fetchCollegeData = async () => {
            if (!similar_colleges || similar_colleges.indexOf(";") === -1) {
                setCollegeData(["N/A"]);
                return;
            }
            const collegeNames = similar_colleges.split(";");

            const fetchedColleges = await Promise.all(
                collegeNames.map(async (name) => {
                const college = await search(name);
                return college;
                })
            );

            const filteredColleges = fetchedColleges.filter((college) => college !== null);
            setCollegeData(filteredColleges);
            };

            fetchCollegeData();
        }, [similar_colleges]);

        const linkStyle = {
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            outline: "none",
            backgroundColor: "#2B2D42",
            color: "#FFF",
            marginTop: "10px",
            borderRadius: "5px",
            fontSize: "14px",
            padding: "3px",
        };

        const navigate = useNavigate();

        const handleLinkClick = (college) => (event) => {
            event.preventDefault();
            navigate(`/Courses/${college.id}`);
          }; 
        return (
            <div style={{ display: "flex", justifyContent: "center", height: "270px", marginBottom: "80px" }}>
            {collegeData.length > 0 && collegeData[0] === "N/A" ? (
                <span style={{ textAlign: "center" }}>N/A</span>
            ) : (
                collegeData.map((college, index) => {
                const style = {
                    margin: "15px",
                };

                return (
                    <div
                    key={index}
                    className=""
                    style={style}
                    >
                    <div style={{ width: "200px" }}>
                        <MediumCollege collegePage={true} college={college} />

                        <Link to={`/Colleges/${college.id}`} onClick={(event) => handleLinkClick(college, event)} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
               <p style={{marginTop: 3,color: 'black', textAlign: 'center'}}>Move to </p> <b style={{color: 'black', textAlign: 'center'}}>{college.college_name}</b>
</Link>
                    </div>
                    </div>
                );
            })
        )}
        </div>
    );
});

const getCollege = useCallback(async (id) => {
    try {
      init_api();
      const response = await API.get(`api/colleges/get_college/${id}/`);
    
      setCollege(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);



  useEffect(() => {
    getCollege(id);
  }, [id]);


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
    marginTop: 0,
    height: '150vh',
  };

  const backgroundStyle = {
    backgroundColor: '#2B2D42',
    marginBottom: 30,
    height: '55px',
    width: '100%',
  };

  

  const medalStyle = {
    fontWeight: 400,
    padding: '10px',
    backgroundColor: '#8D99AE',
    backgroundImage: 'linear-gradient(to bottom, #8D99AE, #2B2D42)',
    textAlign: 'center',
    color: 'white',
    marginTop: 0,
    fontSize: '16px',
    marginBottom: 4,
    boxShadow: '0 0 4px #BFBFBF',
    transform: 'translateZ(4px)',
  };
 

  return (
<div style={containerStyle}>
      <div style={backgroundStyle}></div>
      <div style={{width: '250px', height: '265px', margin: '0 auto 10px auto'}}>
      <MediumCollege collegePage={true} college={college} />
      </div>
     
   
      <div className="shiny-text" style={collegeNameStyle}>{college.college_name}</div>
            <div style={medalStyle} > Similar <b>Schools</b> </div>
   
    <SimilarColleges similar_colleges={college.similar_colleges} />
 
    <div style={medalStyle}> Accepted Student <b>Archives</b> </div>
    <h4 style={{textAlign: 'center'}}> Coming soon! </h4>
    
        </div>

  )

}

export default Colleges;

