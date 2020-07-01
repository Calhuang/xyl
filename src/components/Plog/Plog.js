import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Plog.scss';
import Gallery from 'components/Gallery/Gallery'
import FullImage from 'components/FullImage/FullImage'
import { useQuery } from '@apollo/react-hooks'
import { GET_ALL_POSTS } from 'gql/post'

function Plog () {
  const [isModal, setIsModal] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)
  const [hasNoMore, setHasNoMore] = useState(false)
  
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

  return (
    <div className="plog-container">
      <FullImage 
        isModal={isModal}
        imageObj={data ? data.allPosts[imageIndex] : null}
        close={handleModalClose}
      />
      <Gallery data={data ? data.allPosts : []} fetch={getMoreData} noMoreData={hasNoMore} onModalOpen={handleModalOpen}/>
    </div>
  )
}

export default Plog;
