import React from 'react';
import './Gallery.scss';
import ImgBubble from 'components/ImageBubble/Bubble'
import InfiniteScroll from 'react-infinite-scroll-component';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import FadeIn from 'components/FadeIn/FadeIn'

function Gallery ({data, onModalOpen, fetch, noMoreData}) {
  const renderImages = () => {
    let shiftedArray = data.slice()
    // shiftedArray.shift()
    return shiftedArray.map((item, index) => {
      return <FadeIn key={'imgbox' + index}>
        <ImgBubble image={item} index={index} onModalOpen={onModalOpen}/>
      </FadeIn>
    })
  }

  const portraitStyle = () => {
    const exif = JSON.parse(data[0].exif)
    if (exif['Orientation'].value === 6) {
      // portrait
      return 'portrait-banner'
    }
    return 'banner'
  }

  const applyChip = (data) => {
    return {...data, isNew: true}
  }

  return (
    <div className="gallery">
      {/* <div 
        className="chip-new-banner animate__animated animate__pulse animate__repeat-3"
      >New!</div>
      {data[0] && <div className={portraitStyle()}>
        <ImgBubble image={applyChip(data[0])} large index={0} key={0} onModalOpen={onModalOpen}/>
      </div>} */}
      <InfiniteScroll
        dataLength={data.length} //This is important field to render the next data
        next={() => fetch(Math.ceil((data.length + 10) / 10))}
        hasMore={!noMoreData}
        loader={
          <FadeIn><br/><br/><div className="loading-gallery"></div></FadeIn>
        }
        endMessage={
          <FadeIn><br/><br/><div className="end-gallery" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Top <ArrowUpwardIcon/></div></FadeIn>
        }>
        <div className="gallery-grid">{renderImages()}</div>
      </InfiniteScroll>
    </div>
  )
}

export default Gallery;
