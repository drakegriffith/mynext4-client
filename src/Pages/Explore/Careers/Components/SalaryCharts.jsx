import NormalCurve from "./NormalCurve";
import "./SalaryCharts.css";

function SalaryCharts(props) {
    return (
        <div className="salary_charts_container">
            <div className="salary_charts_curve1">
                <p>
                    Annual salary
                </p>
                <NormalCurve 
                tenth = {props.anually.tenth}
                median = {props.anually.median}
                ninetyith = {props.anually.ninetyith}/>
            </div>

            <div className="salary_charts_curve2">
                <p>
                    Hourly Salary
                </p>
                <NormalCurve 
                tenth = {props.hourly.tenth}
                median = {props.hourly.median}
                ninetyith = {props.hourly.ninetyith}/>
            </div>
        </div>
    );
};

export default SalaryCharts;