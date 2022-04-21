import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <div className="columns"><h2>What&nbsp;Have&nbsp;I&nbsp;Done?</h2>
            </div></div>
            <div className="columns">
            <h3>
              <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.0" width="40" height="40" viewBox="0 0 26 17"><path d="M 0,0 L 17,0 L 0,17 L 0,0 z" fill="#C7191B" /></svg>
              React, Javascript, Wordpress, Design, +...
            </h3>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt="" src="images/portfolio/geodatabase.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h4>GeoDatabase</h4>
                        <p>GIS, Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="" src="images/portfolio/wcaa.png" />
                    <div className="overlay">
                    <div className="portfolio-item-meta">
                        <h4>WCAA</h4>
                        <p>WordPress, Database Management</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt="" src="images/portfolio/burger-builder.jpg" />
                    <div className="overlay">
                    <div className="portfolio-item-meta">
                        <h4>React Web App</h4>
                        <p>React JS Library</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt="" src="images/portfolio/adventureofchristmas.jpg" />
                    <div className="overlay">
                    <div className="portfolio-item-meta">
                        <h4>Jekyll Website</h4>
                        <p>Node.js, Static Site Generator</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img alt="" src="images/portfolio/calculator.png" />
                    <div className="overlay">
                    <div className="portfolio-item-meta">
                        <h4>Calculator on Codepen</h4>
                        <p>HTML, CSS, Javascript</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                    <img alt="" src="images/portfolio/budget.png" />
                    <div className="overlay">
                    <div className="portfolio-item-meta">
                        <h4>Bi-Weekly Budget</h4>
                        <p>Excel, Personal Finanace</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-07" title>
                    <img alt="" src="images/portfolio/hbc-logo.png" />
                    <div className="overlay">
                    <div className="portfolio-item-meta">
                        <h4>Hope Bible Church</h4>
                        <p>Logo Design</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-08" title>
                    <img alt="" src="images/portfolio/docimage.png" />
                    <div className="overlay">
                    <div className="portfolio-item-meta">
                        <h4>Document Imaging</h4>
                        <p>Organization</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>  {/* item end */}
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-geodatabase.png" alt="" />
            <div className="description-box">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.0" width="40" height="40" viewBox="0 0 26 17"><path d="M 0,0 L 17,0 L 0,17 L 0,0 z" fill="#C7191B" /></svg>
              <h4>GeoDatabase of Project Locations</h4>
              <p>I developed a GeoDatabase of company projects using frontend and backend development.  The stack included OpenLayers js framework, GeoServer and PostGIS.  After acquiring a csv file format of projects, I downloaded Maryland's open parcel gis data. I uploaded this dataset to PostGIS and linked the data in as a View with a unique ID created from Map, Parcel and Grid.  Linking the Postgres db to GeoServer enabled OpenLayers to see a live dataset of project locations.</p>
              <span className="categories"><i className="fa fa-tag" />GIS, Web Development</span>
            </div>
            <div className="link-box">
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-wcaa.png" alt="" />
            <div className="description-box">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.0" width="40" height="40" viewBox="0 0 26 17"><path d="M 0,0 L 17,0 L 0,17 L 0,0 z" fill="#C7191B" /></svg>
            <h4>Woodbridge Christian Athletic Association</h4>
              <p>I created a WordPress website for Church League Softball, which ran for several years.  WCAA was having trouble collecting payments on time every season.  When I met with the Board, we had discussed the need for a site that would require payment to register a team.  To get started, the website needed to manage seasons (Spring and Fall), schedules, rankings, rules, and allow login dashboard for coaches to upload team information.  First I bought the domain name wcaaball.com.  Then I set up hosting and uploaded a WordPress theme.  Using the SportsPress plugin, I was able to organize seasons that tracked teams, scores, rankings, and schdules.  I created a registration page and linked it to Stripe to accept payments, which also required the purchase of a SSL Certificate.  This website was so fun to manage and was getting thousands of visitors, but over time management decided to disban the website for a lack of teams and that was the end.</p>
              <span className="categories"><i className="fa fa-tag" />WordPress, Database Management</span>
            </div>
            <div className="link-box">
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
          <a href="https://www.udemy.com/react-the-complete-guide-incl-redux/" target="_blank"><img className="scale-with-grid" src="images/portfolio/modals/m-burger.png" alt="" /></a>
            <div className="description-box">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.0" width="40" height="40" viewBox="0 0 26 17"><path d="M 0,0 L 17,0 L 0,17 L 0,0 z" fill="#C7191B" /></svg>
              <h4>Burger Builder App - Online Course</h4>
              <p>Through a Udemy online course, I learned the fundamental aspects of the React Javascript library by building the Burger Builder App. The app allows you to add or remove burger ingredients and updates price to Google's Firebase database. Authentication was a major portion of this class. While I still have a lot to learn about React, the class was excellent and taught the fundamentals very well. Click the linked-image to see the course on Udemy.</p>
              <span className="categories"><i className="fa fa-tag" />React JS Library</span>
            </div>
            <div className="link-box">
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <a href="http://adventureofchristmas.com" target="_blank"><img className="scale-with-grid" src="images/portfolio/modals/m-adventureofchristmas.png" alt="" /></a>
            <div className="description-box">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.0" width="40" height="40" viewBox="0 0 26 17"><path d="M 0,0 L 17,0 L 0,17 L 0,0 z" fill="#C7191B" /></svg>
              <h4>Adventure of Christmas</h4>
              <p>This was a personal project that I wanted to create for my two daughters.  I wanted to find a unique way to share with them the meaning and purpose of Christmas as they will grow older.  The project began with inspiration from an advent calendar for the 25 days of Christmas, each day looking at a verse detailing the events surrounding the first Christmas two thousand years ago.  <a href="http://adventureofchristmas.com" target="_blank">The Adventure of Christmas begins here.</a></p>
              <span className="categories"><i className="fa fa-tag" />Photography</span>
            </div>
            <div className="link-box">
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
          <div id="modal-05" className="popup-modal mfp-hide">
            <a href="https://codepen.io/Ruf0385/pen/OWVyjO" target="_blank"><img className="scale-with-grid" src="images/portfolio/modals/m-calculator.png" alt="" /></a>
            <div className="description-box">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.0" width="40" height="40" viewBox="0 0 26 17"><path d="M 0,0 L 17,0 L 0,17 L 0,0 z" fill="#C7191B" /></svg>
              <h4>Calculator on Codepen</h4>
              <p>First of all, kudos to whoever designed the first calculator.  This was a project I built on Codepen to challenge my logical thinking and Javascript skills.  To start, I needed to build the Calculator's UI Buttons, and arrange each button with a click event that called a function - all in HTML.  I stored data entries to an array (called 'memory') using the push method.  From there I was able to make the +-*/ functions call the data from the array.  The = button solves the equation and pushes the result to memory.  <a href="https://codepen.io/Ruf0385/pen/OWVyjO" target="_blank">Check out my calculator here!</a></p>
              <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
            </div>
            <div className="link-box">
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-05 End */}
          <div id="modal-06" className="popup-modal mfp-hide">
            <a href="https://www.youtube.com/watch?v=SHVzo1FODuE" target="_blank"><img className="scale-with-grid" src="images/portfolio/modals/m-budget.png" alt="" /></a>
            <div className="description-box">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.0" width="40" height="40" viewBox="0 0 26 17"><path d="M 0,0 L 17,0 L 0,17 L 0,0 z" fill="#C7191B" /></svg>
              <h4>Excel-Based Bi-Weekly Budget</h4>
              <p>Personal Finance can be a chore, but it doesn't have to be.  I have tracked every penny I've spent <i>since 2011</i> (❗❗) using this detailed Bi-Weekly Budget system.  Click the linked-image to follow along on my YouTube channel as I walk through the steps to formatting an Excel based budget for personal finance.</p>
              <span className="categories"><i className="fa fa-tag" />Excel</span>
            </div>
            <div className="link-box">
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-06 End */}
          <div id="modal-07" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-hbc-logo.png" alt="" />
            <div className="description-box">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.0" width="40" height="40" viewBox="0 0 26 17"><path d="M 0,0 L 17,0 L 0,17 L 0,0 z" fill="#C7191B" /></svg>
              <h4>Hope Bible Church Logo Design</h4>
              <p>One aspect to planting Hope Bible Church was a visible representation of what the Church represents.  In this case, I needed to create a logo that conveyed Truth, Biblical Authority, and Hope.  The logo is inspired on a few fronts.  The whitespace resembles a bookmark while the cross at the apex is the symbol of Hope.  The near greenish-blue hue gives a trustworthy appearance anchoring the logo in truth.</p>
              <span className="categories"><i className="fa fa-tag" />Illustration</span>
            </div>
            <div className="link-box">
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-07 End */}
          <div id="modal-08" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-docimage.jpg" alt="" />
            <div className="description-box">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.0" width="40" height="40" viewBox="0 0 26 17"><path d="M 0,0 L 17,0 L 0,17 L 0,0 z" fill="#C7191B" /></svg>
              <h4>Document Imaging</h4>
              <p>Document Imaging is where technology meets grunt work.  The best way to describe my Document Imaging project is by explaining my process.   It went like this: First I had to remove staples and post-it notes from tens of thousands of paper documents.  Next step was to scan those documents with an OCR-capable copier.  Using a PDF editor and a little elbow grease, I poured over digitized page after page, sorting the scanned papers by date and bookmarking imporant details.  I then uploaded the documents to the secure client server.  The need for document imaging is growing larger as companies that still require paper documentation also want a safe way to store their information digitally.  The ability to automate these processes is nuanced due to specific requirements by small businesses.  The best thing this project taugt me was how to make the best use of my time.</p>
              <span className="categories"><i className="fa fa-tag" />Organization</span>
            </div>
            <div className="link-box">
              {/* <a href="http://www.behance.net">Details</a> */}
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-08 End */}
        </div> {/* row End */}
      </section> {/* Portfolio Section End*/}
      </React.Fragment>
    );
  }
}