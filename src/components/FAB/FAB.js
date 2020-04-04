import React, { useState } from 'react';
import './FAB.scss';
import Fab from '@material-ui/core/Fab';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
  Link,
} from "react-router-dom";

function FAB({ buttonList }) {
  const [visible, setVisible] = useState(false)

  const generateNavOptions = () => {
    return buttonList.map(nav => (
      <Link to={nav.link} style={{ textDecoration: 'none' }} key={nav.link}>
        <div className="fab-text">{nav.name}</div>
      </Link>
    ))
  }

  return (
    <div className={visible ? "fab-button-container bg" : "fab-button-container"}>
      <div className="fab-nav eng-font">
        {visible ? generateNavOptions() : null}
      </div>
      <Fab color="primary" className="fab-button" onClick={() => setVisible(!visible)}>
        <MoreVertIcon/>
      </Fab>
    </div>
  );
}

export default FAB;
