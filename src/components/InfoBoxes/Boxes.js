import React from 'react';
import './Boxes.scss';

function Boxes ({title, text}) {
  return (
    <div className="info-box">
      <div className="box-text">{text}</div>
      <div className="box-title">{title}</div>
    </div>
  )
}

export default Boxes;
