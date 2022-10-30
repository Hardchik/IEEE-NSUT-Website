import React from "react";
import "./Footer.css";
import logo from "../assets/images/ieeelogo.png";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div className="sec1">
        <img src={logo} className="f_logo" />
        <div className="sec1_txt">
          IEEE NSUT aims at helping students in building an attitude towards
          applying engineering in daily life by learning ways to use the latest
          technology on offer.
        </div>
        <div className="btn_footer">
          <a href="#about" style={{ textDecoration: "none", color: "#1b72f7" }}>
            {" "}
            Know more
          </a>
        </div>
      </div>
      <div className="sec2">
        <div className="sec2_head">Useful links</div>
        <div className="sec2_body">
          <a href="#home" style={{ textDecoration: "none", color: "white" }}>
            Home
          </a>
        </div>
        <div className="sec2_body">
          <a href="#about" style={{ textDecoration: "none", color: "white" }}>
            About
          </a>
        </div>
        <div className="sec2_body">
          <a href="#events" style={{ textDecoration: "none", color: "white" }}>
            Events
          </a>
        </div>
        <div className="sec2_body">
          <a href="#team" style={{ textDecoration: "none", color: "white" }}>
            Team
          </a>
        </div>
      </div>
      <div className="sec3">
        <div className="sec2_head">Follow Us</div>
        <div className="f_logos">
          <a href="https://www.instagram.com/ieee_nsut/" style={{ textDecoration: "none", color: "white" }}>
            {" "}
            <BsInstagram className="icon_f" />
          </a>
          <a href="https://www.linkedin.com/company/ieee-nsut/mycompany/" style={{ textDecoration: "none", color: "white" }}>
            {" "}
            <GrLinkedinOption className="icon_f" />
          </a>
          <a href="https://www.facebook.com/groups/ieeensit/" style={{ textDecoration: "none", color: "white" }}>
            {" "}
            <FaFacebookF className="icon_f" />
          </a>
        </div>
        <div className="btn_footer_a">Subscribe</div>
      </div>
    </div>
  );
}

export default Footer;
