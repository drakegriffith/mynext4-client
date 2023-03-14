import React from "react";
import "./Demo.css";
import { Bolt, Package, Slideshow } from "tabler-icons-react";
import TopNav from "../Nav/components/TopNav";
import { Link } from "react-router-dom";
import { Text, Card, Paper, Image, Avatar, Group } from "@mantine/core";
function SmallerDemo() {
  return (
    <Card
      sx={{
        margin: "0 8em 0 auto",
        top: "20%",
        padding: 0,
        width: "24vw",
        height: "36em",
        backgroundColor: 'lightgreen',
        backgroundSize: "cover",
      }}
      withBorder
      shadow="lg"
      radius="md"
    >
      <div
        style={{
          marginTop: "0%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar
          mt={0}
          color="blue"
          style={{
            width: "100%",
            height: "14vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Slideshow size={64} width={64} />
        </Avatar>
        <Paper
          shadow="md"
          style={{
            padding: "0 5px",
            marginTop: 10,
            width: "100%",
            height: "8.5vh",
            backgroundColor: "white",
          }}
        >
          <h4
            style={{
              fontSize: "20px",
              textAlign: "center",
              marginTop: 10,
              fontWeight: 400,
            }}
          >
            {" "}
            Welcome to the MyNext4 Demo!
          </h4>
          <Paper shadow="lg" mt={95}>
            <div id="demo-landing-table">
              <li id="">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: 600,
                    border: '1px solid black',
                    borderRadius: '10px 10px 10px 10px',
                    margin: 5
                  }}
                  to="/MyCourses"
                >
                  Courses Page
                </Link>
              </li>
              <li id="">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: 600,
                    border: '1px solid black',
                    borderRadius: '10px 10px 10px 10px',
                    margin: 5
                  }}
                  to="/MyColleges"
                >
                  Colleges Page
                </Link>
              </li>
              <li id="">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: 600,
                    border: '1px solid black',
                    borderRadius: '10px 10px 10px 10px',
                    margin: 5
                  }}
                  to="/MyCareer"
                >
                  Careers Page
                </Link>
              </li>
            </div>
          </Paper>
          <Paper shadow="lg" mt={30}>
            <div id="demo-landing-table">
              <li id="">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: 600,
                    border: '1px solid black',
                    borderRadius: '10px 10px 10px 10px',
                    margin: 5
                  }}
                  to="/ExploreCourses"
                >
                  Explore Courses
                </Link>
              </li>
              <li id="">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: 600,
                    border: '1px solid black',
                    borderRadius: '10px 10px 10px 10px',
                    margin: 5
                  }}
                  to="/ExploreColleges"
                >
                  Explore Colleges
                </Link>
              </li>
              <li id="">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: 600,
                    border: '1px solid black',
                    borderRadius: '10px 10px 10px 10px',
                    margin: 5
                  }}
                  to="/ExploreCareers"
                >
                  Explore Careers
                </Link>
              </li>
            </div>
          </Paper>
        </Paper>
      </div>
    </Card>
  );
}

export default SmallerDemo;
