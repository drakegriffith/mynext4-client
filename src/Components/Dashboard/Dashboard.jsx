import React from "react";
import TopNav from "../Nav/components/TopNav";
import "./DashboardStyles.css";
import { Paper, Avatar } from "@mantine/core";
import { Book2, School, Package, IdBadge2, Helmet } from "tabler-icons-react";
import CoreComponents from "./components/CoreComponents";
import MissionsContainer from "./components/MissionsContainer";
import ProfileContainer from "./components/ProfileContainer";
import CardDisplayContainer from "./components/CardDisplayContainer";
import Footer from "../Landing/Footer";
function Dashboard() {
  return (
    <div>
      <section id="dash-s1">
        <div style={{ position: "absolute", width: "100%" }}>
          <TopNav />
        </div>
        <h2 id="dash-top-title"> Welcome back, John </h2>

        <div id="dash-main-container">
          <Paper shadow="lg" p="lg">
            <div style={{ display: "flex" }}>
              <h4 style={{ fontSize: "20px", marginLeft: "4vw" }}> My Menu </h4>
              <h4 style={{ fontSize: "20px", marginLeft: "16vw" }}>
                {" "}
                My Missions{" "}
              </h4>
            </div>
            <div style={{ marginBottom: 20, display: "flex" }}>
              <ProfileContainer />
              <MissionsContainer />
            </div>
            <div style={{ display: "flex" }}>
              <h4 style={{ fontSize: "20px", marginLeft: "4vw" }}>
                {" "}
                Core Components{" "}
              </h4>
              <h4 style={{ fontSize: "20px", marginLeft: "16vw" }}> Cards </h4>
            </div>
            <div style={{ display: "flex" }}>
              <CoreComponents />
              <CardDisplayContainer />
            </div>
          </Paper>
        </div>
      </section>
      <section id="dash-s2">
        <div id="dash-main-container">
          <Paper shadow="lg" p="lg">
            <h4 style={{ fontSize: "32px", textAlign: "center" }}>
              {" "}
              Resource Recommender{" "}
            </h4>
            <p style={{ fontSize: "12px", textAlign: "center" }}>
              {" "}
              Coming soon towards you...{" "}
            </p>
          </Paper>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Dashboard;
