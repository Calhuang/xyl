import React, { useState } from 'react';
import './Contact.scss';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/LastPage';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useDrag } from 'react-use-gesture'

import { useDispatch } from 'react-redux'
import { toggleDrawer } from 'redux/slices'

function Contact () {
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(toggleDrawer({ anchor: 'right', open: false }))
  }

  const renderSocial = () => {
    const social = [
      { name: 'LinkedIn', icon: <GitHubIcon/>, url: 'https://www.linkedin.com/in/calhuang1/' },
      { name: 'Github', icon: <LinkedInIcon/>, url: 'https://www.github.com/Calhuang' }]
    return social.map(item => <div className="social" onClick={() => window.open(item.url, '_target')}>{item.icon}&nbsp;{item.name}</div>)
  }

  const drag = useDrag(({ swipe: [swipeX] }) => {
    // position will either be -1, 0 or 1
    const open = false
    let anchor = 'right'
    if (swipeX === 1) {
      dispatch(toggleDrawer({anchor, open}))
    }
  })
  
  return (
    <div className="contact-container" {...drag()}>
      <div className="header-bar">
        <IconButton color="primary" onClick={handleClose} aria-label="close">
          <CloseIcon fontSize="large"/>
        </IconButton>
      </div>
      <div className="info-bg">
        <div className="name">Calvin</div>
        <div className="name">Huang</div>
        <br/>
        <div className="position">Full-Stack Engineer</div>
        <br/>
        <div className="email">clvnln794@yahoo.com</div>
        <div>-{'\u2022'}-</div>
        <div className="about">
          I enjoy tinkering with electronics and building DIY solutions. 
          Still deciding if purchasing a 3d printer is worth it... 
          Currently playing Path of Exile and Apex Legends.
        </div>
        <div>-{'\u2022'}-</div>
      </div>
      <br/>
      <div className="social-container">
        {renderSocial()}
      </div>
    </div>
  )
}

export default Contact;
