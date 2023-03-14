import React, { useState } from "react";
import "../MyCareer.css";
import { useEffect } from "react";
import { init_api, API } from "../../../API";
import { Link } from "react-router-dom";

// Small College Component - C1(X)

export const SmallCareer = ({college}) => {
    return (
        <div className="smallcollege">
            <div className="smallcollege-name">{
            college.career_name != undefined &&
            college.career_name}
            
            {college.name != undefined && 
            college.name}</div>
        </div>
    );
};

//Medium College Component - C1(Y)

export const MediumCareer = (props) => {
    const { college } = props;
    const [description, setDescription] = useState("");
    useEffect(() => {

        const getInfo = async() => {

            init_api();
            
            await API.get(`/api/career/${college.onet_id}/`)
            .then((response) => {
                
                setDescription(response.data.career.what_they_do);
            });
        };

        getInfo();
        
    }, []);
    return college ? (
        <div className="mediumcollege">
            <div className="mediumcollege-name">
                {college.career_name != undefined && college.career_name}
                {college.name != undefined && college.name}
                </div>
            <div className="mediumcollege-description">{description}</div>
            <button className="delete-button" onClick={() => props.onDelete(college)}>
            X
          </button>
          <button onClick={() => props.onAdd(college)}>
            +
          </button>
        </div>
    ) : null;
};

//Large College Component - C1(Z)

export const LargeCareer = ({ college }) => {

    const [description, setDescription] = useState("");
    const [salary, setSalary] = useState(0);

    useEffect(() => {

        const getInfo = async () => {
            init_api();
            await API.get(`/api/career/${college.onet_id}/`)
            .then((response) => {
                setDescription(response.data.career.what_they_do);
                setSalary(response.data.job_outlook.salary.annual_median);
            })
        }

        getInfo();
    }, [college])
    return college ? (
        <div className="largecollege">
            <div className="largecollege-name">
                {college.career_name != undefined && college.career_name}
                {college.name != undefined && college.name}
            </div>
            <div className="largecollege-description">{description}</div>
            <div className="largecollege-details">Anual Median Salary: {salary}</div>
        </div>
    ) : null;
};