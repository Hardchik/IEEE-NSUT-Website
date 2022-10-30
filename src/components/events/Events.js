import React from 'react'
import './Events.css'
import {MdSchedule} from 'react-icons/md'
function Events() {
    let [over1, setOver1] = React.useState(false);
    let [over2, setOver2] = React.useState(false);
    let buttonstyle1 = {
        textDecoration: 'none',
        color: 'white'
    }
    let buttonstyle2 = {
        textDecoration: 'none',
        color: 'white'
    }
    if(over1) {
        buttonstyle1.color = '#1B72F7'
    } else if(over2) {
        buttonstyle2.color = '#1B72F7'
    } else if(!over1) {
        buttonstyle1.color = 'white'
    } else if(!over2) {
        buttonstyle2.color = 'white'
    }
  return (
    <div className='EventPage' id="events">
    <div className="event">EVENTS</div>
    <div className="card-header">Explore Future Events</div>
    <div className="card-container">

          <div className="card">
              <div className="date-container">
                  <div className="date">4</div>
                  <div className="month-year">
                      <div className="month">October</div>
                      <div className="year">2022</div>
                  </div>
              </div>

              <div className="timing">
                  <MdSchedule/>
                  <p>9:00 AM</p>
              </div>
              <div className="divider-line"></div>

              <div className="card-content">
                  <h3>Xtreme league | Episode 1</h3>
                  <div className="description">Session by Utkarsh gupta
                  </div>
              </div>

              <button className="read-more" onMouseOver={()=>setOver1(true)} onMouseOut={()=>setOver1(false)}>
              <a href="https://www.instagram.com/p/CjM7Et2uEea/" style={buttonstyle1}>Explore Now</a>
                </button>

          </div>
         
          <div className="card">
              <div className="date-container">
                  <div className="date g-1">13</div>
                  <div className="month-year g-2">
                      <div className="month">October</div>
                      <div className="year">2022</div>
                  </div>
              </div>

              <div className="timing">
              <MdSchedule/>
                  <p>12:00 PM </p>
              </div>

              <div className="divider-line"></div>

              <div className="card-content">
                  <h3>WIE Pitchers</h3>
                  <div className="description">An ideathon under project Inspire
                  </div>
              </div>

              <button className="read-more" onMouseOver={()=>setOver2(true)} onMouseOut={()=>setOver2(false)}>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScG4TdIlJONHAQ0OVAnuDb0Y9wHpibsXadd9BXd6boaQGhx_w/viewform" style={buttonstyle2}> Explore Now</a>
                </button>
          </div>



         

      </div>
      </div>
  )
}

export default Events