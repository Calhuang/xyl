import React, { useState } from 'react';
import './Skills.scss';
import PBar from 'components/ProgressBar/ProgressBar'

function Skills() {
  const [skillTree, setSkillTree] = useState([
    {
      title: 'Coding Languages',
      items: [
        {
          skill: 'Javascript',
          value: 95,
        },
        {
          skill: 'Python',
          value: 75,
        },
        {
          skill: 'C',
          value: 65,
        },
        {
          skill: 'C++',
          value: 65,
        },
        {
          skill: 'Swift',
          value: 65,
        },
      ],
    },
    {
      title: 'Frontend',
      items: [
        {
          skill: 'Vue.js',
          value: 95,
        },
        {
          skill: 'Vuex',
          value: 85,
        },
        {
          skill: 'Vuetify',
          value: 95,
        },
        {
          skill: 'Quasar',
          value: 95,
        },
        {
          skill: 'React.js',
          value: 85,
        },
        {
          skill: 'Redux',
          value: 85,
        },
        {
          skill: 'SASS',
          value: 85,
        },
        {
          skill: 'Bootstrap',
          value: 85,
        },
      ],
    },
    {
      title: 'Backend',
      items: [
        {
          skill: 'Node.js',
          value: 95,
        },
        {
          skill: 'Express.js',
          value: 95,
        },
        {
          skill: 'Passport.js',
          value: 85,
        },
      ],
    },
    {
      title: 'Database',
      items: [
        {
          skill: 'MongoDB',
          value: 95,
        },
        {
          skill: 'Redis',
          value: 75,
        },
        {
          skill: 'PostgreSQL',
          value: 75,
        },
      ],
    },
    {
      title: 'Hosting',
      items: [
        {
          skill: 'Heroku',
          value: 85,
        },
        {
          skill: 'Docker',
          value: 73,
        },
        {
          skill: 'AWS Elastic Beanstalk',
          value: 73,
        },
        {
          skill: 'AWS S3',
          value: 85,
        },
        {
          skill: 'AWS CloudFront',
          value: 85,
        },
        {
          skill: 'Firebase',
          value: 75,
        },
      ],
    },
    {
      title: 'Tools/Testing',
      items: [
        {
          skill: 'Git',
          value: 95,
        },
        {
          skill: 'Mocha',
          value: 85,
        },
        {
          skill: 'Chai',
          value: 80,
        },
        {
          skill: 'CircleCI',
          value: 82,
        },
        {
          skill: 'Sinon',
          value: 85,
        },
        {
          skill: 'Nightwatch',
          value: 77,
        },
      ],
    },
    {
      title: 'Misc',
      items: [
        {
          skill: 'AWS Lambda',
          value: 86,
        },
        {
          skill: 'AWS SQS',
          value: 80,
        },
        {
          skill: 'AWS Cognito',
          value: 82,
        },
        {
          skill: 'AWS Amplify',
          value: 81,
        },
        {
          skill: 'MapBox',
          value: 87,
        },
      ],
    },
  ])

  const genSkillCards = () => {
    return skillTree.map(section => {
      return <div>
        <div class="skill-title">{section.title}</div>
        <div class="skill-grid">
          {section.items.map(skill => {
            return <div class="skill-data">
              <div>{skill.skill}</div>
              <PBar value={skill.value} name={skill.skill}/>
            </div>
          })}
        </div>
      </div>
    });
  }

  return (
    <div className="skills-container">
      {genSkillCards()}
    </div>
  )
}

export default Skills;
