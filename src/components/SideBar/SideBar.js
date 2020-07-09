import React, { useState } from 'react';
import './SideBar.scss';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useDispatch } from 'react-redux'
import { toggleDrawer } from 'redux/slices'

function SideBar ({ text, isLeftSide }) {
  const dispatch = useDispatch()

  const handleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    let anchor = isLeftSide ? 'left' : 'right'
    dispatch(toggleDrawer({anchor, open}))
  };

  return (
    <div
      className={isLeftSide ? 'side-bar left' : 'side-bar right'}
      onClick={handleDrawer(true)}
    >
      {/* <div className={isLeftSide ? 'side-bar-peek left shadow-3' : 'side-bar-peek right shadow-3'}></div> */}
      <div className={isLeftSide ? 'side-bar-button left' : 'side-bar-button right'}>
        <div className="side-text">{text}</div>
        <KeyboardArrowDownIcon/>
      </div>
    </div>
  )
}

export default SideBar;
