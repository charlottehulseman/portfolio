import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

import data from "../mydata"

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Work</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {data.projects.map((project, index) => (
                <Card
                  key={index}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                  projectRepo={project.repourl}
                ></Card>
              ))}
            </Fade>
          </div>
          
        <h1>  </h1>

          <Fade bottom>
            <h1>UX Design</h1>
          </Fade>
          <div className ="grid">
            <Fade bottom cascade>
              {data.projects2.map((project, index) => (
                <Card
                  key={index}
                  heading={project.title2}
                  paragraph={project.para2}
                  imgUrl={project.imageSrc2}
                  projectLink={project.url}
                  projectRepo={project.repourl}
                ></Card>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
