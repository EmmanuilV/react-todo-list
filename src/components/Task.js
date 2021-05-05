import React from 'react'


const Task = (props) => {
    const todoItem = props.todoItem
    const deleteItem = props.deleteItem
    return (
        <section >
            <button onClick={() => deleteItem(todoItem.todoItemId)}>x</button>
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