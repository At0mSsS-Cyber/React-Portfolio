import React, { useState } from "react";
import { Container, Tooltip, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FaReact, FaNodeJs, FaVuejs } from "react-icons/fa";
import {
  SiJavascript,
  SiDjango,
  SiMongodb,
  SiSqlite,
  SiExpress,
  SiCss3,
  SiThreedotjs,
} from "react-icons/si";

import "./Works.css";

// Import assets
import Portfolio from "../../assets/recentprojects/react-portfolio.png";
import Auction from "../../assets/recentprojects/auction.png";
import Health from "../../assets/recentprojects/health.png";
import Food from "../../assets/recentprojects/food.png";
import Proctor from "../../assets/recentprojects/proctor.png";

const techIcons = {
  FaReact: { component: FaReact, title: "React", color: "#4535C1" },
  SiMongodb: { component: SiMongodb, title: "MongoDB", color: "#55a54d" },
  FaNodeJs: { component: FaNodeJs, title: "Node.JS", color: "rgb(127 199 40)" },
  FaVuejs: { component: FaVuejs, title: "VueJS", color: "#3fb27f" },
  SiDjango: { component: SiDjango, title: "Django", color: "#00382a" },
  SiSqlite: { component: SiSqlite, title: "SQLite", color: "#003a5b" },
  SiExpress: { component: SiExpress, title: "Express.JS", color: "#7e7e7e" },
  SiThreedotjs: { component: SiThreedotjs, title: "Three.JS", color: "#00000" },
  SiJavascript: {
    component: SiJavascript,
    title: "JavaScript",
    color: "#e8d44d",
  },
  SiCss3: { component: SiCss3, title: "CSS", color: "#254bdd" },
};

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects] = useState([
    {
      id: 1,
      title: "React Portfolio",
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      alter: "React Portfolio",
      image: Portfolio,
      stack: ["FaReact", "SiThreedotjs"],
    },
    {
      id: 2,
      period: "2021",
      title: "Online Auction",
      image: Auction,
      description:
        "An online auction management system is software that facilitates the buying and selling of goods or services through online bidding. It provides a platform for users to participate in auctions over the internet.",
      stack: ["SiMongodb", "SiExpress", "FaReact", "FaNodeJs"],
    },
    {
      id: 3,
      period: "2020",
      title: "Online Health Organizer",
      image: Health,
      description:
        "An online health management system is web-based software for patients and healthcare providers to manage health information and activities, track weight, and offer exercises to achieve ideal weight.",
      stack: ["SiMongodb", "SiExpress", "FaVuejs", "FaNodeJs"],
    },
    {
      id: 4,
      period: "2019",
      title: "Online Food Ordering",
      image: Food,
      description:
        "An online food ordering system is web-based software that enables customers to order food from local restaurants. It allows browsing menus, placing orders, and making payments online, aiming to provide convenience for customers and enhance efficiency and profitability for the food service industry.",
      stack: ["SiDjango", "SiSqlite", "SiJavascript", "SiCss3"],
    },
    {
      id: 5,
      period: "2018",
      title: "Proctor Management",
      image: Proctor,
      description:
        "A proctor management system is web-based software designed to manage and monitor exam proctors' activities. It allows educational institutions to schedule and track proctors, ensuring exam integrity and security.",
      stack: ["SiDjango", "SiSqlite", "SiJavascript", "SiCss3"],
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="__img_wrapper">
              <img src={project.image} alt={project.alter} />
            </div>
            <div className="__content_wrapper">
              <h3 className="title">{project.id + ". " + project.title}</h3>
              <p className="description">{project.description}</p>
              <div className="__stack_wrapper">
                {project?.stack?.map((tech) => {
                  const Icon = techIcons[tech]?.component;
                  const title = techIcons[tech]?.title;
                  const color = techIcons[tech]?.color;
                  return (
                    <Tooltip
                      key={tech}
                      title={title}
                      placement="right"
                      TransitionComponent={Zoom}
                    >
                      <div style={{ paddingLeft: "5px" }}>
                        {Icon && <Icon color={color} size={30} />}
                      </div>
                    </Tooltip>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
