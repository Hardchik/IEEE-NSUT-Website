import React from "react";
import Lottie from "lottie-react";
import homeanime from "../assets/gifs/home.json";
import "./Home.css";
import Typewriter from "typewriter-effect";
import {BsInstagram} from 'react-icons/bs'
import {GrLinkedinOption} from 'react-icons/gr'
import {FaFacebookF} from 'react-icons/fa'
function Home() {
  let [over,setOver]=React.useState(false);

  let buttonstyle = {
    textDecoration: 'none',
    color: 'white'
  }
  
  if(over) {
    buttonstyle.color = '#1A73F7'
  }
  else {buttonstyle.color = 'white'}

  return (
    <div className="home" id="home">
      <div className="home_left_sec">
        <div className="home_head">Welcome to</div>
        <div className="home_sec">
          <Typewriter
            options={{
              strings: ["IEEE NSUT"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="home_head">Official website</div>
        <div className="abt_home">
            IEEE NSUT is one of the most renowned student branches of the IEEE architecture due to its well-defined contributions and unique impacts.
        </div>
        <div className="home_btn" onMouseOver={()=> setOver(true)} onMouseOut={()=> setOver(false)}>
        <a href="#about" style={buttonstyle}>  Get Started</a>
      </div>
      </div>
      <div className="home_right_sec">
        <Lottie animationData={homeanime} loop={true} className="home_anime" />;
      </div>
        <div className="icons_home"
        >
            <div className="line">
                
            </div>
            <div className="icon_coll">
            <a href="https://www.instagram.com/ieee_nsut/" style={{ textDecoration: "none", color: "black" }}>   <BsInstagram className="icon"/></a>
            <a href="https://www.linkedin.com/company/ieee-nsut/mycompany/" style={{ textDecoration: "none", color: "black" }}> <GrLinkedinOption className="icon"/></a>
            <a href="https://www.facebook.com/groups/ieeensit/" style={{ textDecoration: "none", color: "black" }}>     <FaFacebookF className="icon"/></a>
            </div>
            <div className="line">

            </div>
        </div>
    </div>
  );
}

export default Home;
