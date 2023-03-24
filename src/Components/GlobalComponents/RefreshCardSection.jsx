import React from "react";
import CollegeCard from "./CollegeCard";
import "./RefreshCardSection.css";
import { Refresh } from "tabler-icons-react";

/*
Needs to be updated with state to update
on refresh
*/
function RefreshCardSection() {
  return (
    <div className="rootRCS">
      <CollegeCard />
      <CollegeCard />
      <CollegeCard />
      <Refresh size={48} strokeWidth={2} color={"black"} />
    </div>
  );
}

export default RefreshCardSection;
