import React, { Component } from 'react'

class NewTaskForm extends Component {
lastId = 4;
state = {todoItemId: ++this.lastId, title: '', description: '', done: false, dueDate: ''}
    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("it's work");
        this.props.onSubmit(this.state)        
        this.setState({todoItemId: ++this.lastId, title: '', description: '', done: false, dueDate: ''})
        console.log(this.state);
    }

    onChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    onChangeDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }    
    onChangeDoneAndDueDate = (event) => {
        this.setState({
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
                <input type="date" name="dueDate" onChange={this.onChangeDoneAndDueDate} value={this.state.dueDate}/>
                <button type="submit">Add Task</button>
            </form>
        )
    }
}

export default NewTaskForm