import React, { useState } from 'react';
import './PortfolioCard.scss';
import Divider from '@material-ui/core/Divider';
import GithubIcon from 'images/Octicons-mark-github.svg'
import Chip from '@material-ui/core/Chip';

function PortfolioCard ({ title, description, tags, url, type }) {
  const renderChips = () => {
  return tags.map(tag => {
    let chipStyle
    switch (tag) {
      case 'vue':
        chipStyle =  {
          backgroundColor: 'lightgreen',
          color: 'black',
        }
        break
      case 'javascript':
        chipStyle = {
          backgroundColor: 'lightblue',
          color: 'black',
        }
        break
      case 'html':
        chipStyle = {
          backgroundColor: 'darkviolet',
          color: 'white',
        }
        break
      case 'css':
        chipStyle = {
          backgroundColor: 'gold',
          color: 'black',
        }
        break
      case 'swift':
        chipStyle = {
          backgroundColor: 'goldenrod',
          color: 'white',
        }
        break
      case 'chrome extension':
        chipStyle = {
          backgroundColor: 'lightseagreen',
          color: 'white',
        }
        break
      case 'react':
        chipStyle = {
          backgroundColor: 'darkslateblue',
          color: 'white',
        }
        break
      case 'redux':
        chipStyle = {
          backgroundColor: 'fuchsia',
          color: 'white',
        }
        break
      case 'emotionjs':
        chipStyle = {
          backgroundColor: 'greenyellow',
          color: 'black',
        }
        break
      case 'nodejs':
        chipStyle = {
          backgroundColor: 'lawngreen',
          color: 'black',
        }
        break
      case 'mongodb':
        chipStyle = {
          backgroundColor: 'limegreen',
          color: 'white',
        }
        break
      default:
        chipStyle = {
          backgroundColor: 'lightgrey',
          color: 'black',
        }
        break                  
      }
      return <Chip label={tag} size="small" style={{...chipStyle, marginRight: "4px"}} clickable/>
    })
  }

  const handleClick = () => {
    window.open(url, '_blank')
  }

  const bgColor = () => {
    switch(type) {
      case 'resume':
        return {
          backgroundColor: 'orangered',
          color: 'white',
        }
      case 'doubledoor':
        return {
          backgroundColor: 'salmon',
          color: 'white',
        }
      case 'launchmaps':
        return {
          backgroundColor: 'steelblue',
          color: 'white',
        }
      default:
        return {
          backgroundColor: 'white',
        }
    }
  }

  return (
    <div
      className="portfolio-card-container shadow-2"
      onClick={handleClick}
      style={bgColor()}
    >
      <div className="card-contents">
        <div className="title-header">
          <div className="title-text">{title}</div>
          <div>{renderChips()}</div>
          </div>
        <Divider/>
        <div className="description">{description}</div>
      </div>
      <img src={GithubIcon}/>
    </div>
  )
}

export default PortfolioCard;
