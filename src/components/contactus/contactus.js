import React, { Component } from 'react';
import axios from 'axios';

export default class ContactUs extends Component {
  handleSubmit(e){
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    axios({
        method: "POST", 
        url:"http://localhost:3002/send", 
        data: {
            name: name,
            email: email,
            messsage: message
        }
    }).then((response)=>{
        if (response.data.msg === 'success'){
            alert("Message Sent."); 
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
}

resetForm(){
  document.getElementById('contact-form').reset();
}

  render() {
    return (
      <React.Fragment>
      <section id="contact">
        <h1>Ok! It's Your Move👊🏻&mdash;</h1>
        <div className="row section-head">
          <div className="twelve columns">
          <div className="row">
              <div className="columns">
              {/* <h2>How Can You Reach Me?</h2><br /> */}
              <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.0" width="40" height="40" viewBox="0 0 26 17"><path d="M 0,0 L 17,0 L 0,17 L 0,0 z" fill="#fff" /></svg>
              <h3>Send Me An Email:</h3>
              <p>Who doesn't love getting mail?  I sure do.  Send me an email and I will respond within 24 hours.  That's the Adam Ruf guarantee! 😜</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="twelve columns">
            {/* form */}
            {/* <form action method="POST" onSubmit={this.handleSubmit.bind(this)} id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.0" width="40" height="40" viewBox="0 0 26 17"><path d="M 0,0 L 17,0 L 0,17 L 0,0 z" fill="#C7191B" /></svg>Name <span className="required">*</span></label>
                  <input type="text" defaultValue='' size={35} id="contactName" name="contactName" />
                </div>
                <div>
                  <label htmlFor="contactEmail">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.0" width="40" height="40" viewBox="0 0 26 17"><path d="M 0,0 L 17,0 L 0,17 L 0,0 z" fill="#C7191B" /></svg>Email <span className="required">*</span></label>
                  <input type="text" defaultValue='' size={35} id="contactEmail" name="contactEmail" />
                </div>
                <div>
                  <label htmlFor="contactSubject">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.0" width="40" height="40" viewBox="0 0 26 17"><path d="M 0,0 L 17,0 L 0,17 L 0,0 z" fill="#C7191B" /></svg>Subject</label>
                  <input type="text" defaultValue='' size={35} id="contactSubject" name="contactSubject" />
                </div>
                <div>
                  <label htmlFor="contactMessage">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.0" width="40" height="40" viewBox="0 0 26 17"><path d="M 0,0 L 17,0 L 0,17 L 0,0 z" fill="#C7191B" /></svg>Message <span className="required">*</span></label>
                  <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
                </div>
                <div>
                  <button className="submit">Send Me Your Message</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form> */}
            <a className="submit" href="mailto:ruf0385@gmail.com">Ruf0385@gmail.com</a>
            {/* <div id="message-warning"> There was an error.  Your message was not sent.</div>
            <div id="message-success">
              <i className="fa fa-check" />Your message was sent, thank you!<br />
            </div> */}
          </div>
        </div>
      </section>
      </React.Fragment>
    );
  }
}