import React from 'react';
import './Card.scss';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';

const renderIcon = (name) => {
  switch(name) {
    case 'bell':
      return <NotificationsOutlinedIcon/>
    case 'message':
      return <ChatOutlinedIcon/>
    default:
      return <ChatOutlinedIcon/>
  }
}

function Card({ header, icon, content }) {
  return (
    <div className="card-box">
      <div className="card-header eng-font">
        <div>{header}</div>
        {renderIcon(icon)}
      </div>
      <div className="card-content eng-font">
        {content}
      </div>
    </div>
  );
}

export default Card;
