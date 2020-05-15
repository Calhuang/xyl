import React, { useState } from 'react';
import './ExperienceCard.scss';

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
          <img width="50" src={companyInfo.img} alt="company"/>
        </div>
      </div>
      <div className="exp-card-inner">
        <br/>
        <div>Location: Los Angeles</div>
        <br/>
        <div>Description: A real-estate platform for connecting professionals and home-buyers</div>
        <br/>
        <div>Duration Worked: {companyInfo.timeWorked}</div>
        <br/>
        {/* <div className="exp-status-container">
          <div>{`Status: `}</div>
          <div className="exp-status-box">ONBOARD</div>
        </div> */}
      </div>
      <br/>
      <div className="exp-card-bottom" onClick={() => window.open(companyInfo.link, '_blank')}>
        Visit ->
      </div>
    </div>
  )
}

export default ExperienceCard;
