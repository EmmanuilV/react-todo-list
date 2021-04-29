import React from 'react'

const Form = () => {
    return (
        <div className="new-task-form">
            <form name="task">
                <input type="text" name="title" placeholder="Title" required />
                <input type="text" name="description" placeholder="Description" />
                <input type="date" name="dueDate" />
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}

export default Form
