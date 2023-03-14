import React from "react";
import TopNav from "../Nav/components/TopNav";
import TriCardComp from "./components/TriCardComp";
import "./About.css";
import { InfoCircle } from "tabler-icons-react";
import MainMethods from "./components/MainMethods";
import Footer from "../Landing/Footer";
function About() {
  return (
    <div>
      <section className="about-s1">
        <div style={{ position: "absolute", width: "100%" }}>
          <TopNav />
        </div>
        <div id="about-info-icon">
          <InfoCircle size={48} />
        </div>
        <p id="about-nametag">About Us</p>
        <h2 id="about-title">
          {" "}
          Readily-available academic resources for all, for free.{" "}
        </h2>
        <p id="about-desc">
          {" "}
          We have a mission to provide all students the academic resources they
          require to ensure equal oppourtinity for all.
        </p>
        <TriCardComp />
      </section>
      <section className="about-s2">
        <h2 id="about-s2-header"> A step up for student success. </h2>
        <p id="about-s2-desc">
          {" "}
          Too many times students are led astray and unable to find their fit,
          and we plan to change that.{" "}
        </p>

        <MainMethods />
        <div id="about-s2-big-box">Big box section 2</div>
      </section>
      <section className="about-s3">
        <h2 id="about-s3-header">
          {" "}
          Accelerating the college counseling process for all.{" "}
        </h2>
        <p id="about-s3-desc">
          {" "}
          We want to gape the gap between counselors and their students by doing
          the grunt work for them.{" "}
        </p>
      </section>
      <section className="about-s4">
        <h2 id="about-s4-header">
          {" "}
          Increase overall oppourtunity for every individual.{" "}
        </h2>
        <p id="about-s4-desc">
          {" "}
          It's important that everyone has their chance to become a star, and
          we're here to ensure this.{" "}
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default About;
