import React from 'react'


const Task = (props) => {
    const todoItem = props.todoItem

    return (
        <section id={todoItem.todoItemId}>
            <button >x</button>
            <div className="title">
                <input type="checkbox"  />
                <h3>{todoItem.title}</h3>
            </div>
            <div className="info">
                <p>{todoItem.description && (<p>{todoItem.description}</p>) }</p>
                <p>{todoItem.dueDate}</p>
            </div>
        </section>
    )
}

export default Task;