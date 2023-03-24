import { Apple, Home, Medal2 , MoodSmileBeam, MoodEmpty, MoodSadDizzy} from "tabler-icons-react";

export const COURSE_ATTRIBUTES = {
    "isAP": {
      label: "AP Course",
      icon: <Apple />,
      color: "#7bf1a8"
    },
    "isDuelEnrollment": {
        label: "Duel Enrollment Course",
        icon: <Home />,
        color: "#ffa62b"
    },
    "isHonors": {
        label: "Honors Course",
        icon: <Medal2 />,
        color: "#778da9"
    },
    "difficulty_high": {
        label: "Hardest Difficulty",
        icon: <MoodSadDizzy />,
        color: "#D90429"
    },
    "difficulty_medium": {
        label: "Medium Difficulty",
        icon: <MoodEmpty />,
        color: "#e85d04"
    },
    "difficulty_easy": {
        label: "Easy Difficulty",
        icon: <MoodSmileBeam/>,
        color: "#ffa62b"
    },
  
    
}

