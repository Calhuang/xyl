import React, { useState } from 'react';
import './SideBar.scss';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useDispatch } from 'react-redux'
import { toggleDrawer } from 'redux/slices'
import { useDrag } from 'react-use-gesture'

function SideBar ({ text, isLeftSide }) {
  const dispatch = useDispatch()
  const [position, setPosition] = useState(0)

  const handleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    let anchor = isLeftSide ? 'left' : 'right'
    dispatch(toggleDrawer({anchor, open}))
  };

  const drag = useDrag(({ swipe: [swipeX] }) => {
    // position will either be -1, 0 or 1
    const open = true
    let anchor = isLeftSide ? 'left' : 'right'
    if (swipeX === 1) {
      dispatch(toggleDrawer({anchor, open}))
    } else if (swipeX === -1) {
      dispatch(toggleDrawer({anchor, open}))
    }
  })

  return (
    <div
      className={isLeftSide ? 'side-bar left' : 'side-bar right'}
      onClick={handleDrawer(true)}
    >
      {/* <div className={isLeftSide ? 'side-bar-peek left shadow-3' : 'side-bar-peek right shadow-3'}></div> */}
      <div {...drag()} className={isLeftSide ? 'side-bar-button left' : 'side-bar-button right'}>
        <div className="side-text">{text}</div>
        <KeyboardArrowDownIcon/>
      </div>
    </div>
  )
}

export default SideBar;
