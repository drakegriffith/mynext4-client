import {List, Spoiler, ThemeIcon} from '@mantine/core';
import {Medal2} from 'tabler-icons-react';

function Rankings(props) {

    const mappedItems = (props.ranks).map((data) => {
        if (data.value <= 30) {
            return <List.Item icon = {
                <ThemeIcon color={"#FFD700"} size = {24} radius = "xl">
                    <Medal2 />
                </ThemeIcon>
            }> {data.name}: {data.value}</List.Item>
        } else if (data.value <= 100) {
            return <List.Item icon = {
                <ThemeIcon color = {"#aaa9ad"} size = {24} radius = "xl">
                    <Medal2 />
                </ThemeIcon>
            }>
                {data.name}: {data.value}
            </List.Item>
        } else {
            return <List.Item icon = {
                <ThemeIcon color = {"#cd7f32"} size = {24} radius = "xl">
                    <Medal2 />
                </ThemeIcon>
            }>{data.name}: {data.value}</List.Item>
        }
    });

    return (
        <div>
            <p style = {{
                fontSize: 18,
                fontWeight: 'bold'
            }}>College Rankings, all rankings are out of 1200 colleges</p>

            <div>
                <List>
                    <Spoiler
                    maxHeight={90}
                    showLabel = "Show more"
                    hideLabel = "Show less">
                        {mappedItems}
                    </Spoiler>
                    
                </List>
            </div>
        </div>
    );
};

export default Rankings;