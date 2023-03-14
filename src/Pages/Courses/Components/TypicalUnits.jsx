import {Timeline} from '@mantine/core';
import {Battery4} from 'tabler-icons-react';
import {useState} from 'react';

function TypicalUnits(props) {

    const [active, setActive] = useState(0);

   

    const changeActive = (num) => {
        setActive(num);
    }

    var namesIDs = [];
    for (var i = 0; i < props.unitNames.length; i++) {
        namesIDs.push(
            {
                "name": props.unitNames[i],
                "id": i
            }
        );
    };

    const mapped = namesIDs.map((unit) => {
        return <Timeline.Item 
                bullet = {<Battery4 size = {12}/>}
                title = {unit.name}
                onClick = {() => changeActive(unit.id)}/>
    });

    return (

        <div>
            <p style = {{
                fontSize: 24,
                fontWeight: 'bold'
            }}>Typical Units</p>

            <div style = {{
                marginTop: 100,
                marginRight: 500,
                display: 'flex',
                flexDirection: 'row'
            }}>

                <Timeline active={active}>
                    {mapped}
                </Timeline>

                <div style = {{
                    marginLeft: 350,
                }}>
                    <p style = {{fontSize: 18, width: 200, fontWeight: 'bold'}}>Unit Description</p>

                    <p style = {{
                        marginTop: 100,
                        fontSize: 18,
                        color: "darkblue"
                    }}>{props.unitDescriptions[active]}</p>
                </div>
            </div>
        </div>
    );
};


export default TypicalUnits;