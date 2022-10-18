import React from 'react';
import MyContext from './MyContext';

class ColorBox extends React.Component {
  state = {
    blue: { backgroundColor: 'blue' },
    red: { backgroundColor: 'red' },
    yellow: { backgroundColor: 'yellow' },
  }

  handleClickColor = () => {
    const { blue, red, yellow } = this.state;
    const index = Math.floor(Math.random() * 2);

  }

  render() {
    return (
      <MyContext.Provider>
        <button
          type="button"
          className="box"
          style={this.state.red}
        // onClick={this.handleClickColor}
        >
          Click me to change my color
        </button>
      </MyContext.Provider>
    )
  }
}

export default ColorBox;
