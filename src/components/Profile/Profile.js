import React from 'react';
import './Profile.scss';
import prof from 'images/propic.png'
import Card from 'components/CardBox/Card'
import Post from 'components/BlogPost/Post'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'Calvin Huang',
        role: 'Full_Stack_Developer'
      },
      logs: [
        {
          date: "12-03-2120",
          text: "% Hello. This is my first log of the website. I am still working on implementing more features. Hopefully it turns out well."
        },
        {
          date: "12-04-2120",
          text: "% Second post."
        },
      ],
    };
  }

  render() {
    return (
      <div className="profile">
        <div className="userInfo eng-font">
          <img className="profile-pic" src={prof} alt="profile"/>
          <div className="name">{this.state.userInfo.name}</div>
          <div className="role">{this.state.userInfo.role}</div>
        </div>
        <Card
        header={
          <div>Message</div>
        }
        icon="bell"
        content={
         <div>% Welcome. My name is Calvin Huang. Feel free to explore my site. Thank you for coming.</div>
        }/>
        <br/>
        <div>
          {this.state.logs.slice(0).reverse().map((post) => 
            <Post header={post.date} icon="message" content={post.text} key={post.date}/> 
          )}
        </div>
      </div>
    );
  }
}

export default Profile;
