import React from 'react';
import './Chip.scss';
import Header from 'images/chip.svg'

class Chip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="chip">
        <div className="chip-header">{this.props.header}</div>
        <div className="chip-text">{this.props.text}</div>
      </div>
    );
  }
}

export default Chip;
