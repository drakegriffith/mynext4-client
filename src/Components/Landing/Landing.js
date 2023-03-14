import { useRef, useEffect, useState } from "react";
import { Avatar, Group } from "@mantine/core";
import {
  Beach,
  PencilMinus,
  Cash,
  FileCertificate,
  ArrowDownCircle,
  Search,
  Book,
  Plus,
  Book2,
  Stars,
  Scale,
  Target,
  BrandInstagram,
  BrandLinkedin,
  BrandTiktok,
  BrandTwitter,
  User,
  Car,
  ChartBar,
  ViewFinder,
  Activity,
  Butterfly,
  BallBowling,
  Clipboard,
  Cookie,
  Database,
  Diamond,
  Flower,
  Chess,
  HandFinger,
  Home2,
  Leaf,
  ArrowUpRightCircle,
  Backpack,
  Atom,
  Star,
  School,
  StarHalf,
  ArrowBigRight,
  ChartCircles,
  MoodUnamused,
  CameraRotate,
  Numbers,
  MathIntegrals,
  Globe,
  ArrowDown,
  BoxMultiple1,
  Certificate,
  BoxMultiple2,
  BoxMultiple3,
  CircleSquare,
  MoodSmileBeam,
  Books,
  MathFunction,
  Flask2,
  Cell,
  Bong,
  Microscope,
  Language,
  MathMin,
  Anchor,
  Backhoe,
  Apple,
  Aperture,
  MathXPlusY,
  Plant2,
  Bug,
  ChefHat,
  DeviceDesktop,
  FileCode,
  Gavel,
  AlertTriangle,
  Apps,
} from "tabler-icons-react";
 
import SideBar from "../Nav/components/SideBar";
import TopNav from "../Nav/components/TopNav";
import landingImage from "./titleImage.png";
import { gsap } from "gsap";
import { TweenMax, Power3, TimelineLite } from "gsap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionThree from "./sections/SectionThree";
import "./Landing.css";
import { Paper, Text, Card, Image, Badge } from "@mantine/core";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import next4Logo from "./icon.png";
import SectionTwo from "./sections/SectionTwo";
import SectionFour from "./sections/SectionFour";
import SectionFive from "./sections/SectionFive";
import Footer from "./Footer";
import Affordable from "./components/corefour/Affordable";
import Library from "./components/corefour/Library";
import Personalized from "./components/corefour/Personalized";
import Equity from "./components/corefour/Equity";
import SmallerDemo from "../Demo/SmallerDemo";
import { useNavigate } from "react-router-dom";
export default function Landing() {
  const cardContainer = useRef(null);
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/signin`;
    navigate(path);
  }
  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className="landing-container">
      <section
        id="section1"
        style={{ position: "relative", width: "100%", height: "100vh" }}
      >

        <div style={{ position: "absolute", width: "100%" }}>
          <TopNav />
        </div>
        <div
          id="carousel-container-landing"
          style={{
            position: "relative",
            margin: "0 auto 0 auto",
            left: "70%",
            top: "20%",
          }}
        >
          <Carousel
            width="24vw"
            showThumbs="False"
            showIndicators="False"
            axis="vertical"
            autoPlay="True"
            dynamicHeight="True"
            infiniteLoop="True"
            emulateTouch="True"
          >
          
            <Affordable />
            <Library />
            <Personalized />
            <Equity />
          </Carousel>

        </div>
        <h4 id="title-text-1">Access any academic resource</h4>
        <h4 id="title-text-2">automatically and affordably. </h4>
        <p id="desc-text-1">
          {" "}
          Complement the college process with game changing component tools for
          counselors and students alike.{" "}
        </p>
        <div id='landing-btn-container'>
          <button id="btn-1" onClick={routeChange}> Start now. </button>
          <button id="btn-2" onClick={() => handleScroll(cardContainer.current)} > Learn more. </button>
        </div>

        <h4 id="title-text-1small">Access any academic resource</h4>
        <h4 id="title-text-2small">automatically and affordably. </h4>
        <p id="desc-text-small"> It's all one click away. </p>
      </section>

      <a href="#section-2">
        <div className="scroll-down"></div>
      </a>
      <div ref={cardContainer}>
        <SectionTwo />
      </div>
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </div>
  );
}
