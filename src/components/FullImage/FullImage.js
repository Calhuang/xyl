import React from 'react';
import './FullImage.scss';
import Box from 'components/InfoBoxes/Boxes'
import Grow from '@material-ui/core/Grow';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Image, { Shimmer } from 'react-shimmer'
import { isMobile } from 'utils'
import Pop from 'components/Transitions/Pop/Pop'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

function FullImage ({isModal, imageObj, close}) {
  const handleClose = () => {
    close()
  };

  const exifWhitelist = [
    'Bits Per Sample',
    'Image Height',
    'Image Width',
    'DateTime',
    'ExposureTime',
    'FNumber',
    'ISOSpeedRatings',
    'ShutterSpeedValue',
    'ApertureValue',
    'BrightnessValue',
    'FocalLength',
  ]

  const renderImageDetails = () => {
    const exif = JSON.parse(imageObj.exif)
    const exifKeys = Object.keys(exif)
    const exifValues = Object.values(exif)
    return exifKeys.map((key, index) => {
      return ((exifWhitelist.includes(key)) && 
      <Pop key={'box-' + index}><div><Box title={key} text={exifValues[index].description}/></div></Pop>)
    })
  }

  const renderDeviceName = () => {
    const exif = JSON.parse(imageObj.exif)
    if (exif.Make && exif.Model) {
      return `${exif.Make.description} ${exif.Model.description}`
    }
    return 'Unknown Device'
  }

  const optimizedImage = (imageURL) => {
    const width = document.documentElement.clientWidth
    const roundNear100 = Math.ceil(width / 100) * 100
    return imageURL.replace('upload', `upload/w_${roundNear100},dpr_auto`)
  }

  return (
    <div>
      <Dialog 
        fullScreen 
        open={isModal} 
        onClose={handleClose} 
        TransitionComponent={Transition}
      >
        <div className={isMobile() ? 'close-button mobile' : 'close-button'}>
          <IconButton color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon/>
          </IconButton>
        </div>
        <div className="full-image-wrapper">
          {imageObj && <div className="full-image-container">
            <div className="full-image">
              <Image src={optimizedImage(imageObj.image)}
                fallback={<Shimmer width={800} height={document.documentElement.clientHeight - 40}/>}
              />
            </div>
          </div>}
          <br/>
          {imageObj && <div><span className="subtext">shot with a</span> {renderDeviceName()}</div>}
          <div className="bottom-info">
            <div className="info-grid">
              {imageObj ? renderImageDetails() : null}
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default FullImage;
