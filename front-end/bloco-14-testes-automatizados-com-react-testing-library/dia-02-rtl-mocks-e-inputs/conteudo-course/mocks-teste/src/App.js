import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
    };
  }

  componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    fetch(API_URL, { headers: { Accept: 'application/json '} })
      .then((response) => response.json())
      .then(({ joke }) => this.setState({ joke }));
  }

  render() {
    const { joke } = this.state;

    return (
      <div className="App">
        {joke}
        <p><button type="button" onClick={() => window.location.reload()} >New Joke</button></p>
      </div>
    );
  }
}

export default App;