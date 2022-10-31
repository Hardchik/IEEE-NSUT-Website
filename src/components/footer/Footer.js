import React from "react";
import "./Footer.css";
import logo from "../assets/images/ieeelogo.png";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import {FaMapMarkerAlt, FaEnvelope, FaPhoneAlt} from "react-icons/fa";
function Footer() {
  return (
    <div>
        {/* <div className="footer">
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
      </div> */}

      <footer className="footer-distributed">

			<div className="footer-left">

				{/* <h3>Company<span>logo</span></h3> */}
        <img src={logo} className="f_logo" />


				<p className="footer-links">
        <a href="#home" className="link-1" style={{ textDecoration: "none", color: "white" }}>
              Home
          </a>
					
          <a href="#about" style={{ textDecoration: "none", color: "white" }}>About</a>

          <a href="#events" style={{ textDecoration: "none", color: "white" }}>
              Events
          </a>

					<a href="#team" style={{ textDecoration: "none", color: "white" }}>
              Team
          </a>
				</p>

				<p className="footer-company-name">IEEE NSUT ©2022</p>
			</div>

			<div className="footer-center">

				<div className="fas">
					{/* <i className="fa fa-map-marker"></i> */}
            <div className="fa"><FaMapMarkerAlt /></div>
					<p><span>NSUT, Sector-3</span> Dwarka, Delhi</p>
				</div>

				<div className="fas">
					{/* <i className="fa fa-phone"></i> */}
          <div className="fa"><FaPhoneAlt /></div>
					<p>+1.555.555.5555</p>
				</div>

				<div className="fas">
					{/* <i className="fa fa-envelope"></i> */}
          <div className="fa"><FaEnvelope /></div>
					<p><a href="mailto:ieeensut@gmail.com">ieeensut@gmail.com</a></p>
				</div>

        <div className="footer-icons">

					<a href="https://www.facebook.com/ieeensut"><FaFacebookF />
            {/* <i className="fa fa-facebook"></i> */}
          </a>
					<a href="https://twitter.com/ieeensut"><FaTwitter />
            {/* <i className="fa fa-twitter"></i> */}
          </a>
					<a href="https://in.linkedin.com/company/ieee-nsut"><FaLinkedinIn />
            {/* <i className="fa fa-linkedin"></i> */}
          </a>
					<a href="https://github.com/nsutieee"><FaGithub />
            {/* <i className="fa fa-github"></i> */}
          </a>

				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About our Branch</span>
					IEEE NSUT aims at helping students in building an attitude towards applying engineering in daily life by learning ways to use the latest technology on offer.
				</p>

				{/* <div className="footer-icons">

					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="#"><i className="fa fa-linkedin"></i></a>
					<a href="#"><i className="fa fa-github"></i></a>

				</div> */}
        <div className="btn_footer">
            <a href="#about" style={{ textDecoration: "none", color: "#1b72f7" }}>
              {" "}
              Know more
            </a>
        </div>
			</div>

		</footer>

    </div>
  );
}

export default Footer;
