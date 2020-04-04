import React, { useState } from 'react';
import './Experience.scss';
import ExpCard from 'components/ExperienceCard/ExperienceCard'

function Experience() {
  const [expArray, setExpArray] = useState([
    {
      companyName: 'DoubleDoor Technologies Inc'
    },
    {
      companyName: 'Sublime Industries'
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
