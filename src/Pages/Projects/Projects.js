import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Project from "../Project/Project";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("./projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  useEffect(() => {
    AOS.init();
  });

  return (
    <div
      className="project-container project-portion"
      style={{ paddingBottom: "25px" }}
    >
      <Container style={{ margin: "auto" }}>
        <div data-aos="zoom-out" data-aos-duration="2000">
          <h3
            style={{ textAlign: "center", fontSize: "4rem", padding: "30px" }}
          >
            My Recent
            <span style={{ color: "aquamarine" }}> Projects</span>
          </h3>
        </div>
        <div style={{ margin: "auto" }}>
          {projects.map((project) => (
            <Project key={project.name} project={project}></Project>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Projects;
