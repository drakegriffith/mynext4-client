import TopNav from "../Nav/components/TopNav";
import SideBar from "../Nav/components/SideBar";
import {useState, useRef, useEffect} from 'react';
import {init_API_College_AI, API_College_AI} from '../../API_College_AI';
import {Button} from '@mantine/core';
import Nav from "../Nav/Nav";
import SidePicker from "../../Pages/Careers/Components/SidePicker";
import Admission from "./Components/Admission";
import Cost from "./Components/Cost";
import CampusLife from "./Components/CampusLife";
import Rankings from "./Components/Rankings";
import CourseCardList from "../CardList/CourseCardList";
import {useParams} from 'react-router-dom';
import "./CollegeCard.css";
//https://ui.mantine.dev/category/stats
function CollegeCard() {
  let sideNav = useRef(null);
  let topNav = useRef(null);
  const [lightMode, setLightMode] = useState([true]);
  const [data, setData] = useState({});
  const [ranks, setRanks] = useState([]);
  const [ACT, setACT] = useState({});
  const [SAT, setSAT] = useState({});
  const [similarColleges, setSimilarColleges] = useState([]);
  const [aid, setAid] = useState({});
  const [price, setPrice]= useState({});
  const [classes, setClasses] = useState({});
  const [name, setName] = useState("");
  const [acceptance_rate, setAcceptanceRate] = useState(0);
  const [num_apps, setNumApps] = useState(0);
  const [admin, setAdmin] = useState("");
  const [app, setApp] = useState("");
  const [six_year, setSixYear] = useState(0);
  const [ten_year, setTenYear] = useState(0);
  const [in_state, setInState] = useState(0);
  const [out_state, setOutState] = useState(0);
  const [fin_aid, setFinAid] = useState(0);
  const [cost, setCost] = useState(0);
  const [frat, setFrat] = useState(0);
  const [soror, setSor] = useState(0);
  const [num_women, setNumWomen] = useState(0);
  const [num_men, setNumMen] = useState(0);
  const params = useParams();


  useEffect(() => {
    
    const fetchCollegeData = async () => {
      init_API_College_AI(params.id, "info");
      await API_College_AI.get()
      .then((response) => {
        setData(response.data.colleges[0]);
      });

    };

    

    

    fetchCollegeData();


    

    

    

  }, []);

  useEffect(() => {

    if(Object.keys(data).length != 0) {
      const ranks_temp = [];
      try {
        
        ranks_temp.push(
          {
          "name": data.rankingsBestCollegeAcademics.name,
          "value": data.rankingsBestCollegeAcademics.value
          }
        );
      } catch(error) {
        var x = 1;
      }

      try {
        ranks_temp.push(
          {
            "name": data.rankingsBestCollegeAthletics.name,
            "value": data.rankingsBestCollegeAthletics.value
          }
        );
      } catch (error) {
        var x = 1;
      }

      try {
        ranks_temp.push(
          {
            "name": data.rankingsBestCollegeCampuses.name,
            "value": data.rankingsBestCollegeCampuses.value
          }
        );
      } catch (error) {
        var x = 1;
      }

      try {
        ranks_temp.push(
          {
            "name": data.rankingsBestCollegeFood.name,
            "value": data.rankingsBestCollegeFood.value
          }
        );
      } catch (error) {
        var x = 1;
      }

      try {
        ranks_temp.push(
          {
            "name": data.rankingsBestCollegeProfessors.name,
            "value": data.rankingsBestCollegeProfessors.value
          }
        );
      } catch (error) {
        var x = 1;
      }

      try {
        ranks_temp.push(
          {
            "name": data.rankingsBestColleges.name,
            "value": data.rankingsBestColleges.value
          }
        );
      } catch (error) {
        var x = 1;
      }

      try {
        ranks_temp.push(
          {
            "name": data.rankingsBestCollegesForArt.name,
            "value": data.rankingsBestCollegesForArt.value
          }
        );
      } catch (error) {
        var x = 1;
      }

      try {
        ranks_temp.push(
          {
            "name": data.rankingsBestCollegesForBiology.name,
            "value": data.rankingsBestCollegesForBiology.value
          }
        );
      } catch (error) {
        var x = 1;
      }

      try {
        ranks_temp.push(
          {
            "name": data.rankingsBestCollegesForBusiness.name,
            "value": data.rankingsBestCollegesForBusiness.value
          }
        );
      } catch (error) {
        var x = 1; 
      }

      try {
        ranks_temp.push(
          {
            "name": data.rankingsBestCollegesForChemistry.name,
            "value": data.rankingsBestCollegesForChemistry.value
          }
        );
      } catch (error) {
        var x = 1;
      }

      try {
        ranks_temp.push(
          {
            "name": data.rankingsBestCollegesForCommunications.name,
            "value": data.rankingsBestCollegesForCommunications.value
          }
        );
      } catch (error) {
        var x = 1;
      }

      try {
        ranks_temp.push(
          {
            "name": data.rankingsBestCollegesForComputerScience.name,
            "value": data.rankingsBestCollegesForComputerScience.value
          }
        );
      } catch (error) {
        var x = 1;
      }

      try {
        ranks_temp.push(
          {
            "name": data.rankingsBestCollegesForDesign.name,
            "value": data.rankingsBestCollegesForDesign.value
          }
        );
      } catch (error) {
        var x = 1;
      }

      try {
        ranks_temp.push(
          {
            "name": data.rankingsBestCollegesForEconomics.name,
            "value": data.rankingsBestCollegesForEconomics.value
          }
        );
      } catch (error) {
        var x = 1;
      }

      try {
        ranks_temp.push(
          {
            "name": data.rankingsBestCollegesForEngineering.name,
            "value": data.rankingsBestCollegesForEngineering.value
          }
        );
      } catch (error) {
        var x = 1;
      }

      try {
        ranks_temp.push(
          {
            "name": data.rankingsBestCollegesForNursing.name,
            "value": data.rankingsBestCollegesForNursing.value
          }
        );
      } catch (error) {
        var x = 1;
      }

      try {
        ranks_temp.push(
          {
            "name": data.rankingsBestCollegesForPhysics.name,
            "value": data.rankingsBestCollegesForPhysics.value
          }
        );
      } catch (error) {
        var x = 1;
      }

      try {
        ranks_temp.push(
          {
            "name": data.rankingsBestGreekLifeColleges.name,
            "value": data.rankingsBestGreekLifeColleges.value
          }
        );
      } catch (error) {
        var x = 1;
      }

      try {
        ranks_temp.push(
          {
            "name": data.rankingsBestStudentLife.name,
            "value": data.rankingsBestStudentLife.value
          }
        );
      } catch (error) {
        var x = 1;
      }

      try {
        ranks_temp.push(
          {
            "name": data.rankingsBestValueColleges.name,
            "value": data.rankingsBestValueColleges.value
          }
        );
      } catch (error) {
        var x = 1;
      }

      try {
        ranks_temp.push(
          {
            "name": data.rankingsHardestToGetIn.name,
            "value": data.rankingsHardestToGetIn.value
          }
        );
      } catch (error) {
        var x = 1;
      }


      setRanks(ranks_temp);

      const similarColleges_temp = [
        data.similarColleges[0].name,
        data.similarColleges[1].name,
        data.similarColleges[2].name
    ];
    
  
    setSimilarColleges(similarColleges_temp);

    const ACT_temp = {
      "twentyFifth": data.actCumulativePercentile25,
      "median": data.actCumulativeMidpoint,
      "seventyFifth": data.actCumulativePercentile75
    };
  
    const SAT_temp = {
      "twentyFifth": data.satCompositePercentile25,
      "median": data.satCompositeMidpoint,
      "seventyFifth": data.satCompositePercentile75
    };

    setSAT(SAT_temp);
    setACT(ACT_temp);

    const aid_temp = {
      "low": data.averageAidAwardedLowIncome,
      "low_mid": data.averageAidAwardedLowerMiddleIncome,
      "mid": data.averageAidAwardedMiddleIncome,
      "up_mid": data.averageAidAwardedUpperMiddleIncome,
      "up": data.averageAidAwardedHighIncome
    };

    setAid(aid_temp);

    const price_temp = {
      "thirty": data.netPriceByIncomeLevel0To3000,
      "forty": data.netPriceByIncomeLevel30001To48000,
      "seventy": data.netPriceByIncomeLevel48001To75000,
      "hundred": data.netPriceByIncomeLevel75001To110000
    };

    setPrice(price_temp);

    const classes_temp = {
      "two": data.classSizeRange2To9,
      "ten": data.classSizeRange10To19,
      "twenty": data.classSizeRange20To29,
      "thirty": data.classSizeRange30To39,
      "forty": data.classSizeRange40To49,
      "fifty": data.classSizeRange50To99,
      "hundred": data.classSizeRangeOver100
    };

    setClasses(classes_temp);

    setName(data.name);

    setAcceptanceRate(data.acceptanceRate);
    setNumApps(data.totalApplicants);
    setAdmin(data.admissionsWebsite);
    setApp(data.applicationWebsite);
    setSixYear(data.typical6YearEarnings);
    setTenYear(data.typical10YearEarnings);
    setInState(data.inStateTuition);
    setOutState(data.outOfStateTuition);
    setFinAid(data.averageFinancialAid);
    setCost(data.avgCostOfAttendance);
    setFrat(data.fraternitiesPercentParticipation);
    setSor(data.sororitiesPercentParticipation);
    setNumWomen(data.enrolledWomen);
    setNumMen(data.enrolledMen);

      
  }
  }, [data]);

  
  
  

  const similarDescriptions = [
    "Description 1",
    "Description 2",
    "Description 3"
  ];

  
  

  function switchModes() {
    setLightMode((prevState) => !prevState)
  };

  


  return (
    <div style = {{marginTop: 200, marginLeft: 390}} className="college_card_container">
        
    <Nav /> 

      <div>
          <h1>{name}</h1>
          
      </div>

      

      

      <div style = {{marginTop: 50}}>
        <SidePicker />
      </div>

      <div style = {{marginTop: 150}}>
        <Admission 
        acceptance_rate = {acceptance_rate}
        num_apps = {num_apps}
        ACT = {ACT}
        SAT = {SAT}
        admin = {admin}
        app = {app}/>
      </div>

      <div style = {{
        marginTop: 150
      }}>
        <Cost 
        six_year = {six_year}
        ten_year = {ten_year}
        in_state = {in_state}
        out_state = {out_state}
        fin_aid = {fin_aid}
        cost = {cost}
        aid = {aid}
        price = {price}/>
      </div>

      <div style = {{
        marginTop: 150
      }}>
        <CampusLife 
        frat = {frat}
        soror = {soror}
        num_women = {num_women}
        num_men = {num_men} 
        class = {classes}/>
      </div>

      <div style = {{
        marginTop: 150
      }}>
        
        <Rankings 
        ranks = {ranks}/>
    </div>
    


      <div style = {{
        marginTop: 150
      }}>
        <p style = {{
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 50
        }}>Similar Colleges</p>
        <CourseCardList 
        data = {{
          "type": "college",
          "names": similarColleges,
          "descriptions": similarDescriptions,
          "ids": [0,0,0]
        }}/>
      </div>
       

      



        
    </div>
  );
}

export default CollegeCard;
