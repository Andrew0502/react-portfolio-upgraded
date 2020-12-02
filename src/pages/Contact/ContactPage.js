import React from "react";
import pdf from "../../assets/resume.pdf";
import Hero from "../../components/Hero";
import Content from "../../components/Content";
// import Axios from "axios";


function ContactPage(props){
  return (
    <div>
      <Hero title={props.title} />
      <Content>
          <p>
            You can reach out to me via LinkedIn or Email.
          </p>
        <div className="row">
            <ul>
              <li><a href="https://www.linkedin.com/in/andrew-marcus1/">LinkedIn</a></li>
              <li>agcmarcus@gmail.com</li>
            </ul>

          {/* <p>
            My skills include React, Javascript, Node.js, CSS, MySQL, MongoDB,
            Express.js, Customer Service, and some experience with International
            Business. You can connect with me on{" "}
            and view
            my {" "}
            <a href={pdf} target="_blank" rel="noreferrer">Resume. </a>
            Thank you for visiting!
          </p> */}
        </div>
      </Content>
    </div>
    
  )
}

export default ContactPage;
