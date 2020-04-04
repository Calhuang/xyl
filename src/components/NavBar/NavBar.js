import React from 'react';
import './NavBar.scss';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonList: [
        {
          name: 'Home',
          char: 'ホーム',
          img: null,
          link: '/',
        },
        {
          name: 'Experience',
          char: '仕事の経験',
          img: null,
          link: '/exp',
        },
        {
          name: 'Skills',
          char: 'スキル',
          img: null,
          link: '/skills',
        },
        {
          name: 'Resume',
          char: '履歴書',
          img: null,
          link: '/resume',
        },
        {
          name: 'Contact',
          char: '個人情報',
          img: null,
          link: '/contact',
        },
      ],
      selectedButton: 0,
    };
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
          {this.state.buttonList.map((item, index) => 
            <Link to={item.link} style={{ textDecoration: 'none' }}>
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

export default NavBar;
