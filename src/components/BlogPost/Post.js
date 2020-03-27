import React from 'react';
import './Post.scss';
import Card from 'components/CardBox/Card'

function Post({ header, icon, content }) {
  return (
    <div className="post-box">
      <Card
        header={
          <div>{`Log//${header}`}</div>
        }
        icon={icon}
        content={
          <div>{content}</div>
        }/>
    </div>
  );
}

export default Post;
