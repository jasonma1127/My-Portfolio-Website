import React from "react";
import Title from "../Components/Title";

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="title-section">
        <Title title="contact" span="contact" />
      </div>
      <div className="content-section">
        <div className="contact-section">
          <div className="contact-info">
            <div className="contact name">
              <h2>Name :</h2>
              <input />
            </div>
            <div className="contact email">
              <h2>Email :</h2>
              <input />
            </div>
            <div className="contact subject">
              <h2>Subject :</h2>
              <input />
            </div>
          </div>
          <div className="contact-message">
            <div className="contact message">
              <h2>Message :</h2>
              <textarea />
            </div>
          </div>
        </div>
        <div className="contact-btn">
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
