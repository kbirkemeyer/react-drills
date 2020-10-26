import React, {Component} from 'react';
import './App.css';
import Todo from './components/Todo';
import List from './components/List';
import NewTask from './components/NewTask';


class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: ['give belly rubs', 'kiss snoots', 'eat a healthy breakfast', 'try to be my best'],
      newTask: ''
    }
  }

  addTask () {
    let taskPush = [...this.state.tasks];
    taskPush.push(this.state.newTask);
    this.setState({tasks: taskPush});
    this.setState({newTask: ''})
  }

  handleChange (e) {
    this.setState({newTask: e})
  }

  
  render() {
    return (
      <div>
          <Todo tasks={this.state.tasks}/>
          <input placeholder="Type your task here..." onChange={(e) => this.handleChange(e.target.value)} value={this.state.newTask}></input>
          <button onClick={() => this.addTask()}>Add Task</button>
      </div>
    );
  }  
}

export default App;
