import React from "react";
import Hero from "../../components/Hero";
import Content from "../../components/Content";
import Profile from "../../assets/images/profile.png";
// import Col from "react-bootstrap/Col";
import pdf from "../../assets/resume.pdf";

var imgStyle = {
  borderRadius: 16,
  textAlign: "center",
};

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        {/* <Col xs={6} md={4} lg={4}> */}
        <img
          id="ProfileImage"
          src={Profile}
          alt="Myself, at my graduation from Berry College in 2016"
          style={imgStyle}
        />
          <p>
            Hello! I am a technology student who is attending the Georgia Tech
            Coding Bootcamp to broaden my horizons. I live in Ringgold, Georgia.
            I am an analytical thinker with a eye for detail. I thrive on
            feedback and am a joy to work with. Don't just ask me, ask my
            references. Before Coronavirus, I worked as an intern at Unum in
            Chattanooga, TN. I was also finishing my degree in management of
            information systems. In 2016 I graduated with a degree in
            international studies from Berry College, in Rome, Georgia. My work
            experiences include 7 months at Walt Disney World Resort in Orlando,
            Florida. I chose to take this bootcamp to boost my skills and start
            a career.
          </p>
        <div className="row">
          <p>
            My skills include React, Javascript, Node.js, CSS, MySQL, MongoDB,
            Express.js, Customer Service, and some experience with International
            Business. You can connect with me on{" "}
            <a href="www.linkedin.com/in/andrew-marcus1">LinkedIn</a> and view
            my {" "}
            <a href={pdf} target="_blank" rel="noreferrer">Resume. </a>
            Thank you for visiting!
          </p>
        </div>
      </Content>
    </div>
  );
}

export default AboutPage;
