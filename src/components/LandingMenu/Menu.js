import React from 'react';
import './Menu.scss';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonList: [
        {
          name: 'Jobs',
          img: null,
        },
        {
          name: 'Skills',
          img: null,
        },
        {
          name: 'Resume',
          img: null,
        },
        {
          name: 'Contact',
          img: null,
        },
      ],
    };
  }

  render() {
    return (
      <div className="menu">
        <div className="menu-container shadow-2">
          {this.state.buttonList.map((item) => 
            <div className="menu-buttons divider">
              <img className="icon" src={item.img} alt={item.name} key={item.name}></img>
              <div>{item.name}</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Menu;
