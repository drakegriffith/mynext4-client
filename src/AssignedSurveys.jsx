
import { FileDescription } from 'tabler-icons-react';
import { surveys } from './survey';
import "./AssignedSurveys.css";

function AssignedSurveys() {
  const handleSurveyClick = (event, survey) => {
    event.preventDefault();
    window.location = survey.link;
  };

  return (
    <div>
      <ul className="survey-list">
        {surveys.map(survey => (
          <li key={survey.name} className="survey-item">
          <a href="#" onClick={event => handleSurveyClick(event, survey)}>
            <FileDescription size={24} style={{color: 'black'}}className="survey-icons" name={survey.icon} />
            <div className="survey-name" style={{textDecoration: 'none', marginTop: 5}}>{survey.name}</div>
          </a>
        </li>
         
        ))}
      </ul>
    </div>
  );
}

export default AssignedSurveys;