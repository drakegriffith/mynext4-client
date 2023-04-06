import { HoverCard, Avatar } from "@mantine/core";
import {ManualGearbox, 
    AB2,
     BoxPadding,
      Briefcase, 
      Crown,
    Hierarchy3} from 'tabler-icons-react';
import "./CareerTraits.css";

function CareersTraits(props) {
    
    return (
        <div className="career_traits_container">
            <HoverCard>
                <HoverCard.Target>
                    <Avatar color={"yellow"}>
                        <AB2 size = {24}/>
                    </Avatar>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                    {props.chars[0]}
                </HoverCard.Dropdown>
            </HoverCard>

            <HoverCard>
                <HoverCard.Target>
                    <Avatar color = {"orange"}>
                        <BoxPadding size = {24} />
                    </Avatar>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                    {props.chars[1]}
                </HoverCard.Dropdown>
            </HoverCard>

            <HoverCard>
                <HoverCard.Target>
                    <Avatar color = {"brown"}>
                        <Briefcase size = {24} />
                    </Avatar>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                    {props.chars[2]}
                </HoverCard.Dropdown>
            </HoverCard>

            <HoverCard>
                <HoverCard.Target>
                    <Avatar color = {"red"}>
                        <Crown size = {24} />
                    </Avatar>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                    {props.chars[3]}
                </HoverCard.Dropdown>
            </HoverCard>

            <HoverCard>
                <HoverCard.Target>
                    <Avatar color = {"purple"}>
                        <Hierarchy3 size = {24} />
                    </Avatar>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                    {props.chars[4]}
                </HoverCard.Dropdown>
            </HoverCard>

            <HoverCard>
                <HoverCard.Target>
                    <Avatar color = {"blue"}>
                        <ManualGearbox size = {24} />
                    </Avatar>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                    {props.chars[5]}
                </HoverCard.Dropdown>
            </HoverCard>
        </div>
    );
};

export default CareersTraits;