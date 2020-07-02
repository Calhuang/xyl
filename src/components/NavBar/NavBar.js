import React from 'react';
import './NavBar.scss';
import {
  Link,
  withRouter,
} from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedButton: 0,
    };
  }

  componentDidMount() {
    // set current nav page
    this.props.buttonList.forEach((nav, index) => {
      if (this.props.location.pathname === nav.link) {
        this.setState({ selectedButton: index })
      }
    })
  }

  select = (index) => {
    this.setState(state => ({
      selectedButton: index,
    }))
  }

  isCurrentLink = (item) => {
    return window.location.pathname === (item.link)
  }

  handleImgOver = (e, item) => {
    if (!this.isCurrentLink(item)) {
      e.currentTarget.src = item.img_w
    }
  }

  handleImgOut = (e, item) => {
    if (!this.isCurrentLink(item)) {
      e.currentTarget.src = item.img_b
    }
  }

  render() {
    return (
      <div className="menu">
        <div className="menu-container">
          {this.props.buttonList.map((item, index) => 
            <Link to={item.link} style={{ textDecoration: 'none' }} key={item.link}>
              <div className={index === this.state.selectedButton ? "menu-buttons selected" : "menu-buttons"} onClick={() => this.select(index)}>
                <div className="image-bg">
                  <img src={this.isCurrentLink(item) ? item.img_w :item.img_b }
                    onMouseOver={e => this.handleImgOver(e, item)}
                    onMouseOut={e => this.handleImgOut(e, item)}
                    alt="navbar"
                  />
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
