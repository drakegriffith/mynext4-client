import {Pie, PieChart, Tooltip} from "recharts";
import "./CareerOutlook.css";
import {Spoiler, List} from "@mantine/core";

function CareerOutlook(props) {

    const statesMapped = (props.states).map((data) => {
        return <List.Item>{data}</List.Item>
    });


    return (
        <div>
            <div className="pie_careerOutlook">
                <PieChart width={200} height={200}>
                    <Pie data = {props.data} dataKey={"percentage"} nameKey={"name"} fill="#82ca9d"/>
                    <Tooltip />
                </PieChart>
            </div>

            <div className="specialization_careerOutlook">
                <p>States with above average specialization:</p>

                <Spoiler
                maxHeight={50}
                showLabel="Show More"
                hideLabel="Hide">
                    <List>
                        {statesMapped}
                    </List>
                </Spoiler>
            </div>

        </div>
    );
};

export default CareerOutlook;