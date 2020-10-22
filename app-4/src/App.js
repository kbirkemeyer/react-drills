import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    }
  }

  updatePassword(e) {
    this.setState({
      password: e
    });
  }

  updateUsername(e) {
    this.setState({
      username: e
    });
  }

  render() {

    return (
      <div>
        <input placeholder='username' onChange={(e) => this.updateUsername(e.target.value)}/>
        <input placeholder='password' onChange={(e) => this.updatePassword(e.target.value)}/>
        <button onClick={() => window.alert(`username: ${this.state.username} password: ${this.state.password}`)}>Login</button>
      </div>
    );
  } 
}

export default App;
