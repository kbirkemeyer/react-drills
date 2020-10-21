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

  clickAlert () {
    return alert(`username: ${this.username} password: ${this.password}`);
  }

  render() {

    return (
      <div>
        <input placeholder='username'/>
        <input placeholder='password'/>
        <button onClick={this.clickAlert}>Login</button>
      </div>
    );
  } 
}

export default App;
