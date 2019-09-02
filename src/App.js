import React, { Component } from 'react';
import classes from './App.module.css'; 
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Lessons from  './components/lessons/lessons';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
class App extends Component {
  render() {
    return (
      <div>
        <div className={classes.TopTriangle}></div>
        <div className={classes.Wrapper}>
          <Header />
          <About />
          <Portfolio />
          <Resume />
          <Lessons />
          <ContactUs />
          <Footer />
        </div>
        <div className={classes.BottomTriangle}></div>
      </div>
    );
  }
}
export default App;