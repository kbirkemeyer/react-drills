import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterColors: "",
      nailPolishColors: ['tahitian blue', 'PSL orange', 'firetruck red', 'pinky out', 'pea soup']
    }
  }
  
handleChange (fColor) {
  this.setState({filterColors: fColor});
}

  render () {
    let displayColors = this.state.nailPolishColors
    .filter((e) => {
      return e.includes(this.state.filterColors)
    })
    .map((e, i) => {
      return <h3 key={i}>{e}</h3>
    })
    return (
      <div>
        <input onChange={(e) => this.handleChange(e.target.value)} type="text"/>
        {displayColors} 
      </div>
    )
  }
}

export default App;
