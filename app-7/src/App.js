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
    }

    this.addTask = this.addTask.bind(this)

  }

  addTask (newTask) {
    let taskPush = [...this.state.tasks];
    taskPush.push(newTask);
    this.setState({tasks: taskPush});
  }

  
  render() {

    return (
      <div>
          <List tasks={this.state.tasks}/>
          <NewTask addTask={this.addTask}/>
          
      </div>
    );
  }  
}

export default App;
