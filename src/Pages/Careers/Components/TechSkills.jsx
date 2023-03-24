import {List, ThemeIcon} from '@mantine/core';
import { useState } from 'react';
import { ThreeDRotate,
         ChartDots3,
        CircuitPushbutton,
        CircuitBulb,
        Components,
        Compass,
    Exchange} from 'tabler-icons-react';

const Item = (props) => {
    return (
        <List.Item
        icon = {
            <ThemeIcon color={"teal"}
            size = {24}
            radius = {"xl"}>
                <ThreeDRotate size = {16} />
            </ThemeIcon>
        }>
            {props.txt}
        </List.Item>
    );
};



function TechSkills(props) {
    
    


    const itemsMapped = (props.values).map((data) => {
        
        return <Item txt = {data}></Item>
    });

    return (
        <div>
            <List>
                {itemsMapped}
            </List>
        </div>
    );
};

export default TechSkills;