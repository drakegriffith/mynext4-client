import React from "react";
import { School } from "tabler-icons-react";
import Footer from "../Landing/Footer";
import TopNav from "../Nav/components/TopNav";
import "./SchoolSystems.css";

function SchoolSystems() {
  return (
    <div>
      <section className="schools-s1">
        <div style={{ position: "absolute", width: "100%" }}>
          <TopNav />
        </div>
        <div id="schools-info-icon">
          <School size={48} />
        </div>
        <p id="schools-nametag">School Systems</p>
        <h2 id="schools-title">
          {" "}
          Have a helping hand to finish things faster.{" "}
        </h2>
        <p id="schools-desc">
          {" "}
          Elevate efficiency with our game-changing tools made to enhance
          counselor convenience.
        </p>
      </section>
      <section className="schools-s2">
        <h2 id="schools-s2-header"> Setting students up for success. </h2>
        <p id="schools-s2-desc">
          {" "}
          We'll provide students the resources the require to grow, and send
          counselors the student specifics.{" "}
        </p>
      </section>
      <section className="schools-s3">
        <h2 id="schools-s3-header">
          {" "}
          Tools to complement college counselors.{" "}
        </h2>
        <p id="schools-s3-desc">
          {" "}
          We'll provide plenty of pre-created counselor tools ready for use upon
          a school's registration.{" "}
        </p>
      </section>
      <section className="schools-s4">
        <h2 id="schools-s4-header">
          {" "}
          Boosting overall oppourtunity for students.{" "}
        </h2>
        <p id="schools-s4-desc">
          {" "}
          We ensure that every student is connected to the courses, colleges,
          and careers that fit for them.{" "}
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default SchoolSystems;
