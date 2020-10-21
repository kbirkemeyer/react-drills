import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inputText: ''
    };
  }

  updateText(e) {
    this.setState({
      inputText: e
    });
  }

  render() {
    return (
    <div className="App">
      <input className="inputBox" placeholder="Type here..." onChange={(e) => this.updateText(e.target.value)}></input>
      <span className="textEntered">{this.state.inputText}</span>
    </div>
    )
  };
}

export default App;
