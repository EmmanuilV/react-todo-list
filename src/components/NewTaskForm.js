import React, { Component } from 'react'

class NewTaskForm extends Component {
    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("it's work");
        this.props.onSubmit({
            title: "it's new task"
        })
    }

    render() {
        return (
            <form 
                name="task" 
                onSubmit={this.onSubmitHandler}
                className="new-task-form">
                <input type="text" name="title" placeholder="Title" required />
                <input type="text" name="description" placeholder="Description" />
                <input type="date" name="dueDate" />
                <button type="submit">Add Task</button>
            </form>
        )
    }
}

export default NewTaskForm
