import { CartesianGrid, Legend, LineChart, XAxis, YAxis, Line, Tooltip } from "recharts";
import { Paper } from "@mantine/core";

function NormalCurve(props) {

    const data = [
        {
            "name": "_",
            "uv": 0.0101 * props.median
        },
    
        {
            "name": "10th percentile",
            "uv": 0.2282 * props.median
        },
    
    
        {
            "name": "median",
            "uv": 1 * props.median
        },
    
        {
            "name": "90th percentile",
            "uv":  0.2282 * props.median
        },
    
        {
            "name": "__",
            "uv": 0.0101 * props.median
        }
    
    
    
    ];

    const findRealSalary = (label) => {
        if (label == "10th percentile") {
            return props.tenth
        } else if (label == "median") {
            return props.median
        } else if (label == "90th percentile") {
            return props.ninetyith
        } else {
            return null;
        }
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          var sal = findRealSalary(label);

          if (sal === null) {
            return null;
          }
          return (
            <Paper>
            <div className="custom-tooltip">
              <p className="label">{`${label} salary: ${sal}`}</p>
            </div>
            </Paper>
          );
        };
        return null;
    };

    return (
        <LineChart
        width={650} height = {550} data = {data}
        margin = {{top: 5, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray={"3 3"} />
            <XAxis dataKey={"name"} />
            <YAxis />
            <Tooltip content={<CustomTooltip />}/>
            <Legend />
            <Line type = "monotone" dataKey = {"uv"} />
            
        </LineChart>
    );
};

export default NormalCurve;