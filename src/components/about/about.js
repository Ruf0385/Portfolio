import React, { useState, Component } from 'react';
import AboutMap from '../aboutMap/aboutMap'
import mapboxgl from 'mapbox-gl'
import classes from './about.module.css';
import { italic } from 'ansi-colors';

class About extends Component {
  handleScroll = (e) => {
    console.log(e)
    let element = e.target
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      // do something at end of scroll
      console.log(element)
    }
  }

  render() {
     return (
      <React.Fragment>
      <section id="about">
      <div className="row">
          <div className="five columns">
          </div>
          <div className="seven columns main-col">
            
          </div>
        </div>
        <div className="row">
          <div className="five columns">
            <AboutMap />
          </div>
          <div className="seven columns main-col">
          <div className="row">
            <h2>Where&nbsp;Am&nbsp;I?</h2>
          </div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.0" width="40" height="40" viewBox="0 0 26 17"><path d="M 0,0 L 17,0 L 0,17 L 0,0 z" fill="#C7191B" /></svg>
            <h3>
              Maryland's Beautiful Eastern Shore
            </h3>
            <p><img className="profile-pic" src="images/profile.png" alt="" />I live on the Peninsula colloquially named <span className="tooltip">Delmarva<span className="tooltiptext">For Delaware, Maryland <i>and</i> Virginia</span></span>. I spend a lot of time on a computer designing things and making things work as a relentless problem solver.  When off the grid, I am speding time with my wife Sarah 🙋🏼‍♀️ and our kids Ruby, Raegan and Paxton 💕💙, or you just might find me on a golf course. 🏌🏼‍♂️.............⛳
            </p>
            <div className="row">
              <h2>What Am I Doing?</h2>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.0" width="40" height="40" viewBox="0 0 26 17"><path d="M 0,0 L 17,0 L 0,17 L 0,0 z" fill="#C7191B" /></svg>
            <h3>
              Studying For CompTIA A+ Exams📑
            </h3>
            <p>A small part of growing in the field of technology is getting certifications.  Currently, I'm busy studying what is considered the industry standard certification for IT, called the CompTIA A+.  The certification requires passing two 90-question exams.  My first exam is scheduled for 9/27.
            </p>
          </div> {/* end .main-col */}
        </div>
      </section> {/* About Section End*/}
      </React.Fragment>
    );
  }
}

export default About