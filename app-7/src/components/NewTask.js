import React, {Component} from 'react';


export default class NewTask extends Component {
    constructor() {
        super();

        this.state = {
            newTask: ''
        }
    }
    
    
    addTask() {
        const {addTask} = this.props;
        addTask(this.state.newTask);
        this.setState({newTask: ''})
    }
    
    updateText(e) {
        this.setState({newTask: e});
    }

    render () {
        
        return (
            <div>
                <input placeholder="Whatchu gotta do?" onChange={(e) => this.updateText(e.target.value)} value={this.state.newTask}/>
                <button onClick={() => this.addTask()}>Add Task</button>
            </div>
        )
    }
    
}