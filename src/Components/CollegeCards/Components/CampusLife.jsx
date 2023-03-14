import {PieChart, Pie, Tooltip, FunnelChart,Funnel,LabelList} from 'recharts';

function CampusLife(props) {

    const genderBreakdown = [
        {
            "name": "Enrolled Women",
            "value": props.num_women
        },

        {
            "name": "Enrolled Men",
            "value": props.num_men
        }
    ];

    const classSizeBreakdown = [
        {
            "name": "2 to 9 students",
            "value": props.class.two,
            "fill": "#8884d8"
        },

        {
            "name": "10 to 19 students",
            "value": props.class.ten,
            "fill": "#83a6ed"
        },

        {
            "name": "20 to 29 students",
            "value": props.class.twenty,
            "fill": "#8dd1e1"
        },

        {
            "name": "30 to 39 students",
            "value": props.class.thirty,
            "fill": "#82ca9d"
        },

        {
            "name": "40 to 49 students",
            "value": props.class.forty,
            "fill": "#a4de6c"

        },

        {
            "name": "50 to 99 students",
            "value": props.class.fifty,
            "fill": "#a423cc"
        },

        {
            "name": "100 students or more",
            "value": props.class.hundred,
            "fill": "#bb6371"
        }
    ];

    return (
        <div>
            <p style = {{
                fontSize: 24,
                fontWeight: 'bold'
            }}> Campus Life </p>

            <div style = {{
                display: "flex",
                flexDirection: "row",
                marginTop: 100
            }}>
                <div>
                    <p style = {{
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}>Gender demographic breakdown</p>
                    <PieChart width = {350} height = {350}>
                        <Tooltip />
                        <Pie data = {genderBreakdown} dataKey = {"value"} nameKey = {"name"} fill = "#8884d8"/>
                    </PieChart>
                </div>

                <div style = {{
                    marginLeft: 75
                }}>
                    <p style = {{
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}>Greek Life involvement</p>

                    <p style = {{
                        fontSize: 16,
                        marginTop: 50
                    }}>Fraternities: {props.frat}%</p>
                    <p style = {{
                        fontSize: 16
                    }}>Sororities: {props.soror}%</p>
                </div>

                <div style = {{
                    marginLeft: 75
                }}>
                    <p style = {{
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginLeft: 200,
                        marginBottom: 50
                    }}>Class sizes</p>
                    <FunnelChart width = {500} height={500}>
                        <Tooltip />
                        <Funnel 
                        dataKey={"value"}
                        data = {classSizeBreakdown}
                        isAnimationActive/>

                        <LabelList position="right" fill="#000" stroke="none" dataKey="name" />

                    </FunnelChart>
                </div>
            </div>
        </div>
    );
};

export default CampusLife;