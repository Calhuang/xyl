import React, { useState, useEffect } from 'react';
import './ProgressBar.scss';

function ProgressBar({ value=50, name }) {
  useEffect(() => {
    document.getElementById(name + '-bar').style.width = value + '%';
  });

  return (
    <div className="progress-bar-container">
      <div>{'['}</div>
      <div class="progress-bar-bg">
        <div class="progress-bar-fg">
          <div class="progress-bar-line" id={name + '-bar'}></div>
        </div>
      </div>
      <div>{']'}</div>
    </div>
  )
}

export default ProgressBar;
