import React from "react"
import Fade from "react-reveal/Fade"
import data from "../mydata"

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <span>
             View & Download Resume {" "}
            <a href="https://drive.google.com/file/d/1Lz3hiv8KF_UfV4Ni-DR8VQTKlTRqmDlc/view?usp=sharing">Here.</a>
          </span>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about" width="427" height="534"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
