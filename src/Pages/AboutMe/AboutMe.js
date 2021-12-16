import { Container, Grid } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutMe.css";

import * as React from "react";

import Service from "./Service/Service";

const AboutMe = () => {
  React.useEffect(() => {
    AOS.init();
  });
  return (
    <div className="about-container">
      <Container className="about-container">
        <div>
          <div>
            <h1 style={{ fontSize: "3rem" }}>ABOUT ME</h1>
            <hr style={{ marginBottom: "50px" }} />
          </div>
          <Grid container spacing={2} style={{ marginBottom: "100px" }}>
            <Grid
              item
              xs={12}
              md={6}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img
                style={{ width: "100%" }}
                src="https://i.ibb.co/sF033Xf/FB-IMG-1638929910014.jpg"
                alt=""
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <div
                className="about-me"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <h1>
                  I am{" "}
                  <span style={{ color: "aquamarine" }}>
                    Ahmed Jafrul Islam
                  </span>
                </h1>
                <p>
                  I am a frontend web developer. I can provide clean code and
                  pixel perfect design. I also make website more and more
                  interactive with web animation
                </p>
                <p>
                  {" "}
                  <b>Full Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b> Ahmed Jafrul
                  Islam
                </p>
                <p>
                  {" "}
                  <b>
                    Age&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                  </b>{" "}
                  24 Years
                </p>
                <p>
                  {" "}
                  <b>Nationality&nbsp;&nbsp;&nbsp;&nbsp;:</b> Bangladeshi
                </p>
                <p>
                  {" "}
                  <b>Languages&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b> English,
                  Bengali
                </p>
                <p>
                  {" "}
                  <b>
                    Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                  </b>{" "}
                  Narayanganj, Dhaka, Bangladesh
                </p>
                <p>
                  {" "}
                  <b>Freelance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b>{" "}
                  Available
                </p>
                <br />
                <a
                  id="home-link"
                  href="https://drive.google.com/file/d/1W2bq6qijx_IA--6aQqD3IykpfD_pop-i/view"
                  target="_blank"
                >
                  Download Resume
                </a>
              </div>
            </Grid>
          </Grid>
        </div>
        <div>
          <Service></Service>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;
