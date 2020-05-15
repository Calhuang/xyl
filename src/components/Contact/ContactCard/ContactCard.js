import React from 'react';
import './ContactCard.scss';
import prof from 'images/propic.png'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

function ContactCard() {
  return (
    <div className="contact-card-container eng-font">
      <img className="profile" src={prof} alt="profile"/>
      <div className="name">Calvin Huang</div>
      <div className="title">Fullstack Developer - For Hire</div>
      <br/>
      <br/>
      <div className="icons">
        <div className="email"><a href="mailto:clvnln794@yahoo.com"><EmailIcon/></a></div>
        <div className="github"><a href="https://github.com/Calhuang" target="_blank"><LinkedInIcon/></a></div>
        <div className="linkedin"><a href="https://www.linkedin.com/in/calhuang1/" target="_blank"><GitHubIcon/></a></div>
      </div>
    </div>
  )
}

export default ContactCard;
