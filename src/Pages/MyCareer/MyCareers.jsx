import React, { useEffect, useState } from "react";
import "./MyCareer.css";
import { SmallCareer, MediumCareer, LargeCareer } from "./careers";
import { API, init_api } from '../../API';
import Nav from '../../Components/Nav/Nav';
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { ArrowDown } from "tabler-icons-react";

const MyCareers = ({ onSelectCollege, colleges}) => {
  //const [colleges, setColleges] = useState([]);
  
  
  

  return (
    <div className="mycolleges">
      <div className="mycolleges-header">
        <div className="mycolleges-header-text">My Colleges</div>
        <div className="mycolleges-header-filter">
          <i className="fa fa-filter" />
        </div>
      </div>
      <ul className="mycolleges-list">
        {colleges.map((college, index) => (
          <li
            key={index}
            className="mycolleges-list-item"
            onClick={() => onSelectCollege(college)}
          >
            <SmallCareer college={college} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const CareerComputer = ({onSelectCollege, userID}) => {

  
  const [view, setView] = useState('Filter');
  const [careerFilteredList, setCareerFilteredList] = useState([]);
  const [filterVal, setFilterVal] = useState('Search');
  const [prevSearchLength, setPrevSearchLength] = useState(0);

  useEffect(() => {

    const getList = async() => {
      if (filterVal == "Business" 
      || filterVal == "Agriculture"
      || filterVal == "Engineering"
      || filterVal == "Health"
      || filterVal == "Manufacturing"
      || filterVal == "Human Resources") {

        init_api();
        await API.get(`api/explore/career/industry/${filterVal}/`)
        .then((response) => {
          console.log(response.data);
          
          setCareerFilteredList(response.data.careers);
        });
      } else if (filterVal == "50000"
                || filterVal == "75000"
                || filterVal == "100000"
                || filterVal == "125000") {

        init_api();
        await API.get(`api/explore/career/salary/${filterVal}/`)
        .then((response) => {
          setCareerFilteredList(response.data.careers);
        });
      } else if (filterVal == "HighSchool"
                || filterVal == "Bachelors"
                || filterVal == "Masters"
                || filterVal == "Doctorate") {

                  init_api();
                  await API.get(`api/explore/career/education/${filterVal}/`)
                  .then((response) => {
                    setCareerFilteredList(response.data.careers);
                  });
                } else {
                  setCareerFilteredList([]);
                }
    }
    
    getList();
  }, [filterVal]);

  
  const filter = (e) => {
    setFilterVal(e.target.value);
    
  }


   


  


  const downClick = () =>{
    console.log("Click");
  }

  const changeView = () => {
    if (view == "Filter") {
      setView("Reccomendatinons");
      setCareerFilteredList([]);
    } else {
      setView("Filter");
      setFilterVal([]);
      setFilterVal("Search");
    }
  }

  const getRecommendations = async() => {
    
    console.log("Recs");
    /*
    if (careerFilteredList.length == 0) {
      init_api();
      await API.get(`/api/career/recommendations/${userID}/`)
      .then((response) => {
        console.log(response.data);
      });
    }
    */
  }

  const search = async(e) => {
    var searchVal = e.target.value;

    if (searchVal.length < prevSearchLength) {
      setCareerFilteredList([]);
      
    } else if (searchVal.length > 1) {
      
      if (searchVal.length % 2 == 0) {
        init_api();
        await API.get(`/api/search/career/${searchVal}/`)
        .then((response) => {
          console.log(response.data);
          setCareerFilteredList(response.data.careers);
          
        });
      }
    }
    setPrevSearchLength(searchVal.length);
  }

  
  return (
    <div className="collegecomputer">
      
      <div className="collegecomputer-header">
        
        College Computer
        <div className="collegecomputer-filter">
          
         { view == "Filter" ? (<select id="collegecomputer-filter-select" onChange={filter}>
            <option value = "Search">Filter</option>
            <optgroup label="Industries">
                <option value = "Business">Business</option>
                <option value = "Agriculture">Agriculture</option>
                <option value = "Engineering">Engineering</option>
                <option value = "Health">Health</option>
                <option value = "Manufacturing">Manufacturing</option>
                <option value = "Human Resources">Human Resources</option>
            </optgroup>

            <optgroup label="Salary">
              
              <option value = "50000"> 50,000</option>
              <option value = "75000"> 75,000</option>
              <option value = "100000"> 100,000</option>
              <option value = "125000"> 125,000</option>
            </optgroup>

            <optgroup label = "Education">
              <option value = "HighSchool">High School Diploma</option>
              <option value = "Bachelors">Bachelor's Degree</option>
              <option value = "Masters">Masters Degree</option>
              <option value = "Doctorate">Doctorate Degree</option>
            </optgroup>
          </select>
          ) : (
            <div>
              <button
              className="collegecomputer-button"
              onClick={getRecommendations}>
              Get Recommendations
              </button>
            </div>
          ) }
          <button
          className="collegecomputer-button"
          onClick={changeView}>
          {view == "Filter" ? "Reccomendation" : "Filter"}
        </button>
        </div>

        
      </div>
      
     {view == "Filter" && filterVal != "Search" &&
      
     <ul className="mycolleges-list">
      
        {careerFilteredList.map((name, id) => (
          <li
            key={id}
            className="mycolleges-list-item"
            onClick={() => onSelectCollege(name)}
          >
            <SmallCareer college={name} />
          </li>
          
        ))}
     
      </ul> }
      {view != "Filter" &&
        <ul 
        className="mycolleges-list">
          <li 
          key = "Header">
            MyRecommendations
          </li>

          {careerFilteredList.map((name, id) => (
          <li
            key={id}
            className="mycolleges-list-item"
            onClick={() => onSelectCollege(name)}
          >
            <SmallCareer college={name} />
          </li>
          
        ))}
        </ul> }

        {view == "Filter" && filterVal == "Search" &&
        <ul 
        className="mycolleges-list">
          <li 
          key = "Header">
            Career Search
          </li>
          <li
          key = "SearchBar">
            <input onChange={search}/>
          </li>

          {careerFilteredList.map((name, id) => (
          <li
            key={id}
            className="mycolleges-list-item"
            onClick={() => onSelectCollege(name)}
          >
            <SmallCareer college={name} />
          </li>
          
        ))}

        </ul>

        }
      

      
      
    
      
    </div>
  );
};

const CareerDataPage = (props) => {
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedColleges, setSelectedColleges] = useState([]);
  const [view, setView] = useState("large");
  

  const [careerLikedList, setCareerLikedList] = useState([]);
  //onst userID = useSelector(state => state.user.user.id);
  const userID = useParams().userID;
  
  useEffect(() => {
    
    const getLikedList = async () => {
        
        init_api();
        await API.get(`/api/users/careerlist/${userID}/`)
        .then((response) => {
            
            console.log(response.data.liked_list);
            setCareerLikedList(response.data.liked_list);
        });
    }
    
    getLikedList();
  }, []);
  
  const addCollege = (college) => {
    setCareerLikedList([...careerLikedList, college]);
    //const csrf = getCookie('csrftoken');
    //console.log(csrf);
    
    //var headers = {'X-CSRFToken': csrf}

    init_api();
    API.post('/api/users/careerlist/add/', {
      career_name: college.career_name,
      user_id: userID,
      score: 4.5
    });
    
  };

  const deleteCollege = (index) => {
    setSelectedColleges(
        selectedColleges.filter((_, i) =>  
            i !== index)
        );
  };

  const selectCollege = (college) => {
    if (view === "large") {
        setSelectedCollege(college);
    } else {
        setSelectedColleges([...selectedColleges, college]);
    }
  };

  function getCookie(name) {
    let cookieValue = null;

    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();

            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));

                break;
            }
        }
    }

    return cookieValue;
}

  const test = async() => {
    /*
    init_api();
        API.get(`/api/users/careerlist/${userID}/`)
        .then((response) => {
            setData(response.data);
            console.log(response.data)
        });
        */
       //console.log(data);
    
  }


  return (
    <div className="collegedata">
        <Nav />

        
      <MyCareers onSelectCollege={selectCollege} colleges = {careerLikedList}/>
      <div className="collegeMiddle">
        <div className="collegeMiddleHeader">
            <div className="collegeMiddleHeaderText"> Selected Colleges </div>
            <button onClick={() => setView(view === "large" ? "medium" : "large")}>
                {view === "large" ? "Switch to Medium" : "Switch to Large"}
                </button>
                </div>
            {view === "large" ? (
                <LargeCareer college={selectedCollege} /> 
              
            ) : (
                <div className="mediumColleges">
                    {selectedColleges.map((college, index) => (
                        index < 4 &&
                        <MediumCareer 
                            key={index}
                            college={college}
                            onDelete={() => deleteCollege(index)}
                            onAdd = {() => addCollege(college)}
                            />
                    ))}
                </div>
            )}
            </div>
      
      
      <CareerComputer onSelectCollege={selectCollege}
      userID = {userID}/>
      
      
      

      </div>
      );
};


export default CareerDataPage;


