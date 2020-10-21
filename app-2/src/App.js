import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fruit: ['banana', 'strawberry', 'lychee', 'mango']
    };
  }

  render() {
    let displayFruit = this.state.fruit.map((e, i) => {
      return <h3 key={i}>{e}</h3>
    })
    return (
      <div> {displayFruit} </div>
    )
  }

}

export default App;