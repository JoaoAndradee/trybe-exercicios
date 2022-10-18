import React from 'react';
import MyContext from './MyContext';

class ColorBox extends React.Component {
  state = {
    color: [
      {
        backgroundColor: 'red',
      },
      {
        backgroundColor: 'blue',
      },
      {
        backgroundColor: 'yellow',
      }
    ]
  }

  handleClickColor = () => {
    const { color } = this.state;
    const index = Math.floor(Math.random * 2);
    console.log(color[index]);
    return color[index];
  }

  render() {
    return (
      <MyContext.Provider>
        <button
          type="button"
          className="box"
          style={ }
          onClick={this.handleClickColor}
        >
          Click me to change my color
        </button>
      </MyContext.Provider>
    )
  }
}

export default ColorBox;
