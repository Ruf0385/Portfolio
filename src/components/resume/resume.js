import React, { Component } from "react";
import ResumeMap from "../resumeMap/resumeMap";
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="resume">
          <ResumeMap />
          {/* Skills
        ----------------------------------------------- */}
          <div className="row skill">
            <div className="four columns header-col">
              <h2>
                <span>Skills</span>
              </h2>
            </div>
            <div className="six columns main-col">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.0" width="40" height="40" viewBox="0 0 26 17"><path d="M 0,0 L 17,0 L 0,17 L 0,0 z" fill="#C7191B" /></svg>
              <h3>Software</h3>
              <p>
                I've spent a lot of time curating a very specific set of skills.
                My areas of expertise are with the software listed here.
              </p>
            </div>
            <div className="row">
            <div className="six columns main-col">
              <div className="bars">
                <ul className="skills">
                  <li>
                    <span className="bar-expand autodesk" />
                    <em>Autodesk's AEC Collection</em>
                  </li>
                  <li>
                    <span className="bar-expand illustrator" />
                    <em>Adobe Illustrator</em>
                  </li>
                  <li>
                    <span className="bar-expand qgis" />
                    <em>QGIS</em>
                  </li>
                  <li>
                    <span className="bar-expand wordpress" />
                    <em>WordPress</em>
                  </li>
                </ul>
              </div>
              {/* end skill-bars */}
            </div>{" "}
            <div className="six columns main-col">
              <div className="bars">
                <ul className="skills">
                <li>
                <span className="bar-expand css" />
                <em>CSS3</em>
                </li>
                <li>
                <span className="bar-expand html5" />
                <em>HTML5</em>
                </li>
                <li>
                <span className="bar-expand react" />
                <em>React</em>
                </li>
                <li>
                <span className="bar-expand windows" />
                <em>
                  Windows10 <span>•</span> Server 2012 R2
                </em>
                </li>
                </ul>
              </div>
              {/* end skill-bars */}
            </div>{" "}
            {/* main-col end */}
            </div>
          </div>{" "}
          {/* End skills */}
        </section>{" "}
        {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}




