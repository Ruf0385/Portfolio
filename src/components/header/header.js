import React, { Component } from 'react';
import { italic } from 'ansi-colors';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#lessons">Lessons</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">HELLO!&nbsp;🙋🏻‍♂️&nbsp;I'M, <span>Adam&nbsp;Ruf&nbsp;&mdash;&mdash;</span></h1>
              <p>I am a technology enthusiest who works at Lane Engineering, LLC. I use <span>GIS</span> and <span>CAD</span> in the <span className="tooltip">AEC industry<span className="tooltiptext">Architecutre,&nbsp;Engineering,&nbsp;and&nbsp;Construction</span></span>.  I create fun projects by
                combining these technologies with principles of design. Let's <a className="smoothscroll" href="#about"> scroll down </a>
                to learn more about me.</p>
          </div>
          <button>OK, LET'S <i>do</i> SOMETHING</button>
            <ul className="social">
              <li><a href="https://www.facebook.com/adamruf" target="_blank"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://www.twitter.com/ruf0385" target="_blank"><i className="fa fa-twitter"  /></a></li>
              {/* <li><a href="#"><i className="fa fa-google-plus" /></a></li> */}
              <li><a href="https://www.linkedin.com/in/adam-ruf-26b43837/" target="_blank"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/ruf0385/"  target="_blank"><i className="fa fa-instagram" /></a></li>
              {/* <li><a href="#"><i className="fa fa-dribbble" /></a></li>
              <li><a href="#"><i className="fa fa-skype" /></a></li> */}
            </ul>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header> {/* Header End */}
      </React.Fragment>
    );
  }
}