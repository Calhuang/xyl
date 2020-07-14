import React, { useState } from 'react';
import './Plog.scss';
import Gallery from 'components/Gallery/Gallery'
import FullImage from 'components/FullImage/FullImage'
import Drawer from '@material-ui/core/Drawer';
import Portfolio from 'components/Portfolio/Portfolio'
import Contact from 'components/Contact/Contact'
import ScrollDownIcon from 'images/scrolldown.svg'
import { withStyles } from '@material-ui/styles';
import { isPortrait } from 'utils'

import { useDispatch, useSelector } from 'react-redux'
import { toggleDrawer, drawerSelector, toggleLoading } from 'redux/slices'

import { useQuery } from '@apollo/react-hooks'
import { GET_ALL_POSTS } from 'gql/post'

const styles = {
  drawerPaper: {
    width: '360px',
    backgroundColor: 'transparent',
    direction: 'rtl',
    boxShadow: 'none',
  },
};

function Plog ({ classes }) {
  const [isModal, setIsModal] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)
  const [hasNoMore, setHasNoMore] = useState(false)
  const { left, right } = useSelector(drawerSelector)
  const dispatch = useDispatch()
  
  // graphql QUERY
  const { loading, error, data, fetchMore } = useQuery(GET_ALL_POSTS, {
    variables: {
      page: 1
    },
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
  });

  const handleModalOpen = (index) => {
    setImageIndex(index)
    setIsModal(true)
  }

  const handleModalClose = () => {
    setIsModal(false)
  }

  const handleDrawerClose = (anchor) => {
    dispatch(toggleDrawer({ anchor, open: false }))
  }
  
  const getMoreData = (offsetPage) => {
    if (loading) {
      return
    }
    fetchMore({
      notifyOnNetworkStatusChange: true,
      variables: {
        page: offsetPage
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        if (fetchMoreResult.allPosts.length === 0) {
          setHasNoMore(true)
        }
        const newData = Object.assign({}, prev, {
          allPosts: [...prev.allPosts, ...fetchMoreResult.allPosts]
        })
        return newData
      }
    });
  }

  const optimizedImage = (imageURL) => {
    return imageURL.replace('upload', `upload/w_auto:100:1920,q_auto:best,dpr_auto`)
  }

  const handleImageLoaded = () => {
    dispatch(toggleLoading(false))
    const loader = document.querySelector('.loader')
    if (loader) {
      loader.classList.add('loader--hide')
    }
  }

  const scrollHeight = () => {
    let pageHeight = window.innerHeight;
    window.scrollTo({top: pageHeight, behavior: 'smooth'})
  }

  return (
    <div className="plog-container">
      <div className="full-banner">
        <img className={isPortrait() ? "bg-pic portrait" : "bg-pic landscape"}src={data && optimizedImage(data.allPosts[0].image)} onLoad={handleImageLoaded}/>
        <div className="show-more-icon" onClick={scrollHeight}><img src={ScrollDownIcon} alt="scroll"/></div>
        <div className="banner-title">
          <div className="name">Calvin</div>
          <div className="name">Huang</div>
        </div>
      </div>
      <Drawer
        anchor="left"
        open={left}
        onClose={() => handleDrawerClose('left')}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Portfolio/>
      </Drawer>
      <Drawer anchor="right" open={right} onClose={() => handleDrawerClose('right')}>
        <Contact/>
      </Drawer>
      <FullImage 
        isModal={isModal}
        imageObj={data ? data.allPosts[imageIndex] : null}
        close={handleModalClose}
      />
      <br/>
      <br/>
      <br/>
      <Gallery data={data ? data.allPosts : []} fetch={getMoreData} noMoreData={hasNoMore} onModalOpen={handleModalOpen}/>
    </div>
  )
}

export default withStyles(styles)(Plog);
