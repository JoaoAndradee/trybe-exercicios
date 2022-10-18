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
    ],
    selectedColor: { color: 'white' },
  }

  handleClickColor = () => {
    const { color, selectedColor } = this.state;
    const index = Math.round(Math.random() * 2);
    this.setState({
      selectedColor: {
        ...selectedColor,
        ...color[index],
      }
    })
  }

  render() {
    const { selectedColor } = this.state;
    return (
      <MyContext.Provider>
        <button
          type="button"
          className="box"
          style={selectedColor}
          onClick={this.handleClickColor}
        >
          Click me to change my color
        </button>
      </MyContext.Provider>
    )
  }
}

export default ColorBox;
