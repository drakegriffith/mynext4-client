import React from "react";
import TopNav from "../Nav/components/TopNav";
import Footer from "../Landing/Footer";
import "./Students.css";
import { Users } from "tabler-icons-react";

function Students() {
  return (
    <div>
      <section className="students-s1">
        <div style={{ position: "absolute", width: "100%" }}>
          <TopNav />
        </div>
        <div id="students-info-icon">
          <Users size={48} />
        </div>
        <p id="students-nametag">Students</p>
        <h2 id="schools-title">
          {" "}
          Supplementing students with the right supplies.{" "}
        </h2>
        <p id="schools-desc">
          {" "}
          Access any academic resource automatically and find the best fit for
          you.
        </p>
      </section>
      <section className="students-s2">
        <h2 id="students-s2-header">
          {" "}
          Accurate, automatic, and accessible resources.{" "}
        </h2>
        <p id="students-s2-desc">
          {" "}
          Any course, college, or career information can be found on MyNext4.
          Explore endlessly with us.{" "}
        </p>
      </section>
      <section className="students-s3">
        <h2 id="students-s3-header">
          {" "}
          Focusing on the future rather than the now.{" "}
        </h2>
        <p id="students-s3-desc">
          {" "}
          We provide a personalized path for every single student so they can
          achieve anything.{" "}
        </p>
      </section>
      <section className="students-s4">
        <h2 id="students-s4-header">
          {" "}
          Boosting overall oppourtunity for students.{" "}
        </h2>
        <p id="students-s4-desc">
          {" "}
          We ensure that every student is connected to the courses, colleges,
          and careers that fit for them.{" "}
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default Students;
