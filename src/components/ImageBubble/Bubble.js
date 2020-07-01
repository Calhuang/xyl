import React, { useState } from 'react';
import './Bubble.scss';
import Aperature from 'images/aperature.svg'
import Iso from 'images/iso.svg'
import ShutterSpeed from 'images/shutter_speed.svg'
import Focal from 'images/focal.svg'
import LazyLoad from 'react-lazyload';
import Image, { Shimmer } from 'react-shimmer'

function Bubble ({image, index, overlay=false, onModalOpen, large}) {
  const [isHovering, setIsHovering] = useState(false)
  const [fadeStyle, setFadeStyle] = useState('overlay animate__animated animate__slideInUp')

  const applyChipStyle = (type) => {
    if (large) {
      return 'large'
    }
    if (type.isFeatured) {
      return 'bubble featured'
    }
    // -- portrait detection
    const exif = JSON.parse(image.exif)
    if (exif['Orientation'].value === 6) {
      // portrait
      return 'portrait-bubble'
    }
    return 'bubble'
  }

  const handleMouseOver = (e) => {
    setFadeStyle('overlay animate__animated animate__slideInUp')
    setIsHovering(true)
  }

  const handleMouseLeave = (e) => {
    setFadeStyle('overlay animate__animated animate__fadeOut')
    setTimeout(() => {
      if (document.getElementsByClassName('bubble-container')) {
        setIsHovering(false)
      }
    }, 800)
  }

  const optimizedImage = (imageURL) => {
    return imageURL.replace('upload', `upload/w_${large ? '1000' : '500'},q_auto:best`)
  }

  return (image ?
    <div className="bubble-container"
      onMouseEnter={e => handleMouseOver(e)}
      onMouseLeave={e => handleMouseLeave(e)}
      onClick={e => onModalOpen(index)}
    >
      {image.isFeatured ? <div 
        className="chip-feat animate__animated animate__pulse animate__repeat-3"
      >Featured</div> : null}
      <div className={applyChipStyle(image)}>
        {(isHovering && overlay) ? <div className={fadeStyle}>
          <div className="camera-container">
            <div>Google Pixel 3XL</div>
            <div>
              <div className="camera-info">
                <img src={Aperature}/>
                <div className="info-text">f/1.8</div>
              </div>
              <div className="camera-info">
                <img src={ShutterSpeed}/>
                <div className="info-text">1/7812 sec.</div>
              </div>
              <div className="camera-info">
                <img src={Iso}/>
                <div className="info-text">ISO-79</div>
              </div>
              <div className="camera-info">
                <img src={Focal}/>
                <div className="info-text">4mm</div>
              </div>
            </div>
          </div>
        </div> : null}
        <LazyLoad height={250}>
          <Image src={optimizedImage(image.image)}
            fallback={<Shimmer width={large ? 800 : 250} height={250}/>}
          />
        </LazyLoad>
      </div>
    </div>
    : <Shimmer width={large ? 800 : 250} height={250}/>
  )
}

export default Bubble;
