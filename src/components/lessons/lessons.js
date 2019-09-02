import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="lessons">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Client Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  <li>
                    <blockquote>
                      <p>If we say we have no sin, we deceive ourselves, and the truth is not in us.  
                        If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.
                      </p>
                      <cite>1 John 1:8-9</cite>
                    </blockquote>
                  </li> {/* slide ends */}
                  <li>
                    <blockquote>
                      <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                        nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                      </p>
                      <cite>Mr. Adobe</cite>
                    </blockquote>
                  </li> {/* slide ends */}
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section> {/* Testimonials Section End*/}
      </React.Fragment>
    );
  }
}