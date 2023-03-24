import './CareerSurvey.css'
import {RingProgress, Text, List, ThemeIcon} from '@mantine/core';
import {ShieldCheck}  from 'tabler-icons-react';


function CareerSurvey () {
    return (
        <div className='root-career-survey'>
            <div>
                <h1>
                    My next career survey:
                </h1>
                <div className='container1-career-survey'>
                    <RingProgress 
                    sections={[{value: 40, color: 'blue'}]}
                    label={
                        <Text
                        color={"blue"}
                        align={"center"}
                        weigth={700}>
                            40%
                        </Text>
                    }/>
                    <h2>
                    Survey name
                    </h2>
                </div>
            </div>

            <div className='container2-career-survey'>
                <h1>
                    My Completed Career Surveys:
                </h1>
                <div className='container3-career-survey'>
                    <List
                    spacing={"xl"}
                    size={"xl"}
                    center
                    icon={
                        <ThemeIcon
                        color={"teal"}
                        size={24}
                        radius={"xl"}>
                            <ShieldCheck
                            size={16}/>
                        </ThemeIcon>
                    }
                    data-testid = "CS-List">
                        <List.Item> Survey 1</List.Item>
                        <List.Item> Survey 2</List.Item>
                        <List.Item> Survey 3</List.Item>
                    </List>
                </div>
            </div>

        </div>
    )
}

export default CareerSurvey;