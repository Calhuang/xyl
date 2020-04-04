import React, { useState } from 'react';
import './ExperienceCard.scss';
import prof from 'images/profile.svg'

function ExperienceCard({ companyInfo }) {
  const [cardHover, setCardHover] = useState(false);

  return (
    <div
      className="exp-card-container eng-font"
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() =>  setCardHover(false)}>
      <div className={cardHover ? "exp-card-header hover" : "exp-card-header"}>
        <div>{companyInfo.companyName}</div>
        <div>
          <img width="50" src={prof} alt="company image"/>
        </div>
      </div>
      <div className="exp-card-inner">
        <br/>
        <div>Location: Los Angeles</div>
        <br/>
        <div>Description: A real-estate platform for connecting professionals and home-buyers</div>
        <div>Duration Worked: 1.5 years</div>
        <br/>
        <div className="exp-status-container">
          <div>{`Status: `}</div>
          <div className="exp-status-box">ONBOARD</div>
        </div>
      </div>
      <br/>
      <div className="exp-card-bottom">
        Visit ->
      </div>
    </div>
  )
}

export default ExperienceCard;
