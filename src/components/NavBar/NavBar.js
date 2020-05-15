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

  render() {
    return (
      <div className="menu">
        <div className="menu-container">
          {this.props.buttonList.map((item, index) => 
            <Link to={item.link} style={{ textDecoration: 'none' }} key={item.link}>
              <div className={index === this.state.selectedButton ? "menu-buttons selected" : "menu-buttons"} onClick={() => this.select(index)}>
                <div className="jp-font jp-text">{item.char}</div>
                <div className="eng-font">{item.name}</div>
              </div>
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
