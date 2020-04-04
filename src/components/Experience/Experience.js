import React, { useState } from 'react';
import './Experience.scss';
import ExpCard from 'components/ExperienceCard/ExperienceCard'
import ddqr from 'images/dd-qr.svg'

function Experience() {
  const [expArray, setExpArray] = useState([
    {
      companyName: 'DoubleDoor Technologies Inc',
      img: ddqr,
      link: 'https://www.doubledoor.io',
    },
  ])

  const generateExpCards = () => {
    return expArray.map(exp =>
      <div key={exp.companyName}>
        <ExpCard companyInfo={exp}/>
      </div>
    )
  }

  return (
    <div className="experience-container">
      {generateExpCards()}
    </div>
  )
}

export default Experience;
