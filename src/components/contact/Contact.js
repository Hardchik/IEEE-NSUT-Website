import React from "react";
import Lottie from "lottie-react";
import canime from "../assets/gifs/contact.json";
import "./Contact.css"
function Contact() {
  return (
    <div className="contact">
      <div className="left_contact">
        <div className="contact_h">Contact us at</div>
        <div className="contact_b">IEEE NSUT</div>

      <div className="form_contact">
        <form action="https://submit-form.com/9k1uE706" className="f_con">
        <input
    type="hidden"
    name="_redirect"
    value="https://www.ieeensut.com/"
  />
            <div className="input_wrap">

     
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required=""
            className="name_field"
          />
          
                 </div>
                 <div className="input_wrap">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required=""
            className="name_field"
          />
                 </div>
                 <div className="input_wrap">
          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required=""
            className="name_field"
          ></textarea>
                 </div>
          <button type="submit" className="form_sbt">Send</button>
        </form>
      </div>
      </div>
      <div className="right_contact">
        <Lottie animationData={canime} loop={true} className="c_anime" />;
      </div>
    </div>
  );
}

export default Contact;
