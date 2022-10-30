import React from 'react'
import "./Couns.css"
import img from "../assets/images/prerna_gaur.jpg"
function Couns() {
  return (
    <div className='team' style={{marginTop:"120px"}}>
      <div className='team_right'>
        <img src={img} className="prerna"/>
      </div>
      <div className='team_left'>
        <div className='team_l_head'>Branch</div>
        <div className='team_l_head black'>Counsellor</div>
        <div className='team_l_body'>
        The leadership ability of Dr Prerna Gaur is her key factor which is endorsed by many great professionals belonging to different fields of science and technology.She has conducted many events in her past years and AISYWLC’20 being one of the most successful of her career. Her great leadership skills can be compiled and evaluated by the successful conduct of multiple events like AISYWLC’20 and Toycathon 2022. It wasn’t an easy task to bring various professional speakers and members of IEEE on a single platform. She not only conducted these events in a pre-planned manner but also focused that each member must get a great environment.
        </div>
        <div className='b_c_btn'>
        <a href="https://www.linkedin.com/in/prof-prerna-gaur-1819621/" style={{ textDecoration: "none", color: "white" }}> Know more</a>
          </div>
      </div>
    </div>
  )
}

export default Couns