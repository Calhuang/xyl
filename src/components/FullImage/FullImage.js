import React from 'react';
import './FullImage.scss';
import Box from 'components/InfoBoxes/Boxes'
import Grow from '@material-ui/core/Grow';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Image, { Shimmer } from 'react-shimmer'

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
      <div key={'box-' + index}><Box title={key} text={exifValues[index].description}/></div>)
    })
  }

  const renderDeviceName = () => {
    const exif = JSON.parse(imageObj.exif)
    if (exif.Make && exif.Model) {
      return `${exif.Make.description} ${exif.Model.description}`
    }
    return 'Unkown Device'
  }

  const optimizedImage = (imageURL) => {
    const width = document.documentElement.clientWidth
    return imageURL.replace('upload', `upload/w_${width},dpr_auto`)
  }

  return (
    <div>
      <Dialog 
        fullScreen 
        open={isModal} 
        onClose={handleClose} 
        TransitionComponent={Transition}
      >
        <div className="close-button">
          <IconButton color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </div>
        {imageObj && <div className="full-image-container">
          <div className="full-image">
            <Image src={optimizedImage(imageObj.image)}
              fallback={<Shimmer width={800} height={document.documentElement.clientHeight - 40}/>}
            />
          </div>
        </div>}
        <div className="bottom-info">
        {imageObj && <div><span className="subtext">shot with a</span> {renderDeviceName()}</div>}
          <br/>
          <div className="info-grid">
            {imageObj ? renderImageDetails() : null}
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default FullImage;
