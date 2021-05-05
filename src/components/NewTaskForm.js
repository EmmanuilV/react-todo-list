import React, { Component } from 'react'

class NewTaskForm extends Component {
    state = {}
    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("it's work");
        console.log(this.state);
        this.props.onSubmit(this.state)
        console.log(this.state);
        
        this.setState({todoItemId: '', title: '', description: '', done: false, dueDate: ''})
    }

    onChangeTitle = (event) => {
        this.setState({
            // todoItemId: ,
            title: event.target.value
        })
    }
    //            description: event.target.value,
    // dueDate: event.target.value
    onChangeDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }    
    onChangeDueDate = (event) => {
        this.setState({
            done: false,
            dueDate: event.target.value
        })
    }


    render() {
        return (
            <form 
                name="task" 
                onSubmit={this.onSubmitHandler}
                className="new-task-form">
                <input type="text" name="title" placeholder="Title" onChange={this.onChangeTitle} value={this.state.title} required />
                <input type="text" name="description" placeholder="Description" onChange={this.onChangeDescription} value={this.state.description}/>
                <input type="date" name="dueDate" onChange={this.onChangeDueDate} value={this.state.dueDate}/>
                <button type="submit">Add Task</button>
            </form>
        )
    }
}

export default NewTaskForm