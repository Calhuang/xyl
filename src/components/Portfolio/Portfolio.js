import React, { useState } from 'react';
import './Portfolio.scss';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/FirstPage';
import PortfolioCard from 'components/Portfolio/PortfolioCard/PortfolioCard';
import { useDrag } from 'react-use-gesture'

import { useDispatch } from 'react-redux'
import { toggleDrawer } from 'redux/slices'

function Portfolio () {
  const dispatch = useDispatch()
  const [projects, getProjects] = useState([
    {
      title: 'md-wiki',
      description: 'A wiki site that supports markdown!',
      url: 'https://github.com/Calhuang/md-wiki',
      type: 'github',
      tags: ['vue', 'javascript', 'sqlite3']
    },
    {
      title: 'switch-designer',
      description: 'A website for customising Nintendo Switch Joycon colors.',
      url: 'https://github.com/Calhuang/switch-designer',
      type: 'github',
      tags: ['html', 'css', 'javascript', 'firebase']
    },
    {
      title: 'Brght',
      description: 'A macOS toolbar application for automating display brightness based on if a power source is detected.',
      url: 'https://github.com/Calhuang/Brght',
      type: 'github',
      tags: ['swift']
    },
    {
      title: 'rdlinker',
      description: 'Quickly convert openload link to Real-Debrid link when an openload video is detected.',
      url: 'https://github.com/Calhuang/rdlinker',
      type: 'github',
      tags: ['html', 'javascript', 'chrome extension']
    },
  ])

  const [professional, getProfessional] = useState([
    {
      title: 'Resume',
      description: 'My resume.',
      url: 'https://files.calverino.com/resume5152020.pdf',
      type: 'resume',
      tags: ['resume']
    },
    {
      title: 'DoubleDoor',
      description: 'Your one-stop shop for real estate.',
      url: 'https://www.doubledoor.io',
      type: 'doubledoor',
      tags: ['vue', 'javascript', 'nodejs', 'mongodb']
    },
    {
      title: 'LaunchMaps',
      description: 'A website for finding your perfect job.',
      url: 'https://www.launchmaps.com',
      type: 'launchmaps',
      tags: ['react', 'redux', 'emotionjs', 'javascript']
    },
  ])

  const handleClose = () => {
    dispatch(toggleDrawer({ anchor: 'left', open: false }))
  }

  const renderProjectCards = () => {
    return projects.map(proj => <PortfolioCard {...proj}/>)
  }

  const renderProfessionalCards = () => {
    return professional.map(proj => <PortfolioCard {...proj}/>)
  }

  const drag = useDrag(({ swipe: [swipeX] }) => {
    // position will either be -1, 0 or 1
    const open = false
    let anchor = 'left'
    if (swipeX === -1) {
      dispatch(toggleDrawer({anchor, open}))
    }
  })
  
  return (
    <div className="portfolio-container">
      <div className="header-bar">
        <IconButton color="secondary" onClick={handleClose} aria-label="close">
          <CloseIcon fontSize="large"/>
        </IconButton>
      </div>
      <div className="flag-container">
        {/* <div className="pole"></div> */}
        <div {...drag()} className="card-grid">
          {renderProfessionalCards()}
          {renderProjectCards()}
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
