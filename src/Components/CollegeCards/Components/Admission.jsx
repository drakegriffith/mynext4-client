import { Bold, Check, X } from "tabler-icons-react";
import {RingProgress, Text} from '@mantine/core';
import NormalCurveCollege from "./NormalCurveCollege";



function Admission(props) {
    const rate = Math.round(props.acceptance_rate * 100);
    return (
        <div>
            <p style = {{fontSize: 24, fontWeight: 'bold'}}>Admission Information</p>

            <div style = {{display: "flex", flexDirection: "row"}}>

                <div>
                    <p style = {{fontSize: 18, marginTop: 25}}>Acceptance rate</p>
                    <RingProgress
                    sections={[{value: 33, color: 'blue'}]}
                    label = {
                        <Text color = "blue" weight={700} align="center" size = "xl">
                            {rate}
                        </Text>
                    } 
                    style = {{marginTop: 25}}/>

                </div>

                <div>
                    <p style = {{fontSize: 18, marginTop: 25, marginLeft: 100}}>Offers early action?</p>
                    <Check 
                    size = {90}
                    strokeWidth={2}
                    color = {'green'}
                    style = {{marginLeft: 135, marginTop: 30}}/>
                </div>

                <div>
                    <p style = {{
                        fontSize: 18,
                        marginLeft: 100,
                        marginTop: 25
                    }}>Offers early decision?</p>
                    <X 
                    size = {90}
                    strokeWidth = {2}
                    color = {'red'}
                    style = {{
                        marginLeft: 135,
                        marginTop: 30
                    }}/>
                </div>

                <div>
                    <p style = {{
                        fontSize: 18,
                        marginLeft: 100,
                        marginTop: 25
                    }}>Total yearly applicants</p>
                    
                    <p style = {{
                        fontSize: 16,
                        color: 'green',
                        marginLeft: 160,
                        marginTop: 50
                    }}>{props.num_apps}</p>
                </div>
                

            </div>

            <div style = {{display: "flex", flexDirection: "row",
        marginTop: 50, position: "relative", right: 150}}>
                <div>

                    <p style = {{fontSize: 18, position: 'relative', left: 300}}>ACT Scores</p>
                    <NormalCurveCollege 
                    twentyFifth = {props.ACT.twentyFifth}
                    median = {props.ACT.median}
                    seventyFifth = {props.ACT.seventyFifth}/>
                </div>

                <div>
                    <p style = {{fontSize: 18, position: 'relative', left: 300}}>SAT Scores</p>
                    <NormalCurveCollege 
                    twentyFifth = {props.SAT.twentyFifth}
                    median = {props.SAT.median}
                    seventyFifth = {props.SAT.seventyFifth}/>
                </div>
            </div>

            <div style = {{
                display: "flex",
                flexDirection: "row",
                marginTop: 50
            }}>
                <a style = {{
                    position: "relative",
                    marginLeft: 100,
                    fontSize: 18,
                    fontWeight: "bold"
                }} href = {props.admin}>Admission Website</a>

                <a style = {{
                    position: "relative",
                    marginLeft: 100,
                    fontSize: 18,
                    fontWeight: "bold"
                }} href = {props.app}>Application Website</a>
            </div>
        </div>
    );
};

export default Admission;